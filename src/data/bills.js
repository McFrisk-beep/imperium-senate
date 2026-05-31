// Bills for the Senate Hall "Whip the Vote" side-game.
//
// Each bill is debated on the floor every few turns. The player picks a side
// (Support → whip for passage, Oppose → whip against), spends a limited pool of
// influence to sway voting blocs, then calls the vote. Whether the bill PASSES
// or FAILS determines which meter effects apply — so the player reads the
// outcomes first and decides which side is worth fighting for.
//
//   pass / fail: { label, effects, flags? }  — applied on the respective result
//
// Bloc leanings at the start of a vote are derived from the player's current
// faction meters (see SenateHall.jsx), wiring the side-game into the main game.

export const BILLS = [
  {
    id: 'bill_tarsis',
    title: 'The Tarsis Militarization Act',
    summary:
      'Permanently station the Third Fleet in the contested Tarsis corridor, over Coalition objections.',
    floor:
      'Floor leadership has tabled the bill. The galaxy is watching how you whip the vote.',
    pass: {
      label: 'The corridor is militarized',
      effects: { military: 12, coalition: -11, trade: -3 },
    },
    fail: {
      label: 'The motion dies on the floor',
      effects: { military: -7, coalition: 7 },
      flags: ['war_hawk_avoided'],
    },
  },
  {
    id: 'bill_tariff',
    title: 'The Outer-Rim Tariff Repeal',
    summary:
      'Strip the Trade League of its protective tariffs and open the outer markets to Coalition goods.',
    floor:
      "The Serathi delegations are furious. The Dul'mak are watching for a gesture of good faith.",
    pass: {
      label: 'Markets are opened',
      effects: { trade: -12, coalition: 10, senate: 3 },
    },
    fail: {
      label: 'The tariffs hold',
      effects: { trade: 9, coalition: -8 },
    },
  },
  {
    id: 'bill_charter',
    title: 'The Charter Reform Amendment',
    summary:
      'Concentrate emergency legislative powers in the sitting Senate during border crises.',
    floor:
      'Some call it decisive. Others call it the first step toward an oligarchic lock.',
    pass: {
      label: 'Powers are concentrated',
      effects: { senate: 13, military: 5, coalition: -7 },
    },
    fail: {
      label: 'The Charter stands unchanged',
      effects: { senate: -9, trade: 4 },
    },
  },
  {
    id: 'bill_amnesty',
    title: 'The Separatist Amnesty Bill',
    summary:
      "Grant amnesty to Dul'mak separatist cells in exchange for laying down arms.",
    floor:
      'The military wants them tried. The Coalition wants them home. You hold the gavel.',
    pass: {
      label: 'Amnesty is granted',
      effects: { coalition: 12, military: -10, senate: -2 },
      flags: ['alien_ally'],
    },
    fail: {
      label: 'Amnesty is denied',
      effects: { military: 9, coalition: -11 },
    },
  },
  {
    id: 'bill_subsidy',
    title: 'The Defense Procurement Subsidy',
    summary:
      'Route Trade League contracts to the shipyards funding the next fleet expansion.',
    floor:
      'A tidy arrangement — if you can stomach who profits from it.',
    pass: {
      label: 'The subsidy is approved',
      effects: { military: 9, trade: 9, senate: -7 },
      flags: ['compromised'],
    },
    fail: {
      label: 'The subsidy is struck down',
      effects: { senate: 8, military: -5, trade: -5 },
    },
  },
  {
    id: 'bill_census',
    title: 'The Unified Species Census',
    summary:
      'Count every species equally for the purpose of Senate representation.',
    floor:
      'Equal standing for all voices — the original mandate, never quite honored.',
    pass: {
      label: 'The census passes',
      effects: { coalition: 9, senate: 6, military: -6 },
    },
    fail: {
      label: 'The census is shelved',
      effects: { coalition: -9, senate: -4 },
    },
  },
];

export function pickBill(excludeId = null) {
  const pool = excludeId ? BILLS.filter((b) => b.id !== excludeId) : BILLS;
  return pool[Math.floor(Math.random() * pool.length)];
}
