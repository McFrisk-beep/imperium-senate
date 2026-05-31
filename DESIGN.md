# Design Doc — Senator's Office Expansion

**Galactic Senate** expansion plan: break the single-verb repetition of the swipe
loop without destroying what makes it work.

---

## The Problem

After ~15–20 turns the only verb is "swipe." Players disengage because there is
no sense of place or player-driven agency between cards.

---

## The Fix: Office-Hub Model

The player now sits in a **Senator's Office** and chooses what to do each turn.
The swipe becomes *one room among several*. Navigating between rooms is the new
top-level verb.

---

## Locked-In Design Decisions

1. **The two-choice swipe is sacred.** No new mechanic adds options to a card.
   All new agency lives *beside* the swipe, in separate "rooms."
2. **Votes are periodic & mandatory** (~every 6 turns) and act as a **gate**:
   when a bill is on the floor, the Audience Chamber (swipe) is **locked** until
   the vote is resolved.
3. **No escape valves.** Active items must create new decisions, never silently
   undo meter damage. Cooldown is the balancing lever.
4. **Everything interconnects** — a feature that doesn't feed another system
   doesn't earn its place.

---

## Architecture

### State additions (`gameStore.js`)

| Field | Type | Purpose |
|---|---|---|
| `activeRoom` | `'office' \| 'audience' \| 'vote'` | Routes the GameUI |
| `pendingVote` | `Bill \| null` | The bill on the floor; null when no vote due |
| `turnsSinceVote` | `number` | Counts toward `VOTE_INTERVAL` |

### New actions

| Action | Behaviour |
|---|---|
| `enterRoom(room)` | Navigate; audience blocked while `pendingVote` is set |
| `resolveVote({meterDeltas, flags})` | Apply vote outcome; full death/win check |

### New data

- **`src/data/bills.js`** — 6 bills, `pickBill(excludeId)` helper

### New components

- **`Office.jsx`** — Hub UI with 4 room tiles
- **`SenateHall.jsx`** — Whip-the-vote board + result screen

---

## Phase 0 — The Office Hub (✅ implemented)

- `activeRoom` state; runs land in the **Office**.
- `App.jsx` `GameUI` routes by `activeRoom`; faction-meter top bar is shared chrome.

---

## Phase 1 — Senate Hall "Whip the Vote" (✅ implemented)

Every `VOTE_INTERVAL = 6` turns a bill reaches the floor:

- `pendingVote` is set; player is bounced to the Office.
- **Audience Chamber is locked** until the vote is resolved.
- **Senate Hall** becomes available.

### The whip-the-vote mini-game

- 8 voting blocs seeded from current meters: ≥62 → YEA, ≤38 → NAY, else undecided.
- ~25% of blocs are secretly "bought" and resist a flip (revealed only when tried).
- Player picks **Support / Oppose**, then spends 4 influence to whip blocs.
  - Nudging undecided → target costs **2 goodwill** from that faction.
  - Flipping opposed → target costs **4 goodwill** from that faction.
- **Call the Vote**: ≥5 YEA = pass, else fail.
- Pass/fail applies bill effects + flags; whip costs stack on top.
- Resolution runs the **same death / objective / win checks** as swiping.

### Bills (`src/data/bills.js`)

| Bill | Pass effects | Fail effects |
|---|---|---|
| Tarsis Militarization Act | Military+12, Coalition−11, Trade−3 | Military−7, Coalition+7 |
| Outer-Rim Tariff Repeal | Trade−12, Coalition+10, Senate+3 | Trade+9, Coalition−8 |
| Charter Reform Amendment | Senate+13, Military+5, Coalition−7 | Senate−9, Trade+4 |
| Separatist Amnesty Bill | Coalition+12, Military−10, Senate−2; +alien_ally | Military+9, Coalition−11 |
| Defense Procurement Subsidy | Military+9, Trade+9, Senate−7; +compromised | Senate+8, Military−5, Trade−5 |
| Unified Species Census | Coalition+9, Senate+6, Military−6 | Coalition−9, Senate−4 |

---

## Phase 2 — The Vault (Items) [planned]

- **Inventory + equip slots** — passive modifiers and active/cooldown abilities.
- **Earned from vote outcomes** — winning vote on the right bill grants an item.
- *Guardrail:* no meter-healing escape valves; items create decisions, not safety nets.

Store additions needed:
- `inventory`, `equipped`, `cooldowns`
- `useItem` action, cooldown tick in `swipe`

---

## Phase 3 — Star Chart (Sector Map) [planned]

- **6–9 sectors**, each with controlling faction + stability rating.
- Danger-zone meters **destabilize aligned sectors** each turn.
- **Lost sectors inject crisis cards** (reuses existing `requiredFlags` gating).
- **Votes can flip sector control**; items can be deployed to stabilise.

Store additions needed:
- `sectors`, `deployToSector`
- Drift step in `swipe`

---

## Open Tuning Questions

1. Vote cadence — fixed 6 turns or randomised window?
2. Influence pool size (currently 4) and goodwill costs (2 nudge / 4 flip) — needs playtest.
3. Bought-bloc rate (currently 25%).
4. Equip slots count; do legacy unlocks raise the cap?
5. Sector count (6 vs 9) and drift severity.
6. Keep one death model (meters only) — recommendation: yes.

---

## Pre-existing Lint Debt (not introduced here)

- `src/components/TitleScreen.jsx` — `Math.random` inside `useMemo`.
- `src/store/gameStore.js` — empty `catch {}` in `saveLS`.
