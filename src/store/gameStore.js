import { create } from 'zustand';
import { CARDS } from '../data/cards.js';
import { FACTIONS } from '../data/factions.js';
import { assignObjectives, OBJECTIVES } from '../data/objectives.js';
import { pickBill } from '../data/bills.js';

// Turns of petitioning between mandatory Senate votes.
export const VOTE_INTERVAL = 6;

// ── Helpers ──────────────────────────────────────────────────────────────────

const TITLES = ['Senator', 'Representative', 'Delegate', 'Envoy'];
const SURNAMES = [
  'Valdris', 'Orenth', 'Calix', 'Marveth', 'Solune', 'Draeven',
  'Kessari', 'Thorne', 'Yelvane', 'Corvath', 'Ellanu', 'Damasek',
  'Rhovane', 'Stelari', 'Quineth', 'Aboris', 'Lyssara', 'Penthal',
  'Vorthex', 'Zerathi',
];

function randomName() {
  const title = TITLES[Math.floor(Math.random() * TITLES.length)];
  const surname = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
  return `${title} ${surname}`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function getDangerMeters(meters) {
  return Object.entries(meters)
    .filter(([, v]) => v <= 20 || v >= 80)
    .map(([k]) => k);
}

// ── Initial state factory ────────────────────────────────────────────────────

function makeInitialState() {
  return {
    phase: 'title',
    meters: { senate: 50, military: 50, trade: 50, coalition: 50 },
    flags: [],
    turn: 0,
    objectives: [],
    completedObjectives: [],
    currentCard: null,
    deck: [],
    activeRoom: 'office',   // office | audience | vote
    pendingVote: null,      // the bill when a vote is due; locks the Audience Chamber
    turnsSinceVote: 0,      // drives the mandatory vote cadence
    deathCause: null,
    winData: null,
    activeBonuses: [],
    senatorName: '',
    senatorLog: loadLS('gs_senatorLog', []),
    legacyFlags: loadLS('gs_legacyFlags', []),
  };
}

// ── Card draw logic ───────────────────────────────────────────────────────────

const CATEGORY_WEIGHTS = { standard: 60, crossfire: 25, crisis: 10, objective: 5 };

function weightedCategory(available) {
  const byCategory = {};
  for (const card of available) {
    const cat = card.category || 'standard';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(card);
  }
  const entries = Object.entries(CATEGORY_WEIGHTS).filter(([cat]) => byCategory[cat]?.length > 0);
  if (entries.length === 0) return null;
  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  let rand = Math.random() * total;
  for (const [cat, weight] of entries) {
    rand -= weight;
    if (rand <= 0) return { category: cat, pool: byCategory[cat] };
  }
  const last = entries[entries.length - 1];
  return { category: last[0], pool: byCategory[last[0]] };
}

function drawNextCard(deck, flags, legacyFlags = []) {
  const available = deck.filter(
    (c) =>
      (!c.requiredFlags || c.requiredFlags.every((f) => flags.includes(f))) &&
      (!c.requiredLegacyFlags || c.requiredLegacyFlags.every((f) => legacyFlags.includes(f)))
  );
  if (available.length === 0) return { card: deck[0] || null, remaining: deck.slice(1) };
  const result = weightedCategory(available);
  if (!result) return { card: available[0], remaining: deck.filter((c) => c.id !== available[0].id) };
  const card = result.pool[Math.floor(Math.random() * result.pool.length)];
  const remaining = deck.filter((c) => c.id !== card.id);
  return { card, remaining };
}

// ── Store ─────────────────────────────────────────────────────────────────────

export const useGameStore = create((set, get) => ({
  ...makeInitialState(),

  startGame: () => {
    const { legacyFlags } = get();
    const objectives = assignObjectives();
    const shuffled = shuffle(CARDS);
    const flags = [];
    const { card, remaining } = drawNextCard(shuffled, flags, legacyFlags);

    const newFlags = card && card.id === 'pale_emissary' ? ['pale_met'] : [];

    // Persist first_pale_encounter when a Pale card opens the run
    let updatedLegacyFlags = legacyFlags;
    if (card && card.race === 'pale' && !legacyFlags.includes('first_pale_encounter')) {
      updatedLegacyFlags = [...legacyFlags, 'first_pale_encounter'];
      saveLS('gs_legacyFlags', updatedLegacyFlags);
    }

    // Apply run bonuses from previously completed objectives
    const meters = { senate: 50, military: 50, trade: 50, coalition: 50 };
    for (const obj of OBJECTIVES) {
      if (legacyFlags.includes(obj.id) && obj.runBonus) {
        for (const [faction, delta] of Object.entries(obj.runBonus)) {
          if (faction in meters) {
            meters[faction] = Math.max(10, Math.min(75, meters[faction] + delta));
          }
        }
      }
    }

    // Collect active bonuses for the brief screen
    const activeBonuses = OBJECTIVES.filter(
      (o) => legacyFlags.includes(o.id) && o.runBonus
    );

    set({
      phase: activeBonuses.length > 0 ? 'brief' : 'game',
      meters,
      flags: newFlags,
      turn: 0,
      objectives,
      completedObjectives: [],
      currentCard: card,
      deck: remaining,
      activeRoom: 'office',
      pendingVote: null,
      turnsSinceVote: 0,
      deathCause: null,
      winData: null,
      activeBonuses,
      senatorName: randomName(),
      legacyFlags: updatedLegacyFlags,
    });
  },

  beginRun: () => {
    set({ phase: 'game' });
  },

  swipe: (direction) => {
    const state = get();
    const { currentCard, meters, flags, turn, objectives, completedObjectives } = state;
    if (!currentCard) return;

    const choice = currentCard[direction];
    if (!choice) return;

    // Apply effects
    const newMeters = { ...meters };
    Object.entries(choice.effects || {}).forEach(([faction, delta]) => {
      if (faction in newMeters) {
        newMeters[faction] = Math.max(0, Math.min(100, newMeters[faction] + delta));
      }
    });

    // Collect new flags
    const newFlags = [...flags, ...(choice.flags || [])];

    const newTurn = turn + 1;

    // Check for death
    const deadFaction = Object.entries(newMeters).find(
      ([, v]) => v <= 0 || v >= 100
    );

    if (deadFaction) {
      const [factionId, value] = deadFaction;
      const faction = FACTIONS[factionId];
      const isTooHigh = value >= 100;
      const deathCause = {
        faction: factionId,
        factionName: faction.name,
        value,
        label: isTooHigh ? faction.tooHighLabel : faction.tooLowLabel,
        description: isTooHigh ? faction.tooHighDesc : faction.tooLowDesc,
      };

      // Check objectives one last time
      const tempState = { meters: newMeters, flags: newFlags, turn: newTurn };
      const newlyCompleted = objectives
        .filter((o) => !completedObjectives.includes(o.id) && o.check(tempState))
        .map((o) => o.id);
      const finalCompleted = [...completedObjectives, ...newlyCompleted];

      // Build senator log entry
      const entry = {
        name: state.senatorName,
        turns: newTurn,
        deathCause,
        date: new Date().toISOString(),
        completedObjectives: finalCompleted,
      };
      const newLog = [entry, ...state.senatorLog].slice(0, 50);
      saveLS('gs_senatorLog', newLog);

      // Set named legacy flags based on how the run ended
      const namedLegacyFlags = [];
      if (factionId === 'military' && isTooHigh) namedLegacyFlags.push('kra_van_war_started');
      if (factionId === 'senate') namedLegacyFlags.push('senate_dissolved');

      const newLegacyFlags = Array.from(
        new Set([...state.legacyFlags, ...finalCompleted, ...namedLegacyFlags])
      );
      saveLS('gs_legacyFlags', newLegacyFlags);

      set({
        meters: newMeters,
        flags: newFlags,
        turn: newTurn,
        deathCause,
        completedObjectives: finalCompleted,
        phase: 'dead',
        senatorLog: newLog,
        legacyFlags: newLegacyFlags,
      });
      return;
    }

    // Draw next card
    const { card: nextCard, remaining } = drawNextCard(state.deck, newFlags, state.legacyFlags);

    // pale_met flag when pale_emissary is drawn
    const updatedFlags =
      nextCard && nextCard.id === 'pale_emissary' && !newFlags.includes('pale_met')
        ? [...newFlags, 'pale_met']
        : newFlags;

    // Check objectives
    const tempState = { meters: newMeters, flags: updatedFlags, turn: newTurn };
    const newlyCompleted = objectives
      .filter((o) => !completedObjectives.includes(o.id) && o.check(tempState))
      .map((o) => o.id);
    const finalCompleted = [...completedObjectives, ...newlyCompleted];

    // Win check — all 3 assigned objectives completed
    if (objectives.length > 0 && objectives.every((o) => finalCompleted.includes(o.id))) {
      const entry = {
        name: state.senatorName,
        turns: newTurn,
        deathCause: null,
        outcome: 'retired',
        date: new Date().toISOString(),
        completedObjectives: finalCompleted,
      };
      const newLog = [entry, ...state.senatorLog].slice(0, 50);
      saveLS('gs_senatorLog', newLog);
      const newLegacyFlags = Array.from(new Set([...state.legacyFlags, ...finalCompleted]));
      saveLS('gs_legacyFlags', newLegacyFlags);
      set({
        meters: newMeters,
        flags: updatedFlags,
        turn: newTurn,
        completedObjectives: finalCompleted,
        phase: 'won',
        winData: {
          senatorName: state.senatorName,
          turn: newTurn,
          completedObjectives: finalCompleted,
          date: new Date().toISOString(),
        },
        senatorLog: newLog,
        legacyFlags: newLegacyFlags,
      });
      return;
    }

    // If deck is exhausted, reshuffle
    let newDeck = remaining;
    let finalCard = nextCard;
    if (!finalCard) {
      const reshuffled = shuffle(CARDS);
      const drawn = drawNextCard(reshuffled, updatedFlags, state.legacyFlags);
      finalCard = drawn.card;
      newDeck = drawn.remaining;
    }

    // Persist first_pale_encounter when a Pale card is drawn
    let updatedLegacyFlags = state.legacyFlags;
    if (finalCard && finalCard.race === 'pale' && !updatedLegacyFlags.includes('first_pale_encounter')) {
      updatedLegacyFlags = [...updatedLegacyFlags, 'first_pale_encounter'];
      saveLS('gs_legacyFlags', updatedLegacyFlags);
    }

    // Advance the vote cadence. When it's time, a bill reaches the floor: the
    // next card stays queued but the Audience Chamber is locked (handled in the
    // UI) until the player resolves the vote in the Senate Hall.
    const reachedVote = state.turnsSinceVote + 1 >= VOTE_INTERVAL;
    const pendingVote = reachedVote ? pickBill(state.pendingVote?.id) : null;

    set({
      meters: newMeters,
      flags: updatedFlags,
      turn: newTurn,
      completedObjectives: finalCompleted,
      currentCard: finalCard,
      deck: newDeck,
      legacyFlags: updatedLegacyFlags,
      turnsSinceVote: reachedVote ? 0 : state.turnsSinceVote + 1,
      pendingVote,
      activeRoom: reachedVote ? 'office' : 'audience',
    });
  },

  // Navigate between rooms in the Senator's Office. The Audience Chamber is
  // locked while a vote is pending — the player must settle the bill first.
  enterRoom: (room) => {
    const { pendingVote } = get();
    if (room === 'audience' && pendingVote) return;
    set({ activeRoom: room });
  },

  // Resolve a Senate vote. `meterDeltas` bundles the whip costs and the
  // pass/fail outcome computed by the Senate Hall; `flags` are any outcome
  // flags. Mirrors swipe's death/objective/win checks but does not draw a card.
  resolveVote: ({ meterDeltas = {}, flags = [] } = {}) => {
    const state = get();
    if (!state.pendingVote) return;

    const newMeters = { ...state.meters };
    Object.entries(meterDeltas).forEach(([faction, delta]) => {
      if (faction in newMeters) {
        newMeters[faction] = Math.max(0, Math.min(100, newMeters[faction] + delta));
      }
    });
    const newFlags = [...state.flags, ...flags];

    const deadFaction = Object.entries(newMeters).find(([, v]) => v <= 0 || v >= 100);
    if (deadFaction) {
      const [factionId, value] = deadFaction;
      const faction = FACTIONS[factionId];
      const isTooHigh = value >= 100;
      const deathCause = {
        faction: factionId,
        factionName: faction.name,
        value,
        label: isTooHigh ? faction.tooHighLabel : faction.tooLowLabel,
        description: isTooHigh ? faction.tooHighDesc : faction.tooLowDesc,
      };
      const tempState = { meters: newMeters, flags: newFlags, turn: state.turn };
      const newlyCompleted = state.objectives
        .filter((o) => !state.completedObjectives.includes(o.id) && o.check(tempState))
        .map((o) => o.id);
      const finalCompleted = [...state.completedObjectives, ...newlyCompleted];
      const entry = {
        name: state.senatorName,
        turns: state.turn,
        deathCause,
        date: new Date().toISOString(),
        completedObjectives: finalCompleted,
      };
      const newLog = [entry, ...state.senatorLog].slice(0, 50);
      saveLS('gs_senatorLog', newLog);
      const namedLegacyFlags = [];
      if (factionId === 'military' && isTooHigh) namedLegacyFlags.push('kra_van_war_started');
      if (factionId === 'senate') namedLegacyFlags.push('senate_dissolved');
      const newLegacyFlags = Array.from(
        new Set([...state.legacyFlags, ...finalCompleted, ...namedLegacyFlags])
      );
      saveLS('gs_legacyFlags', newLegacyFlags);
      set({
        meters: newMeters,
        flags: newFlags,
        deathCause,
        completedObjectives: finalCompleted,
        phase: 'dead',
        pendingVote: null,
        activeRoom: 'office',
        senatorLog: newLog,
        legacyFlags: newLegacyFlags,
      });
      return;
    }

    const tempState = { meters: newMeters, flags: newFlags, turn: state.turn };
    const newlyCompleted = state.objectives
      .filter((o) => !state.completedObjectives.includes(o.id) && o.check(tempState))
      .map((o) => o.id);
    const finalCompleted = [...state.completedObjectives, ...newlyCompleted];

    if (
      state.objectives.length > 0 &&
      state.objectives.every((o) => finalCompleted.includes(o.id))
    ) {
      const entry = {
        name: state.senatorName,
        turns: state.turn,
        deathCause: null,
        outcome: 'retired',
        date: new Date().toISOString(),
        completedObjectives: finalCompleted,
      };
      const newLog = [entry, ...state.senatorLog].slice(0, 50);
      saveLS('gs_senatorLog', newLog);
      const newLegacyFlags = Array.from(new Set([...state.legacyFlags, ...finalCompleted]));
      saveLS('gs_legacyFlags', newLegacyFlags);
      set({
        meters: newMeters,
        flags: newFlags,
        completedObjectives: finalCompleted,
        phase: 'won',
        pendingVote: null,
        activeRoom: 'office',
        winData: {
          senatorName: state.senatorName,
          turn: state.turn,
          completedObjectives: finalCompleted,
          date: new Date().toISOString(),
        },
        senatorLog: newLog,
        legacyFlags: newLegacyFlags,
      });
      return;
    }

    set({
      meters: newMeters,
      flags: newFlags,
      completedObjectives: finalCompleted,
      pendingVote: null,
      turnsSinceVote: 0,
      activeRoom: 'office',
    });
  },

  dismissDead: () => {
    set({ phase: 'title' });
  },

  dismissWon: () => {
    set({ phase: 'title' });
  },

  showLog: () => {
    set({ phase: 'log' });
  },

  hideLog: () => {
    set({ phase: 'title' });
  },
}));
