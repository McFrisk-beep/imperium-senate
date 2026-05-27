import { useShallow } from 'zustand/shallow';
import { useGameStore } from '../store/gameStore.js';
import { FACTIONS } from '../data/factions.js';

const GOLD = '#d4af37';

export default function LegacyBrief() {
  const { activeBonuses, meters, senatorName, beginRun } = useGameStore(
    useShallow((s) => ({
      activeBonuses: s.activeBonuses,
      meters: s.meters,
      senatorName: s.senatorName,
      beginRun: s.beginRun,
    }))
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full px-4 py-8 animate-fade-in">
      {/* Top rule */}
      <div
        className="w-32 h-px mb-6"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}80, transparent)` }}
      />

      {/* Header */}
      <p className="text-soft/40 text-[10px] font-display tracking-widest uppercase mb-1">
        Legacy Effects Active
      </p>
      <h1
        className="font-display font-black text-2xl tracking-widest uppercase mb-1 text-center"
        style={{ color: GOLD }}
      >
        The Senate Remembers
      </h1>
      <p className="text-soft/50 text-xs text-center mb-6 max-w-xs leading-relaxed">
        Past senators have shaped the galaxy.{' '}
        <span className="text-white/70">{senatorName}</span> begins with their
        inheritance.
      </p>

      {/* Active bonuses */}
      <div className="w-full max-w-sm flex flex-col gap-3 mb-6">
        {activeBonuses.map((obj) => (
          <div
            key={obj.id}
            className="rounded-xl border p-3"
            style={{ borderColor: `${GOLD}30`, backgroundColor: `${GOLD}08` }}
          >
            <p className="text-amber-200/80 text-xs italic mb-1">"{obj.hint}"</p>
            <p className="text-amber-400/70 text-[10px] font-display tracking-wide">
              ▸ {obj.runBonusLabel}
            </p>
          </div>
        ))}
      </div>

      {/* Starting meter preview */}
      <div className="w-full max-w-sm rounded-xl border border-border/40 p-3 mb-6">
        <p className="text-soft/40 text-[10px] font-display uppercase tracking-widest mb-2">
          Starting Faction Standing
        </p>
        <div className="flex flex-col gap-1.5">
          {Object.entries(meters).map(([id, value]) => {
            const faction = FACTIONS[id];
            const delta = value - 50;
            return (
              <div key={id} className="flex items-center gap-2">
                <span className="text-sm w-5">{faction.icon}</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${value}%`,
                      backgroundColor: faction.color,
                      opacity: 0.8,
                    }}
                  />
                </div>
                <span
                  className="text-[10px] font-display font-bold w-8 text-right"
                  style={{ color: faction.color }}
                >
                  {value}
                </span>
                {delta !== 0 && (
                  <span
                    className="text-[9px] font-bold w-6"
                    style={{ color: delta > 0 ? '#4ade80' : '#f87171' }}
                  >
                    {delta > 0 ? `+${delta}` : delta}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Begin button */}
      <button
        onClick={beginRun}
        className="w-full max-w-sm py-3 rounded-xl font-display font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        style={{
          backgroundColor: GOLD,
          color: '#070b14',
          boxShadow: `0 0 20px ${GOLD}40`,
        }}
      >
        Begin Term
      </button>

      {/* Bottom rule */}
      <div
        className="w-32 h-px mt-6"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}80, transparent)` }}
      />
    </div>
  );
}
