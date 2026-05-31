import { useShallow } from 'zustand/shallow';
import { useGameStore, VOTE_INTERVAL } from '../store/gameStore.js';

// A single selectable room in the Senator's Office hub.
function RoomTile({ icon, name, desc, accent, status, disabled, locked, onClick }) {
  return (
    <button
      onClick={disabled || locked ? undefined : onClick}
      disabled={disabled || locked}
      className={`
        relative w-full text-left rounded-2xl border p-4 transition-all duration-200
        ${disabled || locked
          ? 'border-border/30 bg-ink/40 cursor-not-allowed opacity-60'
          : 'border-border/60 bg-ink hover:border-gold/50 hover:scale-[1.02] active:scale-[0.99] card-shadow'}
      `}
      style={!disabled && !locked ? { boxShadow: `inset 0 0 0 1px ${accent}10` } : undefined}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl leading-none flex-shrink-0" style={{ filter: disabled ? 'grayscale(1)' : 'none' }}>
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3
              className="font-display font-bold uppercase tracking-widest text-sm truncate"
              style={{ color: disabled || locked ? '#4a5568' : accent }}
            >
              {name}
            </h3>
            {locked && <span className="text-[9px]">🔒</span>}
          </div>
          <p className="text-[11px] text-soft/50 leading-tight mt-0.5">{desc}</p>
        </div>
        {status && (
          <span
            className="flex-shrink-0 text-[9px] font-display font-bold uppercase tracking-widest px-2 py-1 rounded-full border"
            style={{
              color: accent,
              borderColor: `${accent}50`,
              backgroundColor: `${accent}12`,
            }}
          >
            {status}
          </span>
        )}
      </div>
    </button>
  );
}

export default function Office() {
  const { turn, turnsSinceVote, pendingVote, enterRoom } = useGameStore(
    useShallow((s) => ({
      turn: s.turn,
      turnsSinceVote: s.turnsSinceVote,
      pendingVote: s.pendingVote,
      enterRoom: s.enterRoom,
    }))
  );

  const turnsToVote = Math.max(0, VOTE_INTERVAL - turnsSinceVote);

  return (
    <div className="flex-1 overflow-y-auto px-5 py-6 animate-fade-in">
      <div className="max-w-[460px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[10px] font-display uppercase tracking-[0.25em] text-soft/40">
            Galactic Standard Calendar 2847.4
          </p>
          <h1 className="font-display font-black uppercase tracking-[0.15em] text-2xl text-gold mt-1">
            The Senator's Office
          </h1>
          <p className="text-[11px] text-soft/50 mt-1">Turn {turn} — choose your business.</p>
        </div>

        {/* Vote-in-session banner */}
        {pendingVote && (
          <div className="mb-5 rounded-2xl border border-gold/50 bg-gold/10 p-4 animate-slide-up">
            <p className="text-[10px] font-display uppercase tracking-widest text-gold">
              ⚖ The Senate is in session
            </p>
            <p className="text-sm text-gold-light font-semibold mt-1">{pendingVote.title}</p>
            <p className="text-[11px] text-soft/60 mt-1 leading-snug">
              Chamber business is suspended until the bill on the floor is settled.
            </p>
          </div>
        )}

        {/* Rooms */}
        <div className="flex flex-col gap-3">
          <RoomTile
            icon="🗣️"
            name="Audience Chamber"
            desc="Hear petitioners and rule on their requests."
            accent="#c9a84c"
            locked={!!pendingVote}
            status={pendingVote ? 'Locked' : 'Open'}
            onClick={() => enterRoom('audience')}
          />
          <RoomTile
            icon="🏛️"
            name="Senate Hall"
            desc={
              pendingVote
                ? 'A bill awaits your vote on the floor.'
                : turnsToVote <= 1
                ? 'The next session is about to convene.'
                : `The floor is quiet. Next session in ${turnsToVote} turns.`
            }
            accent="#6366f1"
            disabled={!pendingVote}
            status={pendingVote ? 'In session' : 'Recess'}
            onClick={() => enterRoom('vote')}
          />
          <RoomTile
            icon="🗺️"
            name="Star Chart"
            desc="Survey and stabilize the sectors of the galaxy."
            accent="#10b981"
            disabled
            status="Planned"
          />
          <RoomTile
            icon="📦"
            name="The Vault"
            desc="Equip artifacts — passive boons and active powers."
            accent="#f59e0b"
            disabled
            status="Planned"
          />
        </div>

        <p className="text-center text-[10px] text-soft/30 mt-6 font-display uppercase tracking-widest">
          A bill reaches the floor every {VOTE_INTERVAL} turns
        </p>
      </div>
    </div>
  );
}
