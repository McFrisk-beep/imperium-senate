# Galactic Senate

A single-player narrative card game built in React. You play as a senator in the Galactic Assembly, navigating the competing interests of four factions. Every decision shifts the balance of power. Let any faction dominate or collapse and your term ends — unless you fulfil your mandate first.

---

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

**Other scripts**

| Command | Purpose |
|---|---|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint check |

---

## How to Play

**Goal** — Keep all four faction meters between 1 and 99. Complete all three assigned directives to retire your senator with honour (the true ending). Fail a meter and your term ends in disgrace.

**Each turn** — A character approaches you with a situation. Swipe left or right (or use ← → arrow keys, or click the buttons) to choose your response. Each choice shifts faction meters by different amounts.

**Faction meters** — Shown at the top of the screen. Each faction has a danger zone below 20 and above 80, highlighted in the UI. Hit 0 or 100 and that faction brings your term to an end.

**Directives** — Three secret objectives are assigned at the start of each run. A cryptic hint is shown in the panel at the bottom. Complete all three to trigger the true ending instead of waiting to die.

**Legacy** — Completed directives persist across runs as legacy flags. They unlock new cards in future runs, grant starting meter bonuses, and reveal lore fragments about the galaxy's history.

---

## Factions

| Faction | Icon | Too high | Too low |
|---|---|---|---|
| The Senate | 🏛️ | Oligarchic lock — purged for overreach | Constitutional crisis — ousted for illegitimacy |
| Military | ⚔️ | Military coup — they no longer need you | Collapse of order — pirates and insurgents overwhelm the borders |
| Trade League | 💰 | Corporate capture — blackmailed into compliance | Economic collapse — hyperinflation and supply failure |
| Alien Coalition | 👽 | Alien dominance — human worlds placed under oversight | Species conflict — war across the outer systems |

---

## Card Types

| Category | Draw weight | Description |
|---|---|---|
| Standard | 60% | Everyday Senate business. Typically affects one or two factions. |
| Crossfire | 25% | Two factions in direct conflict. Helping one hurts the other. |
| Crisis | 10% | Multi-faction emergencies with large meter swings. |
| Objective | 5% | Rare cards tied to hidden directives, marked with a glyph on the portrait border. |

Cards with `requiredFlags` or `requiredLegacyFlags` stay dormant in the deck pool and only become drawable when the right conditions are met.

---

## Story Chains

Some cards are the start of multi-card storylines. The choice you make on a trigger card sets a run flag that unlocks the next card in the chain — which surfaces naturally within a few turns.

| Chain | Trigger | Notes |
|---|---|---|
| The Ceasefire Mission | Accepting General Corvath's envoy mission | Three-card chain. Only activates if you accept. |
| The Downed Transport | Your ship takes damage | Three-card chain. Both choices crash the ship — the chain always runs. |
| The Fugitive Senator | Acting on the encrypted threat message | Three-card chain. Only activates if you go underground. |
| The Assassination Contract | Your security detail's warning | Two-card chain. The contractor makes contact regardless of what you do with the warning. |

---

## Directives (Objectives)

Three are randomly selected each run. Only their cryptic hints are shown during play.

| Directive | Unlock | Run bonus (once earned) |
|---|---|---|
| Pacifist — reach turn 20 without the `war_hawk` flag | The Diplomat arc | Coalition starts at 60 |
| Compromised — accumulate 3+ `compromised` flags | The Corruption arc | Trade League starts at 60 |
| Pale Listener — encounter The Pale emissary | The Pale Threshold arc | (none — the arc itself is the reward) |
| Rebel — invoke emergency tenure | The Senate Purge arc | Military starts at 60 |
| Perfect Balance — keep all meters 30–70 for 15+ turns | Perfect Balance ending | All factions start at 55 |
| Alien Ally — publicly ally with the Coalition | Coalition Inner Circle arc | Coalition starts at 65 |

---

## Races

| Race | Alignment | Notes |
|---|---|---|
| Human | None | The pragmatists. Appear across all factions. |
| The Veth | Senate | Insectoid legalists. Procedurally exacting. |
| Kra'van | Military | Reptilian militarists. Respect decisive action. |
| The Serathi | Trade | Bioluminescent traders. Every favour is an investment. |
| Dul'mak | Coalition | Massive spiritual giants. Long memories, deep loyalties. |
| The Pale | Unknown | Post-singularity. Their motives are never fully clear. |

---

## Persistence

Progress is saved to `localStorage` under two keys:

| Key | Contents |
|---|---|
| `gs_senatorLog` | History of all past senators (up to 50 entries) — name, turns served, death cause or retirement, completed directives |
| `gs_legacyFlags` | Cross-run flags: completed objective IDs + named event flags (`first_pale_encounter`, `kra_van_war_started`, `senate_dissolved`) |

Clearing `localStorage` resets all legacy progress.

---

## Project Structure

```
src/
├── components/
│   ├── FactionMeters.jsx    # Top bar — faction meter bars with danger indicators
│   ├── GameOver.jsx         # Death screen — cause of death, lore fragments, run bonuses
│   ├── LegacyBrief.jsx      # Pre-run screen showing active legacy bonuses
│   ├── ObjectiveHints.jsx   # Collapsible bottom panel — cryptic directive hints
│   ├── Portrait.jsx         # Hexagonal SVG portraits, one per race
│   ├── SenatorLog.jsx       # Historical record of all past senators
│   ├── SwipeCard.jsx        # Main card — drag/swipe/keyboard interaction
│   ├── TitleScreen.jsx      # Main menu
│   └── TrueEnding.jsx       # Mandate fulfilled screen — all directives completed
├── data/
│   ├── cards.js             # All 63 cards (base, chain, arc, legacy-gated)
│   ├── factions.js          # Faction definitions — names, colours, death conditions
│   ├── objectives.js        # 6 directives — checks, lore fragments, run bonuses
│   └── races.js             # 6 races — palettes, alignment, descriptions
├── store/
│   └── gameStore.js         # Zustand store — all game state and actions
├── App.jsx                  # Phase router (title / brief / game / dead / won / log)
└── index.css                # Tailwind base + custom animations
```

---

## Tech Stack

- **React 19** + **Vite 8**
- **Zustand 5** — game state
- **Tailwind CSS 3** — styling
- **Google Fonts** — Orbitron (display), Space Grotesk (body)
