import { RACES } from '../data/races.js';
import { FACTIONS } from '../data/factions.js';

// Hexagonal clip-path ID must be unique per instance
let _idCounter = 0;

function HexPortrait({ race, size = 200 }) {
  const raceData = RACES[race] || RACES.human;
  const { primary, secondary, accent } = raceData.palette;
  const factionColor = raceData.primaryFaction
    ? FACTIONS[raceData.primaryFaction]?.color
    : '#4a5568';

  const clipId = `hex-clip-${race}`;
  const filterId = `hex-filter-${race}`;

  // Hex points for a 200×250 viewBox
  const hexPoints = '100,4 196,52 196,148 100,196 4,148 4,52';

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <polygon points={hexPoints} />
        </clipPath>
        <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Hex border ring */}
      <polygon
        points={hexPoints}
        fill="none"
        stroke={factionColor}
        strokeWidth="3"
        opacity="0.85"
      />

      {/* Clipped portrait area */}
      <g clipPath={`url(#${clipId})`}>
        <RacePortrait race={race} primary={primary} secondary={secondary} accent={accent} />
      </g>
    </svg>
  );
}

function RacePortrait({ race, primary, secondary, accent }) {
  switch (race) {
    case 'human':
      return <HumanPortrait p={primary} s={secondary} a={accent} />;
    case 'veth':
      return <VethPortrait p={primary} s={secondary} a={accent} />;
    case 'kravan':
      return <KravanPortrait p={primary} s={secondary} a={accent} />;
    case 'serathi':
      return <SerathiPortrait p={primary} s={secondary} a={accent} />;
    case 'dulmak':
      return <DulmakPortrait p={primary} s={secondary} a={accent} />;
    case 'pale':
      return <PalePortrait p={primary} s={secondary} a={accent} />;
    default:
      return <HumanPortrait p={primary} s={secondary} a={accent} />;
  }
}

// ── Human ────────────────────────────────────────────────────────────────────
function HumanPortrait({ p, s, a }) {
  return (
    <g>
      {/* Background */}
      <rect x="0" y="0" width="200" height="200" fill={p} />
      <rect x="0" y="100" width="200" height="100" fill={s} opacity="0.6" />
      {/* Body / uniform silhouette */}
      <path d="M50,200 L50,140 Q50,120 65,115 L90,110 L100,125 L110,110 L135,115 Q150,120 150,140 L150,200 Z" fill={s} />
      {/* Collar / rank stripes */}
      <path d="M75,115 L100,125 L125,115" stroke={a} strokeWidth="2" fill="none" opacity="0.7" />
      <rect x="80" y="118" width="8" height="3" rx="1" fill={a} opacity="0.8" />
      <rect x="112" y="118" width="8" height="3" rx="1" fill={a} opacity="0.8" />
      {/* Neck */}
      <rect x="88" y="95" width="24" height="18" rx="4" fill="#c68642" />
      {/* Head */}
      <ellipse cx="100" cy="78" rx="34" ry="38" fill="#c68642" />
      {/* Hair */}
      <path d="M66,68 Q68,40 100,38 Q132,40 134,68 Q130,52 100,50 Q70,52 66,68 Z" fill={p} />
      {/* Eyes */}
      <ellipse cx="88" cy="74" rx="5" ry="4" fill="#1a1a2e" />
      <ellipse cx="112" cy="74" rx="5" ry="4" fill="#1a1a2e" />
      <circle cx="90" cy="73" r="1.5" fill="#fff" opacity="0.7" />
      <circle cx="114" cy="73" r="1.5" fill="#fff" opacity="0.7" />
      {/* Nose */}
      <path d="M98,78 Q100,84 102,78" stroke="#a0522d" strokeWidth="1.5" fill="none" />
      {/* Mouth */}
      <path d="M92,88 Q100,93 108,88" stroke="#8b4513" strokeWidth="1.5" fill="none" />
      {/* Battle scar */}
      <line x1="116" y1="68" x2="120" y2="80" stroke={a} strokeWidth="1.5" opacity="0.5" />
    </g>
  );
}

// ── Veth (insectoid) ─────────────────────────────────────────────────────────
function VethPortrait({ p, s, a }) {
  return (
    <g>
      <rect x="0" y="0" width="200" height="200" fill={p} />
      <rect x="0" y="110" width="200" height="90" fill={s} opacity="0.5" />
      {/* Robes */}
      <path d="M30,200 L40,130 Q55,115 80,112 L100,118 L120,112 Q145,115 160,130 L170,200 Z" fill={s} />
      {/* Ceremonial sash */}
      <path d="M70,125 L100,135 L130,125" stroke={a} strokeWidth="3" fill="none" opacity="0.9" />
      <rect x="96" y="130" width="8" height="25" fill={a} opacity="0.6" />
      {/* Neck/thorax */}
      <rect x="85" y="95" width="30" height="22" rx="6" fill="#5a4500" />
      {/* Head — wide */}
      <ellipse cx="100" cy="72" rx="45" ry="32" fill="#6b4c00" />
      {/* Compound eyes */}
      <ellipse cx="72" cy="68" rx="14" ry="11" fill="#1a1200" />
      <ellipse cx="128" cy="68" rx="14" ry="11" fill="#1a1200" />
      <ellipse cx="72" cy="68" rx="8" ry="6" fill={a} opacity="0.6" />
      <ellipse cx="128" cy="68" rx="8" ry="6" fill={a} opacity="0.6" />
      {/* Mandibles */}
      <path d="M68,90 Q55,100 52,108" stroke={a} strokeWidth="2.5" fill="none" opacity="0.9" />
      <path d="M132,90 Q145,100 148,108" stroke={a} strokeWidth="2.5" fill="none" opacity="0.9" />
      {/* Antennae */}
      <path d="M85,42 Q75,20 60,10" stroke={a} strokeWidth="2" fill="none" />
      <circle cx="60" cy="10" r="3" fill={a} />
      <path d="M115,42 Q125,20 140,10" stroke={a} strokeWidth="2" fill="none" />
      <circle cx="140" cy="10" r="3" fill={a} />
      {/* Head markings */}
      <path d="M85,72 L100,65 L115,72" stroke={a} strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Extra arms hint */}
      <path d="M40,145 Q25,135 22,120" stroke={s} strokeWidth="4" fill="none" opacity="0.5" />
      <path d="M160,145 Q175,135 178,120" stroke={s} strokeWidth="4" fill="none" opacity="0.5" />
    </g>
  );
}

// ── Kra'van (reptilian) ──────────────────────────────────────────────────────
function KravanPortrait({ p, s, a }) {
  return (
    <g>
      <rect x="0" y="0" width="200" height="200" fill={p} />
      {/* Dark gradient bottom */}
      <rect x="0" y="90" width="200" height="110" fill="#200" opacity="0.8" />
      {/* Armor/body */}
      <path d="M35,200 L40,135 Q55,112 80,108 L100,116 L120,108 Q145,112 160,135 L165,200 Z" fill={s} />
      {/* Armor plates */}
      <path d="M68,120 L100,126 L132,120" stroke={a} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M60,140 L100,148 L140,140" stroke={a} strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Neck */}
      <rect x="84" y="94" width="32" height="22" rx="3" fill="#4a1010" />
      {/* Scales on neck */}
      <path d="M84,98 L92,94 L100,98 L108,94 L116,98" stroke={a} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Head — angular */}
      <path d="M60,75 Q60,40 100,36 Q140,40 140,75 Q142,95 120,100 L100,104 L80,100 Q58,95 60,75 Z" fill="#4a1010" />
      {/* Brow ridge */}
      <path d="M62,68 Q80,56 100,54 Q120,56 138,68" stroke="#8b0000" strokeWidth="4" fill="none" />
      {/* Eyes — vertical pupils */}
      <ellipse cx="82" cy="72" rx="9" ry="8" fill="#200" />
      <ellipse cx="118" cy="72" rx="9" ry="8" fill="#200" />
      <ellipse cx="82" cy="72" rx="3" ry="7" fill={a} opacity="0.8" />
      <ellipse cx="118" cy="72" rx="3" ry="7" fill={a} opacity="0.8" />
      {/* Snout */}
      <path d="M88,82 L100,92 L112,82" stroke="#3a0a0a" strokeWidth="2" fill="#3a0a0a" />
      <circle cx="94" cy="87" r="2" fill="#200" />
      <circle cx="106" cy="87" r="2" fill="#200" />
      {/* Scar */}
      <line x1="76" y1="60" x2="86" y2="80" stroke="#ff6060" strokeWidth="2" opacity="0.5" />
      {/* Frills */}
      <path d="M60,75 Q48,65 44,50" stroke={a} strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M140,75 Q152,65 156,50" stroke={a} strokeWidth="3" fill="none" opacity="0.5" />
    </g>
  );
}

// ── Serathi (bioluminescent) ─────────────────────────────────────────────────
function SerathiPortrait({ p, s, a }) {
  return (
    <g>
      <rect x="0" y="0" width="200" height="200" fill={p} />
      {/* Biolum glow background */}
      <ellipse cx="100" cy="80" rx="70" ry="80" fill={s} opacity="0.3" />
      {/* Slim body */}
      <path d="M60,200 L62,145 Q68,118 85,112 L100,118 L115,112 Q132,118 138,145 L140,200 Z" fill={s} />
      {/* Biolum patterns on body */}
      <path d="M85,125 Q100,130 115,125" stroke={a} strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M80,140 Q100,148 120,140" stroke={a} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Neck — long */}
      <rect x="90" y="88" width="20" height="28" rx="8" fill="#0a2e2e" />
      {/* Biolum neck lines */}
      <line x1="96" y1="90" x2="94" y2="114" stroke={a} strokeWidth="1" opacity="0.7" />
      <line x1="104" y1="90" x2="106" y2="114" stroke={a} strokeWidth="1" opacity="0.7" />
      {/* Head — narrow, tall */}
      <ellipse cx="100" cy="66" rx="26" ry="34" fill="#0a3030" />
      {/* Biolum face patterns */}
      <path d="M82,56 Q100,48 118,56" stroke={a} strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M78,72 Q88,66 100,64 Q112,66 122,72" stroke={a} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Eyes — large, glowing */}
      <ellipse cx="88" cy="62" rx="8" ry="9" fill={a} opacity="0.9" />
      <ellipse cx="112" cy="62" rx="8" ry="9" fill={a} opacity="0.9" />
      <ellipse cx="88" cy="62" rx="4" ry="5" fill="#fff" opacity="0.4" />
      <ellipse cx="112" cy="62" rx="4" ry="5" fill="#fff" opacity="0.4" />
      <circle cx="88" cy="62" r="2" fill="#001a1a" />
      <circle cx="112" cy="62" r="2" fill="#001a1a" />
      {/* Gill slits on cheeks */}
      <line x1="76" y1="68" x2="80" y2="60" stroke={a} strokeWidth="1.5" opacity="0.6" />
      <line x1="73" y1="70" x2="77" y2="62" stroke={a} strokeWidth="1.5" opacity="0.6" />
      <line x1="124" y1="68" x2="120" y2="60" stroke={a} strokeWidth="1.5" opacity="0.6" />
      <line x1="127" y1="70" x2="123" y2="62" stroke={a} strokeWidth="1.5" opacity="0.6" />
      {/* Mouth — thin line */}
      <path d="M92,80 Q100,84 108,80" stroke={a} strokeWidth="1.5" fill="none" opacity="0.7" />
    </g>
  );
}

// ── Dul'mak (massive spiritual) ───────────────────────────────────────────────
function DulmakPortrait({ p, s, a }) {
  return (
    <g>
      <rect x="0" y="0" width="200" height="200" fill={p} />
      <rect x="0" y="115" width="200" height="85" fill={s} opacity="0.5" />
      {/* Wide body */}
      <path d="M5,200 L20,130 Q38,108 65,104 L100,112 L135,104 Q162,108 180,130 L195,200 Z" fill={s} />
      {/* Ceremonial robe marks */}
      <path d="M65,118 L100,126 L135,118" stroke={a} strokeWidth="2.5" fill="none" opacity="0.7" />
      <path d="M50,148 L100,158 L150,148" stroke={a} strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Ritual tattoos on body */}
      <circle cx="100" cy="140" r="6" stroke={a} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="100" cy="140" r="3" fill={a} opacity="0.3" />
      {/* Thick neck */}
      <rect x="78" y="92" width="44" height="24" rx="8" fill="#3a2200" />
      {/* Head — wide, massive */}
      <ellipse cx="100" cy="70" rx="46" ry="42" fill="#3a2200" />
      {/* Heavy brow */}
      <path d="M58,62 Q80,52 100,50 Q120,52 142,62" stroke="#5a3500" strokeWidth="8" fill="none" />
      {/* Eyes — small, deep-set */}
      <ellipse cx="84" cy="68" rx="7" ry="6" fill="#1a0e00" />
      <ellipse cx="116" cy="68" rx="7" ry="6" fill="#1a0e00" />
      <circle cx="85" cy="67" r="2.5" fill={a} opacity="0.6" />
      <circle cx="117" cy="67" r="2.5" fill={a} opacity="0.6" />
      {/* Ritual face markings */}
      <path d="M100,56 L100,86" stroke={a} strokeWidth="2" opacity="0.5" />
      <path d="M80,60 Q100,58 120,60" stroke={a} strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Broad flat nose */}
      <ellipse cx="100" cy="79" rx="10" ry="7" fill="#2e1a00" />
      <circle cx="95" cy="80" r="3" fill="#1a0e00" />
      <circle cx="105" cy="80" r="3" fill="#1a0e00" />
      {/* Wide mouth */}
      <path d="M82,90 Q100,98 118,90" stroke="#5a3500" strokeWidth="3" fill="none" />
      {/* Small ritual horns */}
      <path d="M72,48 Q65,30 62,18" stroke={a} strokeWidth="3" fill="none" opacity="0.6" />
      <circle cx="62" cy="18" r="4" fill={a} opacity="0.5" />
      <path d="M128,48 Q135,30 138,18" stroke={a} strokeWidth="3" fill="none" opacity="0.6" />
      <circle cx="138" cy="18" r="4" fill={a} opacity="0.5" />
    </g>
  );
}

// ── The Pale (geometric/uncanny) ──────────────────────────────────────────────
function PalePortrait({ p, s, a }) {
  return (
    <g>
      <rect x="0" y="0" width="200" height="200" fill={p} />
      {/* Subtle geometric bg */}
      <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke={s} strokeWidth="1" fill="none" opacity="0.3" />
      <polygon points="100,30 170,65 170,135 100,170 30,135 30,65" stroke={s} strokeWidth="1" fill="none" opacity="0.2" />
      {/* Body — minimal */}
      <path d="M55,200 L58,150 Q65,120 85,114 L100,120 L115,114 Q135,120 142,150 L145,200 Z" fill={s} opacity="0.8" />
      {/* Geometric body lines */}
      <line x1="85" y1="120" x2="85" y2="160" stroke={a} strokeWidth="1" opacity="0.3" />
      <line x1="115" y1="120" x2="115" y2="160" stroke={a} strokeWidth="1" opacity="0.3" />
      <line x1="70" y1="138" x2="130" y2="138" stroke={a} strokeWidth="1" opacity="0.3" />
      {/* Neck */}
      <rect x="88" y="96" width="24" height="22" rx="2" fill={s} />
      {/* Head — near-perfect oval */}
      <ellipse cx="100" cy="70" rx="36" ry="40" fill={s} />
      {/* Perfect symmetry lines */}
      <line x1="100" y1="36" x2="100" y2="104" stroke={a} strokeWidth="0.5" opacity="0.2" />
      <line x1="64" y1="70" x2="136" y2="70" stroke={a} strokeWidth="0.5" opacity="0.2" />
      {/* Eyes — geometric, unsettling */}
      <rect x="78" y="58" width="16" height="16" rx="2" fill="#0a0a18" />
      <rect x="106" y="58" width="16" height="16" rx="2" fill="#0a0a18" />
      <rect x="82" y="62" width="8" height="8" rx="1" fill={a} opacity="0.9" />
      <rect x="110" y="62" width="8" height="8" rx="1" fill={a} opacity="0.9" />
      <rect x="84" y="64" width="4" height="4" fill="#0a0a18" />
      <rect x="112" y="64" width="4" height="4" fill="#0a0a18" />
      {/* Symmetric facial patterns */}
      <path d="M74,78 L80,72 L86,78" stroke={a} strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M114,78 L120,72 L126,78" stroke={a} strokeWidth="1" fill="none" opacity="0.4" />
      {/* Minimal mouth — just a line */}
      <line x1="88" y1="88" x2="112" y2="88" stroke={a} strokeWidth="1.5" opacity="0.6" />
      {/* Side data-lines */}
      <line x1="64" y1="56" x2="64" y2="84" stroke={a} strokeWidth="1" opacity="0.3" />
      <line x1="136" y1="56" x2="136" y2="84" stroke={a} strokeWidth="1" opacity="0.3" />
    </g>
  );
}

export default HexPortrait;
