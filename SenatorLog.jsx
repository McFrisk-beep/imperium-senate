import { useState } from 'react';

export default function ObjectiveHints({ objectives, completedObjectives }) {
  const [open, setOpen] = useState(false);

  if (!objectives || objectives.length === 0) return null;

  return (
    <div className="w-full px-3 pb-2">
      {/* Collapsed toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-border/40 bg-ink/60 backdrop-blur-sm hover:bg-muted/50 transition-colors"
      >
        <span className="text-[10px] font-display font-bold tracking-widest text-gold/70 uppercase">
          Active Directives [{objectives.length}]
        </span>
        <div className="flex items-center gap-2">
          {completedObjectives.length > 0 && (
            <span className="text-[10px] text-emerald-400 font-bold">
              ✓ {completedObjectives.length}
            </span>
          )}
          <span className="text-soft/40 text-xs leading-none">
            {open ? '▲' : '▼'}
          </span>
        </div>
      </button>

      {/* Expanded panel */}
      {open && (
        <div className="mt-1 px-3 py-2 rounded-xl border border-border/30 bg-ink/80 backdrop-blur-sm animate-fade-in">
          <div className="flex flex-col gap-2">
            {objectives.map((obj) => {
              const done = completedObjectives.includes(obj.id);
              return (
                <div
                  key={obj.id}
                  className="flex items-start gap-2"
                >
                  <span
                    className="text-sm leading-none flex-shrink-0 mt-0.5"
                    style={{ color: done ? '#10b981' : '#4a5568' }}
                  >
                    {done ? '✓' : '◦'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[11px] leading-snug"
                      style={{ color: done ? '#a7f3d0' : '#64748b' }}
                    >
                      {obj.hint}
                    </p>
                    {done && (
                      <p className="text-[10px] text-emerald-400/60 mt-0.5">
                        {obj.reward}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[9px] text-soft/20 mt-2 text-center uppercase tracking-widest font-display">
            Classified — Galactic Intelligence Division
          </p>
        </div>
      )}
    </div>
  );
}
