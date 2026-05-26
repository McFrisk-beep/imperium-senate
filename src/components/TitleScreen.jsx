import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';
import { useGameStore } from '../store/gameStore.js';

// Tiny inline star field using SVG
function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        cx: Math.floor(Math.random() * 400),
        cy: Math.floor(Math.random() * 700),
        r: Math.random() < 0.2 ? 1.5 : Math.random() < 0.5 ? 1 : 0.5,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 400 700"
    >
      {stars.map((s) => (
        <circle
          key={s.id}
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          fill="white"
          opacity={s.opacity}
        />
      ))}
    </svg>
  );
}

export default function TitleScreen() {
  const { startGame, showLog, senatorLog } = useGameStore(useShallow((s) => ({
    startGame: s.startGame,
    showLog: s.showLog,
    senatorLog: s.senatorLog,
  })));

  const hasLog = senatorLog && senatorLog.length > 0;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-full w-full px-6 overflow-hidden animate-fade-in">
      {/* Stars */}
      <Stars />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Emblem */}
        <div className="mb-6">
          <div
            className="w-20 h-20 mx-auto rounded-full border-2 border-gold/40 flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
              boxShadow: '0 0 40px rgba(201,168,76,0.2)',
            }}
          >
            <span className="text-4xl">🏛️</span>
          </div>
        </div>

        {/* Title */}
        <h1
          className="font-display font-black uppercase tracking-[0.15em] leading-none mb-2"
          style={{
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            color: '#c9a84c',
            textShadow: '0 0 60px rgba(201,168,76,0.4), 0 0 20px rgba(201,168,76,0.2)',
          }}
        >
          Galactic
          <br />
          Senate
        </h1>

        {/* Subtitle */}
        <p className="text-soft/50 text-xs font-display uppercase tracking-[0.2em] mt-3 mb-1">
          A Political Drama
        </p>
        <p className="text-soft/30 text-[10px] font-display uppercase tracking-widest mb-8">
          Galactic Standard Calendar 2847.4
        </p>

        {/* Divider */}
        <div className="w-40 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Quote */}
        <p className="text-soft/40 text-sm italic max-w-[280px] leading-relaxed mb-10">
          "Power is not taken. It is negotiated."
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-[280px]">
          <button
            onClick={startGame}
            className="w-full py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-[0.15em] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              backgroundColor: '#c9a84c',
              color: '#070b14',
              boxShadow: '0 0 30px rgba(201,168,76,0.3)',
            }}
          >
            Begin Term
          </button>

          {hasLog && (
            <button
              onClick={showLog}
              className="w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-[0.15em] border border-border/60 text-soft/50 hover:text-soft hover:border-border transition-all"
            >
              Senator Log ({senatorLog.length})
            </button>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-10 text-center">
          <p className="text-soft/20 text-[9px] uppercase tracking-widest font-display">
            Swipe or use ← → arrow keys
          </p>
          <p className="text-soft/15 text-[9px] mt-0.5 uppercase tracking-widest font-display">
            Keep all 4 factions in balance
          </p>
        </div>
      </div>
    </div>
  );
}
