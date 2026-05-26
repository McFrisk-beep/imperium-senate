import { useState, useRef, useEffect, useCallback } from 'react';
import Portrait from './Portrait.jsx';
import { RACES } from '../data/races.js';
import { FACTIONS } from '../data/factions.js';

const SWIPE_THRESHOLD = 80;
const MAX_TILT = 15;

function EffectChips({ effects }) {
  const entries = Object.entries(effects || {}).filter(([, v]) => v !== 0);
  if (entries.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1 justify-center mt-1">
      {entries.map(([factionId, delta]) => {
        const faction = FACTIONS[factionId];
        if (!faction) return null;
        return (
          <span
            key={factionId}
            className="text-[9px] font-display font-bold leading-none"
            style={{ color: delta > 0 ? faction.color : '#f87171', opacity: 0.75 }}
          >
            {faction.icon}{delta > 0 ? '+' : ''}{delta}
          </span>
        );
      })}
    </div>
  );
}

export default function SwipeCard({ card, onSwipe }) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false); // final animation
  const [swipeDir, setSwipeDir] = useState(null);
  const [isEntering, setIsEntering] = useState(true);

  const startXRef = useRef(null);
  const cardRef = useRef(null);

  // Card enter animation
  useEffect(() => {
    setIsEntering(true);
    setDragX(0);
    setIsDragging(false);
    setIsSwiping(false);
    setSwipeDir(null);
    const t = setTimeout(() => setIsEntering(false), 350);
    return () => clearTimeout(t);
  }, [card?.id]);

  // Keyboard handler
  useEffect(() => {
    function onKey(e) {
      if (isSwiping) return;
      if (e.key === 'ArrowLeft') triggerSwipe('left');
      if (e.key === 'ArrowRight') triggerSwipe('right');
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isSwiping, card]);

  const triggerSwipe = useCallback(
    (dir) => {
      if (isSwiping) return;
      setIsSwiping(true);
      setSwipeDir(dir);
      setDragX(dir === 'left' ? -500 : 500);
      setTimeout(() => {
        onSwipe(dir);
      }, 350);
    },
    [isSwiping, onSwipe]
  );

  // ── Touch handlers ────────────────────────────────────────────────────────
  function handleTouchStart(e) {
    if (isSwiping) return;
    startXRef.current = e.touches[0].clientX;
    setIsDragging(true);
  }

  function handleTouchMove(e) {
    if (!isDragging || startXRef.current === null) return;
    const dx = e.touches[0].clientX - startXRef.current;
    setDragX(dx);
  }

  function handleTouchEnd() {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragX) >= SWIPE_THRESHOLD) {
      triggerSwipe(dragX < 0 ? 'left' : 'right');
    } else {
      // Snap back
      setDragX(0);
    }
  }

  // ── Mouse handlers ────────────────────────────────────────────────────────
  function handleMouseDown(e) {
    if (isSwiping) return;
    e.preventDefault();
    startXRef.current = e.clientX;
    setIsDragging(true);
  }

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || startXRef.current === null) return;
      const dx = e.clientX - startXRef.current;
      setDragX(dx);
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragX) >= SWIPE_THRESHOLD) {
      triggerSwipe(dragX < 0 ? 'left' : 'right');
    } else {
      setDragX(0);
    }
  }, [isDragging, dragX, triggerSwipe]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  if (!card) return null;

  // ── Visual calculations ────────────────────────────────────────────────────
  const tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, (dragX / 200) * MAX_TILT));
  const hintOpacity = Math.min(1, Math.abs(dragX) / SWIPE_THRESHOLD);
  const showLeft = dragX < -10;
  const showRight = dragX > 10;

  const raceData = RACES[card.race] || RACES.human;
  const factionColor = raceData.primaryFaction
    ? FACTIONS[raceData.primaryFaction]?.color
    : '#4a5568';

  const cardTransform = isSwiping
    ? `translateX(${dragX}px) rotate(${tilt}deg)`
    : `translateX(${dragX}px) rotate(${tilt}deg)`;

  const cardTransition = isSwiping
    ? 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    : isDragging
    ? 'none'
    : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';

  return (
    <div className="relative flex items-center justify-center w-full flex-1 select-none">
      {/* Left swipe hint overlay */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        style={{ opacity: showLeft ? hintOpacity : 0, transition: 'opacity 0.1s' }}
      >
        <div className="bg-red-500/20 border border-red-500/60 rounded-xl px-3 py-2 backdrop-blur-sm">
          <p className="text-red-400 font-display text-xs font-bold uppercase tracking-widest">
            ← {card.left.label}
          </p>
          <p className="text-red-300/70 text-[10px] mt-0.5">{card.left.preview}</p>
          <EffectChips effects={card.left.effects} />
        </div>
      </div>

      {/* Right swipe hint overlay */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        style={{ opacity: showRight ? hintOpacity : 0, transition: 'opacity 0.1s' }}
      >
        <div className="bg-emerald-500/20 border border-emerald-500/60 rounded-xl px-3 py-2 backdrop-blur-sm">
          <p className="text-emerald-400 font-display text-xs font-bold uppercase tracking-widest">
            {card.right.label} →
          </p>
          <p className="text-emerald-300/70 text-[10px] mt-0.5">{card.right.preview}</p>
          <EffectChips effects={card.right.effects} />
        </div>
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        className={`
          relative cursor-grab active:cursor-grabbing
          w-[90vw] max-w-[420px]
          bg-ink rounded-2xl card-shadow
          flex flex-col overflow-hidden
          border border-border/60
          ${isEntering ? 'animate-card-enter' : ''}
        `}
        style={{
          transform: cardTransform,
          transition: cardTransition,
          touchAction: 'none',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {/* Objective glyph indicator */}
        {card.objectiveGlyph && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-xs font-display px-1.5 py-0.5 rounded border font-bold tracking-widest"
              style={{
                color: factionColor,
                borderColor: `${factionColor}60`,
                backgroundColor: `${factionColor}15`,
              }}
            >
              ◈ DIRECTIVE
            </span>
          </div>
        )}

        {/* Category badge */}
        {card.category === 'crisis' && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-display px-1.5 py-0.5 rounded border font-bold tracking-widest text-red-400 border-red-500/50 bg-red-500/10 animate-pulse">
              ⚠ CRISIS
            </span>
          </div>
        )}

        {/* Portrait section */}
        <div
          className="relative flex items-center justify-center pt-6 pb-3"
          style={{
            background: `linear-gradient(180deg, ${factionColor}18 0%, transparent 100%)`,
            borderBottom: `1px solid ${factionColor}30`,
          }}
        >
          <Portrait race={card.race} size={140} objectiveGlyph={card.objectiveGlyph} />
        </div>

        {/* Character info */}
        <div className="px-5 pt-3 pb-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-xs font-display font-bold uppercase tracking-widest"
              style={{ color: factionColor }}
            >
              {card.title}
            </span>
          </div>
          <h2 className="text-base font-semibold text-white/90 leading-tight">
            {card.character}
          </h2>
          {raceData && (
            <p className="text-[10px] text-soft/50 mt-0.5">{raceData.name}</p>
          )}
        </div>

        {/* Divider */}
        <div
          className="mx-5 my-2 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${factionColor}40, transparent)` }}
        />

        {/* Scenario */}
        <div className="px-5 pb-3">
          <p className="text-sm text-slate-300 leading-relaxed text-center italic">
            "{card.scenario}"
          </p>
        </div>

        {/* Options footer */}
        <div className="mt-auto border-t border-border/40 grid grid-cols-2">
          <button
            onClick={() => triggerSwipe('left')}
            className="flex flex-col items-center py-3 px-4 gap-0.5 hover:bg-red-500/10 transition-colors border-r border-border/40 group"
          >
            <span className="text-red-400/60 text-lg leading-none group-hover:text-red-400 transition-colors">←</span>
            <span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">
              {card.left.label}
            </span>
          </button>
          <button
            onClick={() => triggerSwipe('right')}
            className="flex flex-col items-center py-3 px-4 gap-0.5 hover:bg-emerald-500/10 transition-colors group"
          >
            <span className="text-emerald-400/60 text-lg leading-none group-hover:text-emerald-400 transition-colors">→</span>
            <span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">
              {card.right.label}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
