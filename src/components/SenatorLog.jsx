import { useShallow } from 'zustand/shallow';
import { useGameStore } from '../store/gameStore.js';
import { FACTIONS } from '../data/factions.js';

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return '—';
  }
}

export default function SenatorLog() {
  const { senatorLog, hideLog } = useGameStore(useShallow((s) => ({
    senatorLog: s.senatorLog,
    hideLog: s.hideLog,
  })));

  return (
    <div className="flex flex-col h-full w-full max-w-lg mx-auto px-4 py-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <h1 className="font-display font-black text-xl tracking-widest uppercase text-gold">
            Senator Log
          </h1>
          <p className="text-soft/40 text-[10px] uppercase tracking-widest font-display">
            Galactic Assembly Records Office
          </p>
        </div>
        <button
          onClick={hideLog}
          className="text-soft/40 hover:text-soft transition-colors text-sm font-display uppercase tracking-widest border border-border/40 hover:border-border px-3 py-1.5 rounded-lg"
        >
          ← Back
        </button>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-3" />

      {/* Log entries */}
      {senatorLog.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-soft/30 text-sm">No senators on record.</p>
          <p className="text-soft/20 text-xs mt-1">Begin a term to write history.</p>
        </div>
      ) : (
        <div
          className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2"
          style={{ overflowY: 'auto' }}
        >
          {senatorLog.map((entry, i) => {
            const faction = FACTIONS[entry.deathCause?.faction];
            const isRetired = entry.outcome === 'retired';
            const factionColor = isRetired ? '#d4af37' : (faction?.color || '#4a5568');
            const isLatest = i === 0;

            return (
              <div
                key={i}
                className="rounded-xl border p-3 transition-colors"
                style={{
                  borderColor: isLatest ? `${factionColor}50` : '#1e3a5f40',
                  backgroundColor: isLatest ? `${factionColor}08` : 'transparent',
                }}
              >
                {/* Name row */}
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-white/80">
                    {entry.name}
                  </span>
                  <span className="text-[10px] text-soft/40 font-mono">
                    {formatDate(entry.date)}
                  </span>
                </div>

                {/* Turns + outcome */}
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-soft/50">
                    <span className="text-soft/80 font-bold">{entry.turns}</span> turns
                  </span>
                  {entry.outcome === 'retired' ? (
                    <span className="text-amber-400/80 font-display tracking-widest">
                      ◆ Mandate Fulfilled
                    </span>
                  ) : faction ? (
                    <div className="flex items-center gap-1">
                      <span>{faction.icon}</span>
                      <span style={{ color: factionColor }}>
                        {entry.deathCause?.label}
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Completed objectives */}
                {entry.completedObjectives?.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {entry.completedObjectives.map((id) => (
                      <span
                        key={id}
                        className="text-[9px] px-1.5 py-0.5 rounded border text-emerald-400/80 border-emerald-500/30 bg-emerald-500/5 font-display uppercase tracking-widest"
                      >
                        ✓ {id.replace(/_/g, ' ')}
                      </span>
                    ))}
                  </div>
                )}

                {isLatest && (
                  <p className="text-[9px] text-soft/20 mt-1.5 uppercase tracking-widest font-display">
                    Most recent term
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-3" />
      <p className="text-center text-[9px] text-soft/20 mt-2 font-display uppercase tracking-widest">
        Records sealed under Senate Directive 7 — Galactic Intelligence Division
      </p>
    </div>
  );
}
