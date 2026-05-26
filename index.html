export const OBJECTIVES = [
  {
    id: 'pacifist',
    hint: 'Those who hold back the blade are remembered.',
    check: (state) => state.turn >= 20 && !state.flags.includes('war_hawk'),
    reward: 'Unlocks: The Diplomat arc',
  },
  {
    id: 'compromised',
    hint: 'The Serathi watch those who yield.',
    check: (state) =>
      (state.flags.filter((f) => f === 'compromised').length || 0) >= 3,
    reward: 'Unlocks: The Corruption arc',
  },
  {
    id: 'pale_listener',
    hint: 'The Pale watch those who listen.',
    check: (state) => state.flags.includes('pale_met'),
    reward: 'Unlocks: The Pale Threshold arc',
  },
  {
    id: 'rebel',
    hint: 'Power is not given. It is seized.',
    check: (state) => state.flags.includes('senate_rebel'),
    reward: 'Unlocks: Senate Purge arc',
  },
  {
    id: 'perfect_balance',
    hint: 'In equilibrium, there is a kind of wisdom.',
    check: (state) => {
      const m = state.meters;
      return Object.values(m).every((v) => v >= 30 && v <= 70) && state.turn >= 15;
    },
    reward: '"Perfect Balance" ending',
  },
  {
    id: 'alien_ally',
    hint: 'They remember those who stood with them.',
    check: (state) => state.flags.includes('alien_ally'),
    reward: 'Unlocks: Coalition Inner Circle',
  },
];

export function assignObjectives() {
  const shuffled = [...OBJECTIVES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}
