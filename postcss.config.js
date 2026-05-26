import { create } from 'zustand';
import { CARDS } from '../data/cards.js';
import { FACTIONS } from '../data/factions.js';
import { assignObjectives, OBJECTIVES } from '../data/objectives.js';

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
    deathCause: null,
    senatorName: '',
    senatorLog: loadLS('gs_senatorLog', []),
    legacyFlags: loadLS('gs_legacyFlags', []),
  };
}

// ── Card draw logic ───────────────────────────────────────────────────────────

function drawNextCard(deck, flags) {
  // Filter cards that require specific flags
  const available = deck.filter(
    (c) => !c.requiredFlags || c.requiredFlags.every((f) => flags.includes(f))
  );
  if (available.length === 0) return { card: deck[0] || null, remaining: deck.slice(1) };
  const card = available[0];
  const remaining = deck.filter((c) => c.id !== card.id);
  return { card, remaining };
}

// ── Store ─────────────────────────────────────────────────────────────────────

export const useGameStore = create((set, get) => ({
  ...makeInitialState(),

  startGame: () => {
    const objectives = assignObjectives();
    const shuffled = shuffle(CARDS);
    const flags = [];
    const { card, remaining } = drawNextCard(shuffled, flags);

    // If the first card is pale_emissary, add pale_met
    const newFlags = card && card.id === 'pale_emissary' ? ['pale_met'] : [];

    set({
      phase: 'game',
      meters: { senate: 50, military: 50, trade: 50, coalition: 50 },
      flags: newFlags,
      turn: 0,
      objectives,
      completedObjectives: [],
      currentCard: card,
      deck: remaining,
      deathCause: null,
      senatorName: randomName(),
    });
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

      // Update legacy flags from completed objectives
      const objectiveIds = finalCompleted;
      const newLegacyFlags = Array.from(new Set([...state.legacyFlags, ...objectiveIds]));
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
    const { card: nextCard, remaining } = drawNextCard(state.deck, newFlags);

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

    // If deck is exhausted, reshuffle
    let newDeck = remaining;
    let finalCard = nextCard;
    if (!finalCard) {
      const reshuffled = shuffle(CARDS);
      const drawn = drawNextCard(reshuffled, updatedFlags);
      finalCard = drawn.card;
      newDeck = drawn.remaining;
    }

    set({
      meters: newMeters,
      flags: updatedFlags,
      turn: newTurn,
      completedObjectives: finalCompleted,
      currentCard: finalCard,
      deck: newDeck,
    });
  },

  dismissDead: () => {
    set({ phase: 'title' });
  },

  showLog: () => {
    set({ phase: 'log' });
  },

  hideLog: () => {
    set({ phase: 'title' });
  },
}));
