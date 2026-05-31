import { useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { useGameStore } from '../store/gameStore.js';
import { FACTIONS } from '../data/factions.js';

const FACTION_CYCLE = ['senate', 'military', 'trade', 'coalition', 'senate', 'military', 'trade', 'coalition'];
const INFLUENCE_POOL = 4;
const NEEDED_YEA = 5; // majority of 8 blocs

// Starting leanings are derived from the player's current meters — a content
// faction backs the establishment bill (yea); an unhappy one opposes it (nay).
function generateBlocs(meters) {
  return FACTION_CYCLE.map((faction, i) => {
    const m = meters[faction];
    const lean = m >= 62 ? 'yea' : m <= 38 ? 'nay' : 'undecided';
    return { id: i, faction, lean, bought: Math.random() < 0.25, revealed: false };
  });
}

const LEAN_STYLE = {
  yea: { label: 'YEA', color: '#10b981' },
  nay: { label: 'NAY', color: '#ef4444' },
  undecided: { label: '—', color: '#64748b' },
};

function EffectChips({ effects }) {
  const entries = Object.entries(effects || {}).filter(([, v]) => v !== 0);
  if (entries.length === 0) return <span className="text-[10px] text-soft/40">No change</span>;
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-0.5">
      {entries.map(([factionId, delta]) => {
        const faction = FACTIONS[factionId];
        if (!faction) return null;
        return (
          <span
            key={factionId}
            className="text-[11px] font-display font-bold leading-none"
            style={{ color: delta > 0 ? faction.color : '#f87171' }}
          >
            {faction.icon}{delta > 0 ? '+' : ''}{delta}
          </span>
        );
      })}
    </div>
  );
}

export default function SenateHall() {
  const { bill, resolveVote } = useGameStore(
    useShallow((s) => ({ bill: s.pendingVote, resolveVote: s.resolveVote }))
  );

  const [goal, setGoal] = useState(null); // 'support' | 'oppose'
  const [influence, setInfluence] = useState(INFLUENCE_POOL);
  const [costs, setCosts] = useState({}); // accumulated goodwill deltas (negative)
  const [blocs, setBlocs] = useState(() => generateBlocs(useGameStore.getState().meters));
  const [result, setResult] = useState(null);

  if (!bill) return null;

  const target = goal === 'support' ? 'yea' : 'nay';
  const yeaCount = blocs.filter((b) => b.lean === 'yea').length;
  const wouldPass = yeaCount >= NEEDED_YEA;

  function whip(blocId) {
    if (!goal || influence <= 0 || result) return;
    const b = blocs.find((x) => x.id === blocId);
    if (!b || b.lean === target) return;

    const isFlip = b.lean !== 'undecided';
    const goodwill = isFlip ? 4 : 2;
    const resisted = isFlip && b.bought; // bought bloc snaps back

    setBlocs((prev) =>
      prev.map((x) =>
        x.id === blocId
          ? { ...x, lean: resisted ? x.lean : target, revealed: x.bought ? true : x.revealed }
          : x
      )
    );
    setInfluence((i) => i - 1);
    setCosts((prev) => ({ ...prev, [b.faction]: (prev[b.faction] || 0) - goodwill }));
  }

  function callVote() {
    const passed = blocs.filter((b) => b.lean === 'yea').length >= NEEDED_YEA;
    const outcome = passed ? bill.pass : bill.fail;
    const deltas = { ...costs };
    Object.entries(outcome.effects).forEach(([f, d]) => {
      deltas[f] = (deltas[f] || 0) + d;
    });
    setResult({ passed, outcome, deltas, flags: outcome.flags || [], matched: passed === (goal === 'support') });
  }

  // ── Result overlay ──────────────────────────────────────────────────────
  if (result) {
    return (
      <div className="flex-1 overflow-y-auto px-5 py-6 animate-fade-in">
        <div className="max-w-[460px] mx-auto text-center">
          <p className="text-[10px] font-display uppercase tracking-[0.25em] text-soft/40">The gavel falls</p>
          <h2
            className="font-display font-black uppercase tracking-widest text-2xl mt-2"
            style={{ color: result.passed ? '#10b981' : '#ef4444' }}
          >
            {result.passed ? 'Bill Passed' : 'Bill Failed'}
          </h2>
          <p className="text-sm text-gold-light font-semibold mt-2">{result.outcome.label}</p>
          {goal && (
            <p className="text-[11px] text-soft/50 mt-1">
              {result.matched ? 'Your faction got what it wanted.' : 'The floor defied your whip.'}
            </p>
          )}

          <div className="mt-6 rounded-2xl border border-border/60 bg-ink p-4">
            <p className="text-[10px] font-display uppercase tracking-widest text-soft/50 mb-2">
              Net effect on the factions
            </p>
            <div className="flex justify-center">
              <EffectChips effects={result.deltas} />
            </div>
          </div>

          <button
            onClick={() => resolveVote({ meterDeltas: result.deltas, flags: result.flags })}
            className="mt-6 w-full py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-[0.15em] transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: '#c9a84c', color: '#070b14', boxShadow: '0 0 30px rgba(201,168,76,0.3)' }}
          >
            Return to Office
          </button>
        </div>
      </div>
    );
  }

  // ── Whip board ──────────────────────────────────────────────────────────
  return (
    <div className="flex-1 overflow-y-auto px-5 py-5 animate-fade-in">
      <div className="max-w-[460px] mx-auto">
        {/* Bill header */}
        <p className="text-[10px] font-display uppercase tracking-[0.25em] text-senate text-center">⚖ On the floor</p>
        <h2 className="font-display font-bold text-lg text-gold-light text-center leading-tight mt-1">{bill.title}</h2>
        <p className="text-[12px] text-slate-300 text-center italic mt-2 leading-snug">"{bill.summary}"</p>
        <p className="text-[11px] text-soft/45 text-center mt-1">{bill.floor}</p>

        {/* Outcome preview */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
            <p className="text-[10px] font-display uppercase tracking-widest text-emerald-400 mb-1.5">If it passes</p>
            <EffectChips effects={bill.pass.effects} />
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-3">
            <p className="text-[10px] font-display uppercase tracking-widest text-red-400 mb-1.5">If it fails</p>
            <EffectChips effects={bill.fail.effects} />
          </div>
        </div>

        {/* Goal selector */}
        <p className="text-[10px] font-display uppercase tracking-widest text-soft/50 mt-5 mb-2 text-center">
          Whom do you whip for?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { key: 'support', label: 'Support', sub: 'Whip for YEA', color: '#10b981' },
            { key: 'oppose', label: 'Oppose', sub: 'Whip for NAY', color: '#ef4444' },
          ].map((g) => (
            <button
              key={g.key}
              onClick={() => setGoal(g.key)}
              className="rounded-xl border p-2.5 transition-all"
              style={{
                borderColor: goal === g.key ? g.color : '#1e3a5f',
                backgroundColor: goal === g.key ? `${g.color}18` : 'transparent',
              }}
            >
              <p className="font-display font-bold text-sm uppercase tracking-widest" style={{ color: g.color }}>
                {g.label}
              </p>
              <p className="text-[10px] text-soft/50">{g.sub}</p>
            </button>
          ))}
        </div>

        {/* Influence + tally */}
        <div className="flex items-center justify-between mt-5 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-display uppercase tracking-widest text-soft/50">Influence</span>
            <div className="flex gap-1">
              {Array.from({ length: INFLUENCE_POOL }).map((_, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: i < influence ? '#c9a84c' : '#1e3a5f' }}
                />
              ))}
            </div>
          </div>
          <span
            className="text-[11px] font-display font-bold tabular-nums"
            style={{ color: wouldPass ? '#10b981' : '#94a3b8' }}
          >
            {yeaCount}/{NEEDED_YEA} YEA {wouldPass ? '✓ passes' : ''}
          </span>
        </div>

        {/* Bloc grid */}
        <div className="grid grid-cols-4 gap-2">
          {blocs.map((b) => {
            const faction = FACTIONS[b.faction];
            const lean = LEAN_STYLE[b.lean];
            const atTarget = goal && b.lean === target;
            const clickable = goal && influence > 0 && !atTarget;
            return (
              <button
                key={b.id}
                onClick={() => whip(b.id)}
                disabled={!clickable}
                className={`relative rounded-lg border p-2 flex flex-col items-center gap-1 transition-all ${
                  clickable ? 'hover:scale-[1.05] active:scale-[0.96] cursor-pointer' : 'cursor-default'
                }`}
                style={{
                  borderColor: atTarget ? lean.color : `${faction.color}40`,
                  backgroundColor: `${faction.color}10`,
                  opacity: clickable || atTarget ? 1 : 0.7,
                }}
                title={faction.name}
              >
                <span className="text-base leading-none">{faction.icon}</span>
                <span className="text-[11px] font-display font-bold leading-none" style={{ color: lean.color }}>
                  {lean.label}
                </span>
                {b.revealed && b.bought && (
                  <span className="absolute -top-1 -right-1 text-[9px]" title="Bought — resists your whip">💰</span>
                )}
              </button>
            );
          })}
        </div>

        <p className="text-[10px] text-soft/35 text-center mt-2 leading-snug">
          Whipping a bloc costs influence and that faction's goodwill. Some blocs are
          bought and resist a flip — you won't know until you try.
        </p>

        {/* Call the vote */}
        <button
          onClick={callVote}
          disabled={!goal}
          className="mt-4 w-full py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-[0.15em] transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:scale-[1.02] enabled:active:scale-[0.98]"
          style={{ backgroundColor: goal ? '#c9a84c' : '#1e3a5f', color: goal ? '#070b14' : '#4a5568' }}
        >
          Call the Vote
        </button>
      </div>
    </div>
  );
}
