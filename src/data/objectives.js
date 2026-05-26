export const OBJECTIVES = [
  {
    id: 'pacifist',
    hint: 'Those who hold back the blade are remembered.',
    check: (state) => state.turn >= 20 && !state.flags.includes('war_hawk'),
    reward: 'Unlocks: The Diplomat arc',
    loreFragment:
      'The Galactic Accords were not written by generals. They were written by the senators who outlasted them. Every blade held back is a word added to the galaxy\'s founding text.',
    runBonus: { coalition: 10 },
    runBonusLabel: 'Coalition begins at 60 — your restraint is remembered.',
  },
  {
    id: 'compromised',
    hint: 'The Serathi watch those who yield.',
    check: (state) =>
      (state.flags.filter((f) => f === 'compromised').length || 0) >= 3,
    reward: 'Unlocks: The Corruption arc',
    loreFragment:
      'The Serathi do not bribe. They invest. Every favor accepted becomes a thread in a web that spans six systems. By the time you notice the pattern, you are already part of it.',
    runBonus: { trade: 10 },
    runBonusLabel: 'Trade League begins at 60 — you are known in the right circles.',
  },
  {
    id: 'pale_listener',
    hint: 'The Pale watch those who listen.',
    check: (state) => state.flags.includes('pale_met'),
    reward: 'Unlocks: The Pale Threshold arc',
    loreFragment:
      'The Pale do not communicate. They calibrate. What you hear as words is a signal tuned to your particular frequency of doubt. The fact that you heard them at all means they already know what you will choose.',
    runBonus: null,
    runBonusLabel: null,
  },
  {
    id: 'rebel',
    hint: 'Power is not given. It is seized.',
    check: (state) => state.flags.includes('senate_rebel'),
    reward: 'Unlocks: Senate Purge arc',
    loreFragment:
      'Emergency tenure has been invoked only four times in the Assembly\'s history. Three times it ended in collapse. The fourth, in reformation. History does not record which outcome the Senate preferred.',
    runBonus: { military: 10 },
    runBonusLabel: 'Military begins at 60 — your defiance earned their respect.',
  },
  {
    id: 'perfect_balance',
    hint: 'In equilibrium, there is a kind of wisdom.',
    check: (state) => {
      const m = state.meters;
      return Object.values(m).every((v) => v >= 30 && v <= 70) && state.turn >= 15;
    },
    reward: '"Perfect Balance" ending',
    loreFragment:
      'Perfect Balance was the original mandate of the first Senate — equal standing for all factions, all voices. The mandate was amended within three sessions. Some say before the ink dried.',
    runBonus: { senate: 5, military: 5, trade: 5, coalition: 5 },
    runBonusLabel: 'All factions begin at 55 — equilibrium favors those who maintained it.',
  },
  {
    id: 'alien_ally',
    hint: 'They remember those who stood with them.',
    check: (state) => state.flags.includes('alien_ally'),
    reward: 'Unlocks: Coalition Inner Circle',
    loreFragment:
      'The Dul\'mak do not have a word for "ally." The closest translation is "one who has not yet abandoned us." That they use it for you at all is, in their culture, considered extraordinary.',
    runBonus: { coalition: 15 },
    runBonusLabel: 'Coalition begins at 65 — the outer systems know your name.',
  },
];

export function assignObjectives() {
  const shuffled = [...OBJECTIVES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}
