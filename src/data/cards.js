export const CARDS = [
  // ── SENATE CARDS ─────────────────────────────────────────────────────────
  {
    id: 'veth_article7',
    character: "Senate Elder Zeth'avan",
    race: 'veth',
    title: 'Veth Senate Elder',
    scenario:
      "Senator. The vote on Article 7 of the Colonial Charter has been delayed three sessions. I require your signature to proceed — or your stated objection.",
    left: {
      label: 'Delay again',
      preview: 'Buy more time',
      effects: { senate: 3, coalition: -4 },
    },
    right: {
      label: 'Sign it',
      preview: 'Proceed with the vote',
      effects: { senate: 8, trade: -6 },
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'human_orvath',
    character: 'Senator Orvath',
    race: 'human',
    title: 'Senior Senator',
    scenario:
      "I'm giving a speech tomorrow against the Coalition's latest land claim. Stand with me publicly and I'll owe you a favor. Refuse and you'll look like their puppet.",
    left: {
      label: 'Decline to endorse',
      preview: 'Stay neutral',
      effects: { senate: -5, coalition: 6 },
    },
    right: {
      label: 'Stand with him',
      preview: 'Co-sign the speech',
      effects: { senate: 7, coalition: -8 },
    },
    category: 'crossfire',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'senate_clerk',
    character: 'Clerk Harven',
    race: 'human',
    title: 'Senate Clerk',
    scenario:
      "A procedural amendment. Reclassifying outer colony disputes as 'internal trade matters' — it sounds minor. But it would strip them of Senate standing.",
    left: {
      label: 'Block the amendment',
      preview: 'Protect colony rights',
      effects: { senate: -4, trade: -3, coalition: 5 },
    },
    right: {
      label: 'Let it pass',
      preview: 'Expedite proceedings',
      effects: { senate: 4, trade: 5, coalition: -6 },
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'veth_arbiter',
    character: "Arbiter Ku'vel",
    race: 'veth',
    title: 'Veth Legal Arbiter',
    scenario:
      'Senator. A formal challenge has been filed against your appointment. Procedural irregularities in the confirmation vote. You may answer the challenge or invoke emergency tenure.',
    left: {
      label: 'Answer the challenge',
      preview: 'Submit to scrutiny',
      effects: { senate: 10, military: -3 },
    },
    right: {
      label: 'Invoke emergency tenure',
      preview: 'Override the process',
      effects: { senate: -8, military: 4 },
      flags: ['senate_rebel'],
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: true,
  },
  {
    id: 'human_lobbyist',
    character: 'Malin Drasc',
    race: 'human',
    title: 'Senate Lobbyist',
    scenario:
      "I can tell you exactly how three Senators will vote on the next defense bill — names, prices, everything. All I want is your support for a Trade League exemption. Small ask.",
    left: {
      label: 'Refuse the deal',
      preview: 'Keep your hands clean',
      effects: { senate: 6, trade: -5 },
    },
    right: {
      label: 'Take the intelligence',
      preview: 'Buy the leverage',
      effects: { senate: -4, trade: 7 },
      flags: ['compromised'],
    },
    category: 'crossfire',
    requiredFlags: [],
    objectiveGlyph: false,
  },

  // ── MILITARY CARDS ────────────────────────────────────────────────────────
  {
    id: 'kravan_admiral',
    character: "Admiral Vex Kra'van",
    race: 'kravan',
    title: 'Third Fleet Admiral',
    scenario:
      "We intercepted a Trade League freighter running weapons to Dul'mak separatists. I want authorization to board and seize. Yes or no.",
    left: {
      label: 'Deny the boarding',
      preview: 'Protect civilian shipping',
      effects: { coalition: 5, trade: 4, military: -8 },
    },
    right: {
      label: 'Authorize seizure',
      preview: 'Let them board',
      effects: { military: 9, coalition: -7, trade: -5 },
    },
    category: 'crossfire',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'human_general_maris',
    character: 'General Maris',
    race: 'human',
    title: 'Border Command',
    scenario:
      "The Kra'van border garrison is at 40% capacity. Without emergency funding, we lose three patrol sectors before next quarter. I need an answer today.",
    left: {
      label: 'Deny the funds',
      preview: 'Hold the budget line',
      effects: { military: -7, trade: 4 },
    },
    right: {
      label: 'Approve emergency funding',
      preview: 'Reinforce the border',
      effects: { military: 8, trade: -5, senate: -3 },
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'kravan_warcrime',
    character: 'Commander Teth',
    race: 'kravan',
    title: 'Field Commander',
    scenario:
      "A report has surfaced. Unauthorized use of chemical agents on a Dul'mak settlement. My soldiers. I need this buried before it reaches the press.",
    left: {
      label: 'Let it go public',
      preview: 'Release the report',
      effects: { military: -9, coalition: 8, senate: 5 },
    },
    right: {
      label: 'Bury it',
      preview: 'Classify and contain',
      effects: { military: 6, coalition: -9, senate: -5 },
      flags: ['war_hawk'],
    },
    category: 'crossfire',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'human_fleet_strike',
    character: 'Fleet Commander Davan',
    race: 'human',
    title: 'Strike Fleet Command',
    scenario:
      'Dul\'mak separatist ships were spotted near the Verath station. I\'m requesting authorization for a preemptive strike. The window closes in six hours.',
    left: {
      label: 'Deny the strike',
      preview: 'Stand down the fleet',
      effects: { military: -8, coalition: 7 },
    },
    right: {
      label: 'Authorize the strike',
      preview: 'Commit to action',
      effects: { military: 10, coalition: -12, senate: -4 },
      flags: ['war_hawk'],
    },
    category: 'crisis',
    requiredFlags: [],
    objectiveGlyph: false,
  },

  // ── TRADE LEAGUE CARDS ────────────────────────────────────────────────────
  {
    id: 'serathi_bribe',
    character: 'Envoy Lissara',
    race: 'serathi',
    title: 'Serathi Trade Envoy',
    scenario:
      'A small investment on your part — a vote here, a silence there — and your family name will be... comfortable. For generations.',
    left: {
      label: 'Refuse',
      preview: 'Turn them away',
      effects: { senate: 5, trade: -6 },
    },
    right: {
      label: 'Accept',
      preview: 'Seal the arrangement',
      effects: { trade: 8 },
      flags: ['compromised'],
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: true,
  },
  {
    id: 'human_merchant_embargo',
    character: 'Lord Caven Mast',
    race: 'human',
    title: 'Merchant Lord',
    scenario:
      "The outer colony trade embargo is on the table. It will hurt millions — but it stabilizes the core markets and prevents a megacorp collapse. Your vote is the tie-breaker.",
    left: {
      label: 'Vote against the embargo',
      preview: 'Protect the colonies',
      effects: { trade: -7, coalition: 6, senate: -3 },
    },
    right: {
      label: 'Vote for the embargo',
      preview: 'Stabilize the core',
      effects: { trade: 8, coalition: -8, senate: 3 },
    },
    category: 'crossfire',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'serathi_mining',
    character: 'Broker Aelith',
    race: 'serathi',
    title: 'Serathi Resource Broker',
    scenario:
      'Exclusive mining rights to the Vess moon — uninhabited, rich in crystite. A trivial matter. Sign the charter and the Trade League funds your next campaign.',
    left: {
      label: 'Deny the charter',
      preview: 'Block the deal',
      effects: { trade: -6, senate: 4 },
    },
    right: {
      label: 'Grant the rights',
      preview: 'Sign the charter',
      effects: { trade: 7, coalition: -5 },
      flags: ['compromised'],
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'human_smuggler',
    character: '"Dax"',
    race: 'human',
    title: 'Trade League Informant',
    scenario:
      "I've got manifests, shipping codes, and three names the Military would love to have. Free of charge — if you agree to look the other way on one shipment. Just one.",
    left: {
      label: 'Turn them in',
      preview: 'Report to authorities',
      effects: { military: 5, trade: -7 },
    },
    right: {
      label: 'Take the deal',
      preview: 'Accept the intelligence',
      effects: { trade: 6, military: -4 },
      flags: ['compromised'],
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: false,
  },

  // ── COALITION CARDS ───────────────────────────────────────────────────────
  {
    id: 'dulmak_sacred',
    character: 'Elder Harumek',
    race: 'dulmak',
    title: "Dul'mak Cultural Elder",
    scenario:
      'The Veth moon Sorath is a sacred site to our people. A Trade League survey team has been granted access. We ask the Senate to revoke the permit.',
    left: {
      label: 'Revoke the permit',
      preview: 'Protect the sacred site',
      effects: { coalition: 8, trade: -7, senate: 3 },
    },
    right: {
      label: 'Let the survey proceed',
      preview: 'Honor the existing permit',
      effects: { coalition: -7, trade: 6, senate: -3 },
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'pale_emissary',
    character: 'The Emissary',
    race: 'pale',
    title: 'Pale Emissary',
    scenario:
      'The third threshold approaches. You have already chosen twice without knowing. The third choice is the one that matters.',
    left: {
      label: 'Ask what they mean',
      preview: 'Seek understanding',
      effects: { coalition: 3 },
    },
    right: {
      label: 'Dismiss them',
      preview: 'End the audience',
      effects: { coalition: -3 },
    },
    category: 'objective',
    requiredFlags: [],
    objectiveGlyph: true,
  },
  {
    id: 'dulmak_refugees',
    character: 'Delegate Sorum',
    race: 'dulmak',
    title: "Dul'mak Refugee Delegate",
    scenario:
      'Ten thousand Dul\'mak refugees need emergency resettlement. The Military has flagged the proposed colony world as a strategic asset. Someone has to lose.',
    left: {
      label: 'Side with the Military',
      preview: 'Deny resettlement',
      effects: { military: 6, coalition: -9 },
    },
    right: {
      label: 'Authorize resettlement',
      preview: 'Open the colony world',
      effects: { coalition: 9, military: -7 },
    },
    category: 'crossfire',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'serathi_coalition_crossfire',
    character: 'Joint Delegation',
    race: 'serathi',
    title: 'Trade/Coalition Dispute',
    scenario:
      "A Serathi mining company is strip-mining the Dul'mak holy site at Vorath. The Coalition demands intervention. The Trade League calls it a lawful contract.",
    left: {
      label: 'Back the Coalition',
      preview: 'Force the company out',
      effects: { coalition: 8, trade: -9, senate: -3 },
    },
    right: {
      label: 'Back the Trade League',
      preview: 'Honor the contract',
      effects: { trade: 7, coalition: -10, senate: -2 },
    },
    category: 'crossfire',
    requiredFlags: [],
    objectiveGlyph: false,
  },

  // ── CRISIS CARDS ──────────────────────────────────────────────────────────
  {
    id: 'crisis_fracture',
    character: 'Emergency Broadcast',
    race: 'human',
    title: 'CRISIS — Senate Floor',
    scenario:
      "A Kra'van separatist movement has declared independence from the Galactic Assembly. The Military wants to suppress. The Coalition wants recognition. Trade wants neutrality. You cast the deciding vote.",
    left: {
      label: 'Call for negotiation',
      preview: 'Seek a political resolution',
      effects: { senate: -5, military: -8, coalition: 7, trade: 5 },
    },
    right: {
      label: 'Authorize suppression',
      preview: 'Back the Military response',
      effects: { senate: 4, military: 12, coalition: -12, trade: -6 },
    },
    category: 'crisis',
    requiredFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'crisis_pale_signal',
    character: 'The Signal',
    race: 'pale',
    title: 'CRISIS — Pale Transmission',
    scenario:
      "A galaxy-wide transmission from The Pale. Every faction interprets it differently. The Military wants a defense posture. The Coalition wants dialogue. The Senate wants it classified. Trade is already selling decryption contracts.",
    left: {
      label: 'Demand Senate oversight',
      preview: 'Classify and convene',
      effects: { senate: 8, military: -5, coalition: -6, trade: -7 },
    },
    right: {
      label: 'Broadcast a public reply',
      preview: 'Respond openly',
      effects: { senate: -8, military: -4, coalition: 10, trade: 3 },
    },
    category: 'crisis',
    requiredFlags: [],
    objectiveGlyph: false,
  },

  // ── OBJECTIVE / STANDARD ─────────────────────────────────────────────────
  {
    id: 'alien_ally_objective',
    character: 'Coalition Speaker Vel',
    race: 'dulmak',
    title: 'Alien Coalition Speaker',
    scenario:
      "Senator. Word has spread that you've supported our people. Many of us remember. We'd like to formalize that trust — if you'll accept our friendship publicly.",
    left: {
      label: 'Decline quietly',
      preview: 'Keep distance',
      effects: { coalition: -4, senate: 3 },
    },
    right: {
      label: 'Accept the friendship',
      preview: 'Stand with the Coalition',
      effects: { coalition: 8, senate: -5 },
      flags: ['alien_ally'],
    },
    category: 'standard',
    requiredFlags: [],
    objectiveGlyph: true,
  },
];
