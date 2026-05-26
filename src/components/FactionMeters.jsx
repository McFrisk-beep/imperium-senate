import { FACTIONS } from '../data/factions.js';

const FACTION_ORDER = ['senate', 'military', 'trade', 'coalition'];

const COLORS = {
  senate: { bar: '#6366f1', bg: 'rgba(99,102,241,0.15)', glow: 'rgba(99,102,241,0.6)' },
  military: { bar: '#ef4444', bg: 'rgba(239,68,68,0.15)', glow: 'rgba(239,68,68,0.6)' },
  trade: { bar: '#f59e0b', bg: 'rgba(245,158,11,0.15)', glow: 'rgba(245,158,11,0.6)' },
  coalition: { bar: '#10b981', bg: 'rgba(16,185,129,0.15)', glow: 'rgba(16,185,129,0.6)' },
};

function isDanger(value) {
  return value <= 20 || value >= 80;
}

export default function FactionMeters({ meters }) {
  return (
    <div className="w-full px-2 py-2 flex gap-1.5 sm:gap-3">
      {FACTION_ORDER.map((id) => {
        const faction = FACTIONS[id];
        const value = meters[id];
        const danger = isDanger(value);
        const colors = COLORS[id];

        return (
          <div
            key={id}
            className="flex-1 flex flex-col gap-1 min-w-0"
          >
            {/* Icon + label row */}
            <div className="flex items-center gap-1">
              <span
                className="text-xs sm:text-sm leading-none flex-shrink-0"
                title={faction.name}
              >
                {faction.icon}
              </span>
              <span
                className="hidden sm:block text-[10px] font-medium truncate leading-none"
                style={{ color: danger ? colors.bar : '#64748b' }}
              >
                {faction.name}
              </span>
              <span
                className="ml-auto text-[9px] sm:text-[10px] font-display font-bold leading-none tabular-nums flex-shrink-0"
                style={{ color: danger ? colors.bar : '#475569' }}
              >
                {value}
              </span>
            </div>

            {/* Bar track */}
            <div
              className="relative h-1.5 sm:h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: colors.bg }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                style={{
                  width: `${value}%`,
                  backgroundColor: colors.bar,
                  boxShadow: danger ? `0 0 8px ${colors.glow}` : 'none',
                  animation: danger ? 'meterFlash 0.6s ease-in-out infinite' : 'none',
                }}
              />
              {/* Danger zone markers */}
              <div
                className="absolute inset-y-0 w-px opacity-30"
                style={{ left: '20%', backgroundColor: colors.bar }}
              />
              <div
                className="absolute inset-y-0 w-px opacity-30"
                style={{ left: '80%', backgroundColor: colors.bar }}
              />
            </div>

            {/* Danger warning text — compact */}
            {danger && (
              <p
                className="text-[8px] sm:text-[9px] leading-none font-medium truncate"
                style={{ color: colors.bar }}
              >
                {value <= 20
                  ? faction.tooLowLabel
                  : faction.tooHighLabel}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
