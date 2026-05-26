import { useShallow } from 'zustand/shallow';
import { useGameStore } from '../store/gameStore.js';
import { FACTIONS } from '../data/factions.js';
import { OBJECTIVES } from '../data/objectives.js';

export default function GameOver() {
  const { deathCause, turn, senatorName, completedObjectives, dismissDead, showLog } =
    useGameStore(useShallow((s) => ({
      deathCause: s.deathCause,
      turn: s.turn,
      senatorName: s.senatorName,
      completedObjectives: s.completedObjectives,
      dismissDead: s.dismissDead,
      showLog: s.showLog,
    })));

  if (!deathCause) return null;

  const faction = FACTIONS[deathCause.faction];
  const factionColor = faction?.color || '#6366f1';

  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full px-4 py-8 animate-fade-in">
      {/* Decorative top line */}
      <div
        className="w-32 h-px mb-6"
        style={{ background: `linear-gradient(90deg, transparent, ${factionColor}, transparent)` }}
      />

      {/* Main title */}
      <h1
        className="font-display font-black text-3xl sm:text-4xl tracking-widest uppercase mb-1"
        style={{ color: factionColor }}
      >
        Term Ended
      </h1>
      <p className="text-soft/40 text-xs font-display tracking-widest uppercase mb-6">
        Galactic Standard Calendar 2847.4
      </p>

      {/* Senator name + turns */}
      <div className="text-center mb-6">
        <p className="text-gold font-semibold text-lg">{senatorName}</p>
        <p className="text-soft/60 text-sm mt-1">
          Served{' '}
          <span className="text-white font-bold">{turn}</span>{' '}
          {turn === 1 ? 'turn' : 'turns'} before removal
        </p>
      </div>

      {/* Death cause card */}
      <div
        className="w-full max-w-sm rounded-2xl p-5 mb-6 border"
        style={{
          backgroundColor: `${factionColor}10`,
          borderColor: `${factionColor}40`,
          boxShadow: `0 0 40px ${factionColor}20`,
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{faction?.icon}</span>
          <span
            className="font-display text-xs font-bold uppercase tracking-widest"
            style={{ color: factionColor }}
          >
            {faction?.name}
          </span>
        </div>
        <h2
          className="font-display font-bold text-xl mb-2"
          style={{ color: factionColor }}
        >
          {deathCause.label}
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          {deathCause.description}
        </p>
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-soft/40 text-[10px] uppercase tracking-widest font-display">
            Final {faction?.name} standing:{' '}
            <span style={{ color: factionColor }}>{deathCause.value}</span>
          </p>
        </div>
      </div>

      {/* Completed objectives */}
      {completedObjectives.length > 0 && (
        <div className="w-full max-w-sm rounded-xl p-4 mb-6 border border-emerald-500/30 bg-emerald-500/5">
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
            ✓ Directives Completed
          </h3>
          <div className="flex flex-col gap-4">
            {completedObjectives.map((id) => {
              const obj = OBJECTIVES.find((o) => o.id === id);
              if (!obj) return null;
              return (
                <div key={id} className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 text-sm">✓</span>
                    <div>
                      <p className="text-emerald-300/80 text-xs">{obj.hint}</p>
                      <p className="text-emerald-400/50 text-[10px] mt-0.5">{obj.reward}</p>
                    </div>
                  </div>
                  {obj.loreFragment && (
                    <p className="text-slate-400/70 text-[11px] leading-relaxed pl-4 border-l border-emerald-500/20 italic">
                      {obj.loreFragment}
                    </p>
                  )}
                  {obj.runBonusLabel && (
                    <p className="text-amber-400/70 text-[10px] pl-4 font-display tracking-wide">
                      ▸ {obj.runBonusLabel}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* No objectives */}
      {completedObjectives.length === 0 && (
        <p className="text-soft/30 text-xs mb-6 text-center italic">
          No directives fulfilled this term.
        </p>
      )}

      {/* Action buttons */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <button
          onClick={dismissDead}
          className="w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: factionColor,
            color: '#070b14',
            boxShadow: `0 0 20px ${factionColor}40`,
          }}
        >
          The Next Senator Takes Office
        </button>
        <button
          onClick={showLog}
          className="w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-widest border border-border/60 text-soft/60 hover:text-soft hover:border-border transition-all"
        >
          View Senator Log
        </button>
      </div>

      {/* Bottom decoration */}
      <div
        className="w-32 h-px mt-6"
        style={{ background: `linear-gradient(90deg, transparent, ${factionColor}, transparent)` }}
      />
    </div>
  );
}
