import { useShallow } from 'zustand/shallow';
import { useGameStore } from '../store/gameStore.js';
import { OBJECTIVES } from '../data/objectives.js';

const GOLD = '#d4af37';

export default function TrueEnding() {
  const { winData, dismissWon, showLog } = useGameStore(
    useShallow((s) => ({
      winData: s.winData,
      dismissWon: s.dismissWon,
      showLog: s.showLog,
    }))
  );

  if (!winData) return null;

  const completedObjs = winData.completedObjectives
    .map((id) => OBJECTIVES.find((o) => o.id === id))
    .filter(Boolean);

  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full px-4 py-8 animate-fade-in">
      {/* Top rule */}
      <div
        className="w-48 h-px mb-6"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
      />

      {/* Glyph */}
      <div className="mb-3">
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
          <polygon
            points="20,2 38,11 38,29 20,38 2,29 2,11"
            fill="none"
            stroke={GOLD}
            strokeWidth="1.5"
            opacity="0.8"
          />
          <polygon
            points="20,8 32,14 32,26 20,32 8,26 8,14"
            fill="none"
            stroke={GOLD}
            strokeWidth="1"
            opacity="0.4"
          />
          <circle cx="20" cy="20" r="3" fill={GOLD} opacity="0.9" />
        </svg>
      </div>

      {/* Title */}
      <h1
        className="font-display font-black text-3xl sm:text-4xl tracking-widest uppercase mb-1 text-center"
        style={{ color: GOLD }}
      >
        Mandate Fulfilled
      </h1>
      <p className="text-soft/40 text-xs font-display tracking-widest uppercase mb-6">
        Galactic Assembly — Permanent Record
      </p>

      {/* Senator name + turns */}
      <div className="text-center mb-6">
        <p className="font-semibold text-lg" style={{ color: GOLD }}>
          {winData.senatorName}
        </p>
        <p className="text-soft/60 text-sm mt-1">
          Served{' '}
          <span className="text-white font-bold">{winData.turn}</span>{' '}
          {winData.turn === 1 ? 'turn' : 'turns'} — retired with honour
        </p>
      </div>

      {/* Narrative */}
      <div
        className="w-full max-w-sm rounded-2xl p-4 mb-6 border text-center"
        style={{
          borderColor: `${GOLD}30`,
          backgroundColor: `${GOLD}08`,
          boxShadow: `0 0 40px ${GOLD}10`,
        }}
      >
        <p className="text-slate-300 text-sm leading-relaxed italic">
          "History does not remember those who merely survived. It remembers those
          who fulfilled what they were sent to do. Your name is now written in the
          Galactic Assembly's permanent record — not as a casualty, but as a
          senator who completed their mandate."
        </p>
      </div>

      {/* Completed directives with lore */}
      <div className="w-full max-w-sm rounded-xl p-4 mb-6 border border-amber-500/30 bg-amber-500/5">
        <h3
          className="font-display text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: GOLD }}
        >
          ◈ Directives Sealed
        </h3>
        <div className="flex flex-col gap-5">
          {completedObjs.map((obj) => (
            <div key={obj.id} className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2">
                <span style={{ color: GOLD }} className="text-sm">◆</span>
                <div>
                  <p className="text-amber-200/90 text-xs font-medium">{obj.hint}</p>
                  <p className="text-amber-400/50 text-[10px] mt-0.5 font-display tracking-wide">
                    {obj.reward}
                  </p>
                </div>
              </div>
              {obj.loreFragment && (
                <p className="text-slate-400/70 text-[11px] leading-relaxed pl-4 border-l border-amber-500/20 italic">
                  {obj.loreFragment}
                </p>
              )}
              {obj.runBonusLabel && (
                <p className="text-amber-400/70 text-[10px] pl-4 font-display tracking-wide">
                  ▸ {obj.runBonusLabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <button
          onClick={dismissWon}
          className="w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: GOLD,
            color: '#070b14',
            boxShadow: `0 0 24px ${GOLD}40`,
          }}
        >
          Seal the Record
        </button>
        <button
          onClick={showLog}
          className="w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-widest border border-border/60 text-soft/60 hover:text-soft hover:border-border transition-all"
        >
          View Senator Log
        </button>
      </div>

      {/* Bottom rule */}
      <div
        className="w-48 h-px mt-6"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
      />
    </div>
  );
}
