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

  // ── LEGACY-GATED CARDS ───────────────────────────────────────────────────
  // Unlocked only after specific cross-run legacy flags are set (GDD §6.3)
  {
    id: 'pale_second_contact',
    character: 'The Emissary',
    race: 'pale',
    title: 'Pale Emissary — Second Threshold',
    scenario:
      'You have stood before us before. The first threshold has passed. Now we ask: was your choice made freely, or were you already becoming what you feared?',
    left: {
      label: 'It was freely made',
      preview: 'Claim your autonomy',
      effects: { coalition: 5, senate: -3 },
    },
    right: {
      label: 'I am not sure',
      preview: 'Admit uncertainty',
      effects: { coalition: 8, senate: -5 },
      flags: ['pale_met'],
    },
    category: 'objective',
    requiredFlags: [],
    requiredLegacyFlags: ['first_pale_encounter'],
    objectiveGlyph: true,
  },
  {
    id: 'crisis_kra_van_war',
    character: 'War Council',
    race: 'kravan',
    title: "CRISIS — Kra'van Conflict",
    scenario:
      "The war from the last Senate's era still bleeds. Kra'van remnant fleets are running blockades on the outer trade routes. The Military wants a show of force. The Coalition says the galaxy cannot afford another war.",
    left: {
      label: 'Negotiate passage rights',
      preview: 'Find a political solution',
      effects: { military: -7, coalition: 6, trade: 4 },
    },
    right: {
      label: 'Authorize fleet response',
      preview: 'End the blockade by force',
      effects: { military: 10, coalition: -9, trade: -4 },
      flags: ['war_hawk'],
    },
    category: 'crisis',
    requiredFlags: [],
    requiredLegacyFlags: ['kra_van_war_started'],
    objectiveGlyph: false,
  },
  {
    id: 'senate_ruins',
    character: 'Archivist Pell',
    race: 'human',
    title: 'Senate Archivist',
    scenario:
      "The records of the dissolved Senate are still classified. Some believe the old guard is rebuilding in secret. Others say the dissolution was the galaxy's only honest moment. You hold the seal.",
    left: {
      label: 'Keep the records sealed',
      preview: 'Let the past stay buried',
      effects: { senate: 6, coalition: -4 },
    },
    right: {
      label: 'Declassify the records',
      preview: 'Let the galaxy know',
      effects: { senate: -7, coalition: 7, trade: -3 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: ['senate_dissolved'],
    objectiveGlyph: false,
  },

  // ── ARC CARDS — DIPLOMAT (pacifist objective) ─────────────────────────────
  {
    id: 'diplomat_overture',
    character: 'Ambassador Lys Verath',
    race: 'human',
    title: 'Diplomatic Corps',
    scenario:
      'Word has reached the outer systems that you stayed the blade when others did not. A neutral world is requesting you personally to mediate a territorial dispute. The Senate has not approved the mission.',
    left: {
      label: 'Defer to Senate channels',
      preview: 'Stay within protocol',
      effects: { senate: 5, coalition: -3 },
    },
    right: {
      label: 'Go unofficially',
      preview: 'Act on reputation alone',
      effects: { coalition: 8, senate: -6 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: ['pacifist'],
    objectiveGlyph: false,
  },
  {
    id: 'diplomat_terms',
    character: 'Mediator Rith',
    race: 'serathi',
    title: 'Neutral Mediator',
    scenario:
      'Both parties in the mediation are publicly satisfied. Privately each has slipped you a counter-proposal that would resolve the dispute faster — but one side would walk away with nothing.',
    left: {
      label: 'Hold the neutral terms',
      preview: 'No one wins, no one loses',
      effects: { coalition: 5, senate: 4, trade: -4 },
    },
    right: {
      label: 'Accept the stronger offer',
      preview: 'Faster resolution, harder edge',
      effects: { trade: 8, coalition: -7 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: ['pacifist'],
    objectiveGlyph: false,
  },

  // ── ARC CARDS — CORRUPTION (compromised objective) ────────────────────────
  {
    id: 'corruption_evidence',
    character: 'Factor Isseen',
    race: 'serathi',
    title: 'Trade League Factor',
    scenario:
      "A senator you've done business with made a serious mistake — a missing signature on a weapons diversion contract. The Serathi have sent you the file. You can use it or destroy it.",
    left: {
      label: 'Destroy the evidence',
      preview: 'Keep your hands clean',
      effects: { senate: 7, trade: -6 },
    },
    right: {
      label: 'Use it as leverage',
      preview: 'The web grows wider',
      effects: { trade: 9, senate: -6 },
      flags: ['compromised'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: ['compromised'],
    objectiveGlyph: false,
  },
  {
    id: 'corruption_audit',
    character: 'Auditor Vel',
    race: 'human',
    title: 'Senate Oversight',
    scenario:
      "An audit has opened on Trade League campaign contributions. Your name appears three times in the preliminary findings. The auditor is offering a quiet amendment to the record — for a price.",
    left: {
      label: 'Let the audit proceed',
      preview: 'Face it honestly',
      effects: { senate: 8, trade: -7 },
    },
    right: {
      label: 'Pay for the amendment',
      preview: 'Bury the findings',
      effects: { trade: 6, senate: -7 },
      flags: ['compromised'],
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: ['compromised'],
    objectiveGlyph: false,
  },

  // ── ARC CARDS — PALE THRESHOLD (pale_listener objective) ──────────────────
  {
    id: 'pale_intelligence',
    character: 'Intelligence Chief Maro',
    race: 'human',
    title: 'Senate Intelligence',
    scenario:
      'Senate Intelligence has triangulated a second Pale signal — narrower, targeted. They believe it was sent to a single person. The Chief is looking directly at you and waiting.',
    left: {
      label: 'Deny any contact',
      preview: 'Keep it classified',
      effects: { senate: 5, coalition: -4 },
    },
    right: {
      label: 'Acknowledge the signal',
      preview: 'Tell them what you know',
      effects: { senate: -7, coalition: 9 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: ['pale_listener'],
    objectiveGlyph: false,
  },
  {
    id: 'pale_convergence',
    character: 'The Emissary',
    race: 'pale',
    title: 'Pale Emissary — Third Contact',
    scenario:
      "They find you a third time — not in the Senate chamber. Not on any record. They offer to answer one question about the galaxy's future. The condition: you tell no one what they say.",
    left: {
      label: 'Ask the question',
      preview: 'Choose to know',
      effects: { coalition: 6, senate: -4 },
      flags: ['pale_met'],
    },
    right: {
      label: 'Refuse to know',
      preview: 'Some things should stay hidden',
      effects: { senate: 5, coalition: 3 },
    },
    category: 'objective',
    requiredFlags: [],
    requiredLegacyFlags: ['pale_listener'],
    objectiveGlyph: true,
  },

  // ── ARC CARDS — SENATE PURGE (rebel objective) ────────────────────────────
  {
    id: 'purge_evidence',
    character: 'Secretary Davan',
    race: 'human',
    title: 'Reform Bloc',
    scenario:
      'Three senators have compiled evidence of vote manipulation going back twelve sessions. They want you to front the announcement — your emergency tenure precedent makes you the only one the press will believe.',
    left: {
      label: 'Stay uninvolved',
      preview: 'Let others carry the risk',
      effects: { senate: 5, military: -3 },
    },
    right: {
      label: 'Lead the announcement',
      preview: 'Put your name on it',
      effects: { senate: -8, military: 5 },
      flags: ['purge_started'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: ['rebel'],
    objectiveGlyph: false,
  },
  {
    id: 'purge_codify',
    character: 'Chief Justice Elun',
    race: 'veth',
    title: 'Veth High Court',
    scenario:
      "Three senators have been removed following the investigation. The High Court now asks: should the emergency tenure precedent be written into law — or expunged from the record entirely?",
    left: {
      label: 'Expunge the precedent',
      preview: 'Treat it as an exception',
      effects: { senate: 8, military: -5 },
    },
    right: {
      label: 'Codify it into law',
      preview: 'Make it permanent',
      effects: { senate: -6, military: 9 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: ['rebel'],
    objectiveGlyph: false,
  },

  // ── ARC CARDS — PERFECT BALANCE (perfect_balance objective) ──────────────
  {
    id: 'balance_committee',
    character: 'Joint Committee',
    race: 'human',
    title: 'All-Faction Committee',
    scenario:
      "For the first time in four sessions an all-faction committee is convening. They've asked you to chair — your track record of balance is the only reason all four factions agreed. Each has submitted different terms.",
    left: {
      label: 'Propose equal concessions',
      preview: 'Everyone gives a little',
      effects: { senate: 3, military: 3, trade: 3, coalition: 3 },
    },
    right: {
      label: 'Prioritize the weakest faction',
      preview: 'Shore up the most vulnerable',
      effects: { coalition: 8, trade: -5, military: -4 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: ['perfect_balance'],
    objectiveGlyph: false,
  },
  {
    id: 'balance_deadlock',
    character: 'Emergency Session',
    race: 'human',
    title: 'CRISIS — Constitutional Deadlock',
    scenario:
      'All four factions have filed incompatible motions simultaneously. If none pass, the Assembly is in constitutional deadlock. A compromise framework will damage every faction slightly — but prevent collapse.',
    left: {
      label: 'Force the compromise',
      preview: 'Controlled damage across the board',
      effects: { senate: -4, military: -3, trade: -3, coalition: -4 },
    },
    right: {
      label: 'Back the dominant faction',
      preview: 'One winner, three very angry losers',
      effects: { senate: 10, military: -6, trade: -6, coalition: -6 },
    },
    category: 'crisis',
    requiredFlags: [],
    requiredLegacyFlags: ['perfect_balance'],
    objectiveGlyph: false,
  },

  // ── ARC CARDS — COALITION INNER CIRCLE (alien_ally objective) ────────────
  {
    id: 'coalition_observer',
    character: 'Elder Harumek',
    race: 'dulmak',
    title: "Dul'mak Inner Council",
    scenario:
      "You have been formally invited as observer to the Dul'mak inner council — the first non-coalition representative in their history. Senate Intelligence wants a full debrief. The Dul'mak would consider it a betrayal.",
    left: {
      label: 'Decline the debrief',
      preview: 'Honor the invitation',
      effects: { coalition: 9, senate: -7 },
    },
    right: {
      label: 'Submit a partial report',
      preview: 'Serve two masters imperfectly',
      effects: { senate: 6, coalition: -5 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: ['alien_ally'],
    objectiveGlyph: false,
  },
  {
    id: 'coalition_route',
    character: 'Broker Vas-Selith',
    race: 'serathi',
    title: 'Coalition–Trade Liaison',
    scenario:
      "The inner council has revealed a Serathi route that bypasses coalition customs — legally ambiguous, economically significant. They're asking you to table a motion to close it. The Trade League will know who filed it.",
    left: {
      label: 'Table the motion',
      preview: 'Side with the coalition',
      effects: { coalition: 9, trade: -8, senate: -3 },
    },
    right: {
      label: 'Inform the Trade League',
      preview: 'A quiet tip-off',
      effects: { trade: 7, coalition: -9 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: ['alien_ally'],
    objectiveGlyph: false,
  },

  // ── ADDITIONAL BASE CARDS ─────────────────────────────────────────────────
  {
    id: 'press_briefing',
    character: 'Chief of Staff Renne',
    race: 'human',
    title: 'Senate Press Office',
    scenario:
      "The press has a story about military overreach in the outer systems. Your office can offer them a bigger one — Trade League price manipulation — and bury it. Or you let the military story run.",
    left: {
      label: 'Let the military story run',
      preview: 'Nothing to hide here',
      effects: { military: -6, senate: 5, trade: 3 },
    },
    right: {
      label: 'Redirect to Trade League',
      preview: 'Give them a better headline',
      effects: { trade: -7, military: 5, senate: -3 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'colonial_petition',
    character: 'Governor Thess',
    race: 'human',
    title: 'Outer Colony Governor',
    scenario:
      "Six outer colonies have jointly petitioned for Senate representation. The Trade League opposes — it would dilute their voting bloc. The Coalition supports it. You are the committee chair.",
    left: {
      label: 'Advance the petition',
      preview: 'Expand representation',
      effects: { coalition: 6, senate: 4, trade: -7 },
    },
    right: {
      label: 'Defer indefinitely',
      preview: 'Keep the status quo',
      effects: { trade: 6, senate: -4, coalition: -5 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'military_parade',
    character: 'Marshal Vor',
    race: 'kravan',
    title: 'Assembly Marshal',
    scenario:
      "The Military wants to hold a joint-species parade through the Capitol district — a show of unified force. The Coalition calls it a provocation. The Trade League wants to sell the broadcast rights.",
    left: {
      label: 'Approve the parade',
      preview: 'A show of strength',
      effects: { military: 7, trade: 4, coalition: -7 },
    },
    right: {
      label: 'Cancel the parade',
      preview: 'Avoid the provocation',
      effects: { coalition: 6, military: -6, senate: 3 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'veth_census',
    character: "Registrar Ku'val",
    race: 'veth',
    title: 'Veth Census Authority',
    scenario:
      "A new census methodology would reclassify three Dul'mak worlds as 'contested territory,' reducing Coalition voting weight for a decade. The Veth drafted it. The Senate must ratify or reject.",
    left: {
      label: 'Reject the methodology',
      preview: "Protect the Dul'mak standing",
      effects: { coalition: 7, senate: -5, trade: 3 },
    },
    right: {
      label: 'Ratify it',
      preview: 'Let the numbers stand',
      effects: { senate: 6, coalition: -8, trade: 4 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'refugee_ship',
    character: 'Captain Dael',
    race: 'human',
    title: 'Coalition Transport',
    scenario:
      "A coalition refugee transport has entered Military-controlled space without clearance. The fleet is demanding it turn back. The Coalition says turning back means their deaths. You have six hours.",
    left: {
      label: 'Order the fleet to stand down',
      preview: 'Let the ship through',
      effects: { coalition: 8, military: -7 },
    },
    right: {
      label: 'Uphold Military jurisdiction',
      preview: 'Enforce the boundary',
      effects: { military: 7, coalition: -9, senate: -3 },
    },
    category: 'crisis',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'serathi_diplomat',
    character: 'Consul Ael',
    race: 'serathi',
    title: 'Serathi Diplomatic Consul',
    scenario:
      "The Serathi want to establish a permanent diplomatic mission inside the Senate building — the first non-human office in its history. The Military considers it a security risk. The Coalition considers it precedent.",
    left: {
      label: 'Approve the mission',
      preview: 'Open the doors',
      effects: { trade: 7, coalition: 4, military: -6 },
    },
    right: {
      label: 'Deny the request',
      preview: 'Maintain the tradition',
      effects: { military: 5, senate: 4, trade: -7, coalition: -4 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'black_budget',
    character: 'Director Senne',
    race: 'human',
    title: 'Military Intelligence',
    scenario:
      "Military Intelligence is requesting a black-budget line item — classified even from the Senate Finance Committee. They say it concerns a Pale signal intercept. They will not say more.",
    left: {
      label: 'Refuse the black budget',
      preview: 'No unaccountable spending',
      effects: { senate: 7, military: -7 },
    },
    right: {
      label: 'Approve it quietly',
      preview: 'Trust the intelligence community',
      effects: { military: 8, senate: -6, coalition: -3 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'dulmak_monument',
    character: "Speaker Vel",
    race: 'dulmak',
    title: "Dul'mak Cultural Delegate",
    scenario:
      "The Dul'mak have requested Senate grounds for a monument to their dead from the border conflicts. The Military objects to the proposed location. The Trade League is offering to fund it — at a naming price.",
    left: {
      label: 'Approve the original location',
      preview: "Honor the Dul'mak request",
      effects: { coalition: 7, military: -5, trade: -3 },
    },
    right: {
      label: 'Accept the Trade League offer',
      preview: 'Funded, but compromised',
      effects: { trade: 5, coalition: -5, senate: -3 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'emergency_session',
    character: 'Senate Speaker Havel',
    race: 'human',
    title: 'Senate Speaker',
    scenario:
      "A senator has died mid-session — cause unknown, circumstances disputed. The Military wants the session suspended and the chamber sealed for investigation. The Coalition believes it was an assassination and demands an open inquiry.",
    left: {
      label: 'Suspend the session',
      preview: 'Cooperate with Military security',
      effects: { military: 7, senate: -4, coalition: -5 },
    },
    right: {
      label: 'Demand an open inquiry',
      preview: 'Transparency over security',
      effects: { coalition: 7, senate: 3, military: -7 },
    },
    category: 'crisis',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'trade_monopoly',
    character: 'Director Maas',
    race: 'human',
    title: 'Trade League Director',
    scenario:
      "The Trade League is requesting exclusive transit rights through the Kra'van corridor — effectively a monopoly on outer system commerce. They're offering Senate infrastructure funding in exchange.",
    left: {
      label: 'Refuse the exclusivity',
      preview: 'Keep the corridor open',
      effects: { trade: -7, senate: 4, coalition: 5 },
    },
    right: {
      label: 'Grant the rights',
      preview: 'Take the funding',
      effects: { trade: 9, senate: 4, coalition: -7, military: -4 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'veth_arbiter2',
    character: "High Arbiter Zen'veth",
    race: 'veth',
    title: 'Veth Supreme Arbiter',
    scenario:
      "The Veth Supreme Arbiter has ruled that three recent Senate resolutions violated the Foundational Charter. The Military says the rulings are politically motivated. The Senate must decide whether to appeal or comply.",
    left: {
      label: 'Comply with the rulings',
      preview: 'Respect the judiciary',
      effects: { senate: 8, military: -6 },
    },
    right: {
      label: 'Appeal — and suspend enforcement',
      preview: 'Fight the ruling',
      effects: { military: 6, senate: -8, coalition: -3 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'kravan_treaty',
    character: "General Veth Kra'van",
    race: 'kravan',
    title: "Kra'van High Command",
    scenario:
      "A bilateral non-aggression treaty with the Kra'van separatist faction is on the table. The Senate supports it. The Trade League is opposed — the treaty would close a corridor they currently profit from. The Military is divided.",
    left: {
      label: 'Support the treaty',
      preview: 'Take the peace',
      effects: { senate: 7, coalition: 5, trade: -6 },
    },
    right: {
      label: 'Block the treaty',
      preview: 'Keep the corridor open',
      effects: { trade: 7, military: 4, senate: -6, coalition: -4 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // ── STORY CHAINS ─────────────────────────────────────────────────────────
  // Multi-card narrative chains. Each card sets a flag that unlocks the next.
  // Trigger cards have empty requiredFlags and start the chain on one or both
  // choices. Wrap-up cards use effects: {} — no meter impact, pure closure.

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAIN A: THE CEASEFIRE MISSION  (10 cards)
  // flag chain: ceasefire_deployed → ceasefire_briefed → ceasefire_crossed
  //           → ceasefire_in_talks → ceasefire_leverage → ceasefire_concluded
  //           → ceasefire_fallout → ceasefire_debriefed → ceasefire_over → end
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'chain_ceasefire_offer',
    character: 'General Corvath',
    race: 'human',
    title: 'Joint Operations Command',
    scenario:
      "The front line on the Kra'van border has collapsed into civilian displacement. General Corvath needs a Senate envoy — someone without a uniform the separatists will actually talk to. He's asking for you personally.",
    left: {
      label: 'Decline the mission',
      preview: "The Senate shouldn't be at the front",
      effects: { senate: 5, military: -4 },
    },
    right: {
      label: 'Accept the envoy role',
      preview: 'Go to the front',
      effects: { military: 5, coalition: 4 },
      flags: ['ceasefire_deployed'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_briefing',
    character: 'Intelligence Analyst Moth',
    race: 'human',
    title: 'Senate Intelligence Division',
    scenario:
      "Pre-departure briefing. The analyst pauses on slide six: the separatists' weapons caches include Serathi-manufactured munitions — trade-embargoed, theoretically impossible to have. She says the Trade League may be fuelling both sides. Do you take this up the chain before you leave?",
    left: {
      label: 'Flag it to Military before departure',
      preview: 'Let them deal with it',
      effects: { military: 4, trade: -5 },
      flags: ['ceasefire_briefed'],
    },
    right: {
      label: 'File it and say nothing yet',
      preview: "Don't complicate the mission",
      effects: { trade: 3, coalition: 3 },
      flags: ['ceasefire_briefed'],
    },
    category: 'standard',
    requiredFlags: ['ceasefire_deployed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_border',
    character: 'Checkpoint Commander Vel',
    race: 'human',
    title: 'Military Border Checkpoint',
    scenario:
      "The crossing point into contested territory. The checkpoint commander refuses to clear you — your mission authorisation codes haven't come through yet, and standing orders say no Senate personnel beyond this line without them. Corvath isn't answering.",
    left: {
      label: 'Pull rank — override the checkpoint',
      preview: 'The mission can\'t wait for paperwork',
      effects: { senate: 5, military: -4 },
      flags: ['ceasefire_crossed'],
    },
    right: {
      label: 'Wait for the codes to arrive',
      preview: 'Follow the protocol',
      effects: { military: 4, senate: -3 },
      flags: ['ceasefire_crossed'],
    },
    category: 'standard',
    requiredFlags: ['ceasefire_briefed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_field',
    character: 'Commander Thek',
    race: 'kravan',
    title: "Kra'van Field Commander",
    scenario:
      "The front is worse than any briefing described. Thousands displaced, no humanitarian corridor. Commander Thek agrees to talk — but only if you dismiss your military escort and meet in the contested zone. Alone.",
    left: {
      label: 'Refuse — negotiate from the perimeter',
      preview: 'Some lines stay in place',
      effects: { military: 5, coalition: -7 },
      flags: ['ceasefire_in_talks'],
    },
    right: {
      label: 'Dismiss the escort and cross',
      preview: 'Show them you mean it',
      effects: { coalition: 9, military: -7 },
      flags: ['ceasefire_in_talks'],
    },
    category: 'crossfire',
    requiredFlags: ['ceasefire_crossed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_confession',
    character: 'Commander Thek',
    race: 'kravan',
    title: "Kra'van Field Commander",
    scenario:
      "With the escort gone, Thek speaks plainly. The separatist movement didn't start over territory. It started because of a massacre — twenty-two Kra'van civilians killed in a border incident eighteen months ago, classified and buried by Military Command. He hands you a data chip. He says no one else has this.",
    left: {
      label: 'Keep it confidential — use it in talks',
      preview: 'Leverage, not exposure',
      effects: { coalition: 5, senate: -4 },
      flags: ['ceasefire_leverage'],
    },
    right: {
      label: 'Promise to take it before the full Senate',
      preview: 'The truth deserves a hearing',
      effects: { senate: 6, coalition: 3, military: -6 },
      flags: ['ceasefire_leverage'],
    },
    category: 'crossfire',
    requiredFlags: ['ceasefire_in_talks'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_terms',
    character: 'Commander Thek',
    race: 'kravan',
    title: "CRISIS — Ceasefire Terms",
    scenario:
      "The terms are on the table: recognition of the Veth'sol moon as sovereign Kra'van territory, and a public acknowledgement of the massacre. General Corvath is on an open channel telling you to walk. The Coalition delegation is watching in total silence.",
    left: {
      label: 'Reject — walk away',
      preview: 'The ceasefire fails at dawn',
      effects: { military: 9, coalition: -10, senate: -4 },
      flags: ['ceasefire_concluded'],
    },
    right: {
      label: 'Take the terms back to the Senate',
      preview: 'Ceasefire holds — for now',
      effects: { coalition: 10, military: -8, senate: 5 },
      flags: ['ceasefire_concluded'],
    },
    category: 'crisis',
    requiredFlags: ['ceasefire_leverage'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_sabotage',
    character: 'Pilot Renner',
    race: 'human',
    title: 'Senate Transport',
    scenario:
      "On the return flight, your pilot reports the navigation system was remotely tampered with during your stay at the front. Someone tried to bring you down over contested airspace. Corvath says it was separatist sabotage. Thek sent you a single-line message: 'It wasn't us.'",
    left: {
      label: 'File an official report',
      preview: 'Put it on the record',
      effects: { senate: 6, military: -4 },
      flags: ['ceasefire_fallout'],
    },
    right: {
      label: 'Say nothing — escalating this ends the ceasefire',
      preview: 'Absorb the hit quietly',
      effects: { military: 4, senate: -4 },
      flags: ['ceasefire_fallout'],
    },
    category: 'standard',
    requiredFlags: ['ceasefire_concluded'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_hearing',
    character: 'Committee Chair Laseth',
    race: 'veth',
    title: 'Senate Foreign Affairs Committee',
    scenario:
      "The Foreign Affairs Committee has called you to give a full account of the mission. They already have Corvath's version. Three committee members have copies of the classified massacre report. The Chair is looking at you with an expression you can't read.",
    left: {
      label: 'Give the sanitised account',
      preview: 'Keep the leverage private',
      effects: { senate: 5, military: 4, coalition: -5 },
      flags: ['ceasefire_debriefed'],
    },
    right: {
      label: 'Tell them everything, including the massacre',
      preview: 'Let the committee decide',
      effects: { senate: -5, coalition: 8, military: -6 },
      flags: ['ceasefire_debriefed'],
    },
    category: 'crossfire',
    requiredFlags: ['ceasefire_fallout'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_aftermath',
    character: 'Diplomatic Aide Sura',
    race: 'human',
    title: 'Office of the Senate Envoy',
    scenario:
      "Six weeks later. The ceasefire is holding by three threads. Thek has requested you personally oversee the first prisoner exchange. Corvath has formally objected to your continued involvement. The Coalition is asking whether the Senate will acknowledge the massacre publicly.",
    left: {
      label: 'Step back — hand it to the formal diplomatic corps',
      preview: 'You have done your part',
      effects: { senate: 6, military: 4, coalition: -4 },
      flags: ['ceasefire_over'],
    },
    right: {
      label: 'Stay involved — see the exchange through',
      preview: 'Finish what you started',
      effects: { coalition: 8, senate: -4, military: -5 },
      flags: ['ceasefire_over'],
    },
    category: 'standard',
    requiredFlags: ['ceasefire_debriefed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_wrapup',
    character: 'General Corvath',
    race: 'human',
    title: 'Joint Operations Command',
    scenario:
      "Corvath passes you in the corridor without making eye contact. The ceasefire is on page twelve of this morning's Assembly digest. The massacre report is listed under 'pending review.' The prisoner exchange happened. No cameras.",
    left: {
      label: '"Worth every step."',
      preview: '',
      effects: {},
    },
    right: {
      label: '"Next time, I\'m sending someone else."',
      preview: '',
      effects: {},
    },
    category: 'standard',
    requiredFlags: ['ceasefire_over'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAIN B: THE DOWNED TRANSPORT  (10 cards)
  // flag chain: ship_downed → shelter_resolved → shelter_settled → wreck_handled
  //           → signal_sent → patrol_handled → storm_survived → ship_rescued
  //           → ship_report_filed → end
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'chain_ship_distress',
    character: 'Pilot Denna',
    race: 'human',
    title: 'Senate Transport Pilot',
    scenario:
      "Debris from an unlogged engagement tears through the hull. You are going down on an uncharted moon. The comms array has one transmission left. Denna is looking at you.",
    left: {
      label: 'Military emergency channel',
      preview: 'Fast rescue, military terms',
      effects: { military: 5, coalition: -3 },
      flags: ['ship_downed'],
    },
    right: {
      label: 'Open civilian broadcast',
      preview: 'Anyone listening',
      effects: { trade: 3, coalition: 4, military: -3 },
      flags: ['ship_downed'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_surface',
    character: 'Elder Sorath',
    race: 'dulmak',
    title: "Unregistered Dul'mak Settlement",
    scenario:
      "You have found shelter in a cave network. You are not alone. An unregistered Dul'mak community has lived here for eleven years — off every census, invisible to the Coalition itself. They survived the border conflict by disappearing entirely. They will hide you if you promise this settlement stays that way.",
    left: {
      label: 'Promise silence',
      preview: 'Let them stay hidden',
      effects: { coalition: 8, senate: -5 },
      flags: ['shelter_resolved'],
    },
    right: {
      label: 'Tell them you are legally bound to disclose',
      preview: 'The law is the law',
      effects: { senate: 5, coalition: -5 },
      flags: ['shelter_resolved'],
    },
    category: 'crossfire',
    requiredFlags: ['ship_downed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_trust',
    character: "Yura",
    race: 'dulmak',
    title: "Elder's Daughter",
    scenario:
      "Elder Sorath's daughter is not convinced. She has seen Senate officials before. She wants to question you herself, without the elder present. She will decide whether you are safe to keep here. The elder cannot stop her.",
    left: {
      label: 'Submit to her questioning',
      preview: 'Let her judge you',
      effects: { coalition: 5, senate: -3 },
      flags: ['shelter_settled'],
    },
    right: {
      label: 'Invoke your Senate status',
      preview: 'You are not here to be interrogated',
      effects: { senate: 4, coalition: -6 },
      flags: ['shelter_settled'],
    },
    category: 'standard',
    requiredFlags: ['shelter_resolved'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_wreck',
    character: 'Pilot Denna',
    race: 'human',
    title: 'Senate Transport Pilot',
    scenario:
      "Denna is still functional, barely. She has located the crash site. The classified documents you were carrying are in a sealed case — probably intact. If anyone finds the wreck before you do, those documents become their property under salvage law.",
    left: {
      label: 'Go to the wreck and destroy the documents',
      preview: 'Some things stay buried',
      effects: { senate: 5, trade: -4 },
      flags: ['wreck_handled'],
    },
    right: {
      label: 'Let the settlement help you retrieve everything',
      preview: 'More hands, more risk',
      effects: { coalition: 4, trade: 3, senate: -3 },
      flags: ['wreck_handled'],
    },
    category: 'crossfire',
    requiredFlags: ['shelter_settled'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_signal',
    character: 'Yura',
    race: 'dulmak',
    title: "Elder's Daughter",
    scenario:
      "Yura has found a secondary comms relay node buried in the cave wall — old military hardware, still functional. It can reach two frequencies: military emergency bands, or the commercial trade routes. It will broadcast your position.",
    left: {
      label: 'Broadcast on military emergency',
      preview: 'Fastest path to rescue',
      effects: { military: 5, coalition: -3 },
      flags: ['signal_sent'],
    },
    right: {
      label: 'Broadcast on trade routes',
      preview: 'Less controlled, slower',
      effects: { trade: 4, coalition: 3, military: -3 },
      flags: ['signal_sent'],
    },
    category: 'standard',
    requiredFlags: ['wreck_handled'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_patrol',
    character: 'Pilot Denna',
    race: 'human',
    title: 'Senate Transport Pilot',
    scenario:
      "A military surveillance drone is passing overhead — low, slow, systematic. It will cover this area in the next four minutes. If it scans the cave mouth it will detect life signs. The settlement has never been found in eleven years because they know how to go still. They are waiting for your decision.",
    left: {
      label: 'Wave it down — get rescued now',
      preview: 'End this today',
      effects: { military: 4, coalition: -7 },
      flags: ['patrol_handled'],
    },
    right: {
      label: 'Stay hidden with the settlement',
      preview: 'Protect what they built here',
      effects: { coalition: 7, military: -5 },
      flags: ['patrol_handled'],
    },
    category: 'crossfire',
    requiredFlags: ['signal_sent'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_storm',
    character: 'Elder Sorath',
    race: 'dulmak',
    title: "Dul'mak Settlement Elder",
    scenario:
      "A planetary storm system moves in. Two days minimum, possibly four. No one is going anywhere. The settlement goes about its life. Elder Sorath invites you to eat with them. He says: you can spend the time observing, or you can spend it listening. He says these are different things.",
    left: {
      label: 'Observe — document what you can',
      preview: 'Information has value',
      effects: { senate: 5, coalition: -5 },
      flags: ['storm_survived'],
    },
    right: {
      label: 'Listen — set the recorder down',
      preview: 'Some things are not for the record',
      effects: { coalition: 7, senate: -4 },
      flags: ['storm_survived'],
    },
    category: 'standard',
    requiredFlags: ['patrol_handled'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_rescue',
    character: 'Recovery Agent Fell',
    race: 'human',
    title: 'CRISIS — Rescue Complications',
    scenario:
      "The rescue vessel arrives on day three of the storm's clearing. A Trade League salvage crew arrived twelve hours earlier and has already catalogued the wreck — including the location of the cave system. They are citing deep-space salvage law and showing no interest in leaving.",
    left: {
      label: 'Cooperate — get out, let them have the site',
      preview: 'You are done here',
      effects: { trade: 8, senate: -6, military: -3 },
      flags: ['ship_rescued'],
    },
    right: {
      label: 'Invoke Senate privilege — clear the site',
      preview: 'The settlement stays hidden',
      effects: { senate: 7, military: 4, trade: -9 },
      flags: ['ship_rescued'],
    },
    category: 'crisis',
    requiredFlags: ['storm_survived'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_report',
    character: 'Senate Records Office',
    race: 'human',
    title: 'Incident Report Filing',
    scenario:
      "Back in the Capitol. The incident report form has a field for all persons and settlements encountered during the emergency. The settlement has no legal status. Filling it in accurately creates a paper trail. Leaving it blank is technically a falsification.",
    left: {
      label: 'File the settlement in the report',
      preview: 'The record is honest',
      effects: { senate: 5, coalition: -7 },
      flags: ['ship_report_filed'],
    },
    right: {
      label: 'Leave that field blank',
      preview: 'What the record doesn\'t know',
      effects: { coalition: 8, senate: -5 },
      flags: ['ship_report_filed'],
    },
    category: 'standard',
    requiredFlags: ['ship_rescued'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ship_wrapup',
    character: 'Elder Sorath',
    race: 'dulmak',
    title: "Dul'mak Settlement Elder",
    scenario:
      "Six months later, a message arrives through a channel you don't recognise. No text. Just a small attached image: the cave mouth, the settlement intact, the storm-cleared sky above it.",
    left: {
      label: '"I hope it stays that way."',
      preview: '',
      effects: {},
    },
    right: {
      label: '"Someone will find it eventually."',
      preview: '',
      effects: {},
    },
    category: 'standard',
    requiredFlags: ['ship_report_filed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAIN C: THE FUGITIVE SENATOR  (10 cards)
  // flag chain: gone_underground → fugitive_sheltered → fugitive_mobile
  //           → fugitive_endgame → fugitive_tail_handled → fugitive_ally
  //           → fugitive_cleared → fugitive_inquiry_done → fugitive_done → end
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'chain_fugitive_warning',
    character: 'Unknown Sender',
    race: 'human',
    title: 'Encrypted Transmission',
    scenario:
      "An encrypted message arrives through a channel you have never used before. It contains your name, three surveillance photographs taken inside the Senate building this week, and one sentence: \"They know what you saw. Leave tonight or don't leave at all.\"",
    left: {
      label: 'Ignore it — probably a scare tactic',
      preview: 'Call the bluff',
      effects: { senate: 3, trade: -2 },
    },
    right: {
      label: 'Take it seriously and disappear tonight',
      preview: 'Go underground',
      effects: { senate: -5, military: -3, trade: -3 },
      flags: ['gone_underground'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_safehouse',
    character: 'Aide Voran',
    race: 'human',
    title: 'Former Senate Aide',
    scenario:
      "You reach a safehouse from a list you memorised years ago. It is already occupied — a former Senate aide who disappeared from public record eight months ago. He is not surprised to see you. He says you are the third senator to come through this week.",
    left: {
      label: 'Trust him — he has more information than you',
      preview: 'He has been here longer',
      effects: { coalition: 5, senate: -4 },
      flags: ['fugitive_sheltered'],
    },
    right: {
      label: 'Take the space and ask him to leave',
      preview: 'You cannot afford witnesses',
      effects: { senate: 3, coalition: -4, military: -3 },
      flags: ['fugitive_sheltered'],
    },
    category: 'standard',
    requiredFlags: ['gone_underground'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_identity',
    character: 'Aide Voran',
    race: 'human',
    title: 'Former Senate Aide',
    scenario:
      "Moving through the city as yourself is impossible — your face is on every Senate identification system. Voran offers two options: a forged Senate maintenance pass from a source he will not name, or a blank civilian identity that will hold for two weeks but leave no paper trail.",
    left: {
      label: 'Take the forged Senate pass',
      preview: 'More access, more exposure',
      effects: { senate: -5, trade: 5 },
      flags: ['fugitive_mobile'],
    },
    right: {
      label: 'Take the civilian blank',
      preview: 'Invisible, for now',
      effects: { trade: -3, coalition: 4 },
      flags: ['fugitive_mobile'],
    },
    category: 'standard',
    requiredFlags: ['fugitive_sheltered'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_contact',
    character: 'Broker Zeth',
    race: 'human',
    title: 'Underground Intermediary',
    scenario:
      "A broker finds you within 24 hours — someone who knew exactly where to look. He can provide a new identity, off-world transport, and three weeks of cover. His price: a copy of the Senate's classified personnel registry. He says it is to protect other targets. You have no way to verify that.",
    left: {
      label: 'Refuse — find another way',
      preview: 'The registry stays sealed',
      effects: { senate: 3, coalition: 5, trade: -6 },
      flags: ['fugitive_endgame'],
    },
    right: {
      label: 'Hand over the registry',
      preview: 'You need the cover more than the secret',
      effects: { senate: -9, trade: 7 },
      flags: ['fugitive_endgame'],
    },
    category: 'crossfire',
    requiredFlags: ['fugitive_mobile'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_tail',
    character: 'Unknown',
    race: 'human',
    title: 'Surveillance Encounter',
    scenario:
      "Someone is following you. Not subtly. Three blocks, two transit stops — they are not trying to hide it. Either they are sloppy, or they want you to know. Voran says it could be the people who sent the original message, checking whether you ran. Or it could be Senate Security, which has already been noticed.",
    left: {
      label: 'Turn and confront them',
      preview: 'Find out who they are',
      effects: { military: 5, senate: -4 },
      flags: ['fugitive_tail_handled'],
    },
    right: {
      label: 'Lose them in the transit system',
      preview: 'Disappear again',
      effects: { trade: -3, coalition: 5 },
      flags: ['fugitive_tail_handled'],
    },
    category: 'standard',
    requiredFlags: ['fugitive_endgame'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_ally',
    character: 'Senator Halvane',
    race: 'human',
    title: 'Former Colleague',
    scenario:
      "A message through a mutual contact: Senator Halvane wants to meet. You served together for three sessions. She says she has been watching what happened and she does not believe the official version. She can get you back into the building through an entrance not covered by Security logs.",
    left: {
      label: 'Accept her help',
      preview: 'Trust the old alliance',
      effects: { senate: 5, coalition: 4, military: -4 },
      flags: ['fugitive_ally'],
    },
    right: {
      label: 'Decline — you cannot put her at risk',
      preview: 'Handle it alone',
      effects: { senate: -3, coalition: 3 },
      flags: ['fugitive_ally'],
    },
    category: 'standard',
    requiredFlags: ['fugitive_tail_handled'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_surface',
    character: 'Marshal Senne',
    race: 'human',
    title: 'CRISIS — Senate Security',
    scenario:
      "Marshal Senne finds you before you can find your own way back. She offers exactly two options: return publicly and face a formal inquiry into your disappearance, or come back through a private arrangement that keeps you in your seat — in exchange for a favour, terms to be named later.",
    left: {
      label: 'Return publicly — face the inquiry',
      preview: 'The light is cleaner',
      effects: { senate: 8, military: 4, trade: -5 },
      flags: ['fugitive_cleared'],
    },
    right: {
      label: 'Take the quiet return',
      preview: 'Owe the Marshal',
      effects: { senate: -7, military: 3, trade: 5 },
      flags: ['fugitive_cleared'],
    },
    category: 'crisis',
    requiredFlags: ['fugitive_ally'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_inquiry',
    character: 'Ethics Committee Chair',
    race: 'veth',
    title: 'Senate Ethics Committee',
    scenario:
      "The inquiry is formal, public, and uncomfortable. The committee has your movements for the three days underground, minus the hours they cannot account for. They are asking about those hours specifically. The aide Voran has not surfaced. No one has mentioned the broker.",
    left: {
      label: 'Cooperate fully — give them everything',
      preview: 'End it cleanly',
      effects: { senate: 7, trade: -4 },
      flags: ['fugitive_inquiry_done'],
    },
    right: {
      label: 'Give partial cooperation — protect the gaps',
      preview: 'Some things stay underground',
      effects: { senate: -4, trade: 4, military: 3 },
      flags: ['fugitive_inquiry_done'],
    },
    category: 'standard',
    requiredFlags: ['fugitive_cleared'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_reputation',
    character: 'Press Liaison Thove',
    race: 'human',
    title: 'Senate Communications Office',
    scenario:
      "The press has decided what the story means. The question is which version you let stand: the 'maverick senator who went underground to avoid a politically motivated threat' reads well in the outer systems. The 'senator who fled at the first sign of danger' is the other version. Both are circulating.",
    left: {
      label: "Embrace the maverick framing",
      preview: 'Let them build the myth',
      effects: { senate: -5, coalition: 8, trade: -4 },
      flags: ['fugitive_done'],
    },
    right: {
      label: 'Push back — demand a measured account',
      preview: 'The truth is less dramatic',
      effects: { senate: 6, coalition: -3 },
      flags: ['fugitive_done'],
    },
    category: 'standard',
    requiredFlags: ['fugitive_inquiry_done'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_wrapup',
    character: 'Marshal Senne',
    race: 'human',
    title: 'Senate Security',
    scenario:
      "Every year, on the anniversary of the night you left, a bottle of synthetic Serathi wine arrives at your office. No note. The Marshal's office is three floors down. You have never mentioned it and neither has she.",
    left: {
      label: '"I\'d do it again."',
      preview: '',
      effects: {},
    },
    right: {
      label: '"I hope I never have to."',
      preview: '',
      effects: {},
    },
    category: 'standard',
    requiredFlags: ['fugitive_done'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAIN D: THE ASSASSINATION CONTRACT  (10 cards)
  // flag chain: threat_known → assassin_lockdown → assassin_intel
  //           → assassin_dealt_with → assassin_client_known → assassin_motive
  //           → assassin_case_closed → assassin_aftermath → assassin_ghost → end
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'chain_assassin_warning',
    character: 'Bodyguard Teveth',
    race: 'human',
    title: 'Senate Security Detail',
    scenario:
      "Your security detail has intercepted chatter about a contract taken out on your life. Source unknown. Timeline uncertain. The assassin is believed to already be in the building. Teveth is recommending immediate evacuation.",
    left: {
      label: 'Evacuate immediately',
      preview: 'Leave the session',
      effects: { senate: -5, military: 4 },
      flags: ['threat_known'],
    },
    right: {
      label: 'Stay — you will not be driven out',
      preview: 'Hold your ground',
      effects: { senate: 6, military: -4 },
      flags: ['threat_known'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_lockdown',
    character: 'Security Director Orel',
    race: 'human',
    title: 'Capitol Security Division',
    scenario:
      "Capitol Security has declared a soft lockdown — no exits, no new entries, all sessions suspended. The Director wants you in a secure room for the duration. The rest of the Senate is already there. You could comply, or you could stay in the open and draw the contractor out.",
    left: {
      label: 'Comply — go to the secure room',
      preview: 'Let Security do its job',
      effects: { military: 5, senate: -3 },
      flags: ['assassin_lockdown'],
    },
    right: {
      label: 'Stay visible — make yourself a target',
      preview: 'Force their hand',
      effects: { senate: 5, military: -5 },
      flags: ['assassin_lockdown'],
    },
    category: 'standard',
    requiredFlags: ['threat_known'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_informant',
    character: 'Informant (unnamed)',
    race: 'human',
    title: 'Anonymous Contact',
    scenario:
      "During the lockdown a note is slipped under the secure room door. It claims to identify the person who placed the contract — and says the contractor is already second-guessing the job. The informant wants to meet in the archive corridor in ten minutes. This could be the break you need, or it could be the contractor's opening.",
    left: {
      label: 'Go to the meeting',
      preview: 'Take the risk',
      effects: { senate: 3, trade: -4 },
      flags: ['assassin_intel'],
    },
    right: {
      label: 'Ignore it — possible trap',
      preview: 'Trust nothing',
      effects: { military: 3, senate: 3 },
      flags: ['assassin_intel'],
    },
    category: 'crossfire',
    requiredFlags: ['assassin_lockdown'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_encounter',
    character: 'The Contractor',
    race: 'human',
    title: 'CRISIS — The Assassin',
    scenario:
      "The contractor contacts you directly — not with a weapon, but a message. They know who placed the order and they want out. They will name the client and cancel the contract — in exchange for safe passage off-planet and access to a Senate emergency account. They have twenty minutes before their handler checks in.",
    left: {
      label: 'Pay — take the name and let them go',
      preview: 'Buy the exit',
      effects: { senate: -5, trade: -5, military: 8 },
      flags: ['assassin_dealt_with'],
    },
    right: {
      label: 'Detain them and let Security handle it',
      preview: 'Do it properly',
      effects: { senate: 8, military: 6, trade: -4 },
      flags: ['assassin_dealt_with'],
    },
    category: 'crisis',
    requiredFlags: ['assassin_intel'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_client',
    character: 'Security Director Orel',
    race: 'human',
    title: 'Capitol Security Division',
    scenario:
      "The contractor's information checks out. The client is a name you recognise — not a faction operative, not foreign intelligence. A sitting senator. Someone you have voted with twelve times in the last two sessions. Orel is asking how you want to proceed.",
    left: {
      label: 'Confront the senator privately first',
      preview: 'Give them a chance to explain',
      effects: { senate: -5, trade: 5 },
      flags: ['assassin_client_known'],
    },
    right: {
      label: 'Take it straight to Senate Security formally',
      preview: 'No private conversations',
      effects: { senate: 7, trade: -6 },
      flags: ['assassin_client_known'],
    },
    category: 'crossfire',
    requiredFlags: ['assassin_dealt_with'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_motive',
    character: 'Senator (unnamed)',
    race: 'human',
    title: 'The Client',
    scenario:
      "The senator who ordered the contract meets with you. Their motive is not political. It is personal — a vote you cast four years ago that ended a project their family had spent a generation building. They are not sorry. They say they would do it again. They are also terrified.",
    left: {
      label: 'Use their fear as leverage',
      preview: 'Make them useful',
      effects: { senate: -4, trade: 6 },
      flags: ['assassin_motive_revealed'],
    },
    right: {
      label: 'Make the full motive public',
      preview: 'The Assembly deserves to know',
      effects: { senate: 5, coalition: 4, trade: -5 },
      flags: ['assassin_motive_revealed'],
    },
    category: 'standard',
    requiredFlags: ['assassin_client_known'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_resolution',
    character: 'Security Director Orel',
    race: 'human',
    title: 'CRISIS — Case Disposition',
    scenario:
      "Orel says the Director's office would prefer to close this quietly — the senator's family is connected, and a public trial would embarrass three factions simultaneously. He is not ordering you to let it go. He is informing you of the preference.",
    left: {
      label: 'Let them close it quietly',
      preview: 'Pick your battles',
      effects: { senate: 6, military: 4, trade: -3 },
      flags: ['assassin_case_closed'],
    },
    right: {
      label: 'Push for a full public hearing',
      preview: 'Nothing quiet about an assassination attempt',
      effects: { senate: -6, coalition: 7, military: -5 },
      flags: ['assassin_case_closed'],
    },
    category: 'crisis',
    requiredFlags: ['assassin_motive_revealed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_bodyguard',
    character: 'Bodyguard Teveth',
    race: 'human',
    title: 'Senate Security Detail',
    scenario:
      "Teveth requests reassignment. He does not give a reason. When you ask, he says only that he did not sign up to be close to someone this kind of attention follows. He is the best bodyguard you have ever had.",
    left: {
      label: 'Let Teveth go — respect the decision',
      preview: 'Some choices belong to other people',
      effects: { senate: -3, military: 4 },
      flags: ['assassin_aftermath'],
    },
    right: {
      label: 'Ask Teveth to stay',
      preview: 'Tell him it matters',
      effects: { senate: 4, military: -2, coalition: 3 },
      flags: ['assassin_aftermath'],
    },
    category: 'standard',
    requiredFlags: ['assassin_case_closed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_ghost',
    character: 'Bodyguard Teveth',
    race: 'human',
    title: 'Senate Security Detail',
    scenario:
      "Three months later. Teveth stops you in the corridor — whether he stayed or was reassigned, his network is still active. He says someone matching the contractor's description was photographed outside the Capitol's east entrance this morning. Could be nothing. Could be a second contract.",
    left: {
      label: 'Report it immediately to Security',
      preview: 'Do not wait this time',
      effects: { military: 5, senate: 3 },
      flags: ['assassin_ghost_handled'],
    },
    right: {
      label: 'Watch and wait — gather more information first',
      preview: 'See if it becomes something',
      effects: { senate: -3, coalition: 4, trade: -3 },
      flags: ['assassin_ghost_handled'],
    },
    category: 'standard',
    requiredFlags: ['assassin_aftermath'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_assassin_wrapup',
    character: 'Bodyguard Teveth',
    race: 'human',
    title: 'Senate Security Detail',
    scenario:
      "Teveth says the sighting was a coincidence. A maintenance worker with a similar build. Security confirmed it. You both pretend to believe it.",
    left: {
      label: '"Glad we got out of that."',
      preview: '',
      effects: {},
    },
    right: {
      label: '"I could\'ve taken them."',
      preview: '',
      effects: {},
    },
    category: 'standard',
    requiredFlags: ['assassin_ghost_handled'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAIN E: THE PALE SIGNAL  (8 cards — new)
  // flag chain: pale_signal_heard → pale_signal_traced → pale_signal_decoded
  //           → pale_signal_source → pale_signal_responded → pale_signal_exposed
  //           → pale_signal_concluded → end
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'chain_pale_signal',
    character: 'Systems Analyst Drev',
    race: 'human',
    title: 'Capitol Building Systems',
    scenario:
      "A low-frequency signal is being broadcast from somewhere inside the Capitol building. Not through any registered hardware. The analyst says it matches no known communication standard — except for one partial match in an eleven-year-old classified file about early Pale contact protocols. It has been running for seventy-two hours.",
    left: {
      label: 'Report it to Military Intelligence immediately',
      preview: 'Let the professionals handle it',
      effects: { military: 5, coalition: -3 },
    },
    right: {
      label: 'Begin a quiet personal investigation',
      preview: 'Before anyone else gets to it',
      effects: { coalition: 4, senate: -4 },
      flags: ['pale_signal_heard'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_pale_signal_trace',
    character: 'Systems Analyst Drev',
    race: 'human',
    title: 'Capitol Building Systems',
    scenario:
      "After three days of tracing, the signal source resolves to a single location: the Senate archive room, sub-level four. Access logs show it has not been entered in fourteen months. You have clearance. No one else needs to know you went.",
    left: {
      label: 'Bring forensic analysts with you',
      preview: 'Do this officially',
      effects: { senate: 4, military: 3 },
      flags: ['pale_signal_traced'],
    },
    right: {
      label: 'Go alone, after hours',
      preview: 'See it before anyone else does',
      effects: { coalition: 6, senate: -4 },
      flags: ['pale_signal_traced'],
    },
    category: 'standard',
    requiredFlags: ['pale_signal_heard'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_pale_signal_archive',
    character: 'Unknown',
    race: 'pale',
    title: 'Senate Archive Room — Sub-Level Four',
    scenario:
      "In the archive room you find a device you do not recognise. It is roughly palm-sized, geometric, and warm to the touch despite no visible power source. It is clearly the signal origin. It should not be here. The archive manifest has no record of it.",
    left: {
      label: 'Take it to the Science Division for analysis',
      preview: 'Find out what it is',
      effects: { trade: 3, military: 4 },
      flags: ['pale_signal_decoded'],
    },
    right: {
      label: 'Study it yourself first',
      preview: 'Look before you hand it over',
      effects: { coalition: 5, senate: -3 },
      flags: ['pale_signal_decoded'],
    },
    category: 'standard',
    requiredFlags: ['pale_signal_traced'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_pale_signal_name',
    character: 'Science Division Lead',
    race: 'human',
    title: 'Capitol Science Division',
    scenario:
      "The device's signal carries embedded data — not random noise, not a message. A name. Senator Arwen Lys, deceased. She served three sessions before dying in a shuttle accident seven years ago. She was the last sitting senator to formally acknowledge a Pale communication and request a response. That request was classified. You were not supposed to know it existed.",
    left: {
      label: 'Pull Lys\'s classified record',
      preview: 'Follow where the name leads',
      effects: { senate: 4, coalition: 3 },
      flags: ['pale_signal_source'],
    },
    right: {
      label: 'Take it to Senate Intelligence',
      preview: 'This is above your clearance level',
      effects: { senate: 5, military: 4, coalition: -5 },
      flags: ['pale_signal_source'],
    },
    category: 'crossfire',
    requiredFlags: ['pale_signal_decoded'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_pale_signal_contact',
    character: 'Unknown',
    race: 'pale',
    title: 'Pale Signal Origin',
    scenario:
      "Lys's classified record shows she attempted to initiate contact using a sequence she received in a prior signal. It failed — or so the record states. The device is still warm. The sequence is in the file. You are the only person in this room.",
    left: {
      label: 'Attempt the contact sequence',
      preview: 'See if it still works',
      effects: { coalition: 8, senate: -5 },
      flags: ['pale_signal_responded', 'pale_met'],
    },
    right: {
      label: 'Close the file and walk away',
      preview: 'Lys tried. It did not end well for her.',
      effects: { senate: 5, coalition: -3 },
      flags: ['pale_signal_responded'],
    },
    category: 'objective',
    requiredFlags: ['pale_signal_source'],
    requiredLegacyFlags: [],
    objectiveGlyph: true,
  },
  {
    id: 'chain_pale_signal_military',
    character: 'Colonel Harven',
    race: 'human',
    title: 'Military Intelligence Division',
    scenario:
      "Military Intelligence has been tracking the same signal independently for six weeks. Colonel Harven says they know you went to sub-level four. He wants a full debrief — the device, Lys's record, everything. He says it is a matter of galactic security. He says this pleasantly, which is worse.",
    left: {
      label: 'Brief him fully',
      preview: 'Give the military what it wants',
      effects: { military: 7, coalition: -6 },
      flags: ['pale_signal_exposed'],
    },
    right: {
      label: 'Give him the minimum and nothing else',
      preview: 'This does not belong to the military',
      effects: { coalition: 6, military: -7 },
      flags: ['pale_signal_exposed'],
    },
    category: 'crossfire',
    requiredFlags: ['pale_signal_responded'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_pale_signal_emissary',
    character: 'The Emissary',
    race: 'pale',
    title: 'CRISIS — Pale Response',
    scenario:
      "The Emissary is in your office. Not outside, not in the corridor — inside, in the chair across from your desk. No record of entry. No alarm. They say: you used the sequence. You are now in the record. They would like to know what you intended by it.",
    left: {
      label: 'Tell them what you were looking for',
      preview: 'Answer honestly',
      effects: { coalition: 9, senate: -6 },
      flags: ['pale_signal_concluded'],
    },
    right: {
      label: 'Demand they explain what they want from the Senate',
      preview: 'Ask the harder question',
      effects: { senate: 5, coalition: 4, military: -5 },
      flags: ['pale_signal_concluded'],
    },
    category: 'crisis',
    requiredFlags: ['pale_signal_exposed'],
    requiredLegacyFlags: [],
    objectiveGlyph: true,
  },
  {
    id: 'chain_pale_signal_wrapup',
    character: 'Systems Analyst Drev',
    race: 'human',
    title: 'Capitol Building Systems',
    scenario:
      "The signal stopped. Drev checks in to confirm it. He seems relieved. He asks if you found anything. You tell him the archive room was empty. He believes you. The device is gone — you checked this morning. Whatever it was, it left the same way it arrived.",
    left: {
      label: '"I knew it would end like this."',
      preview: '',
      effects: {},
    },
    right: {
      label: '"Good. I think."',
      preview: '',
      effects: {},
    },
    category: 'standard',
    requiredFlags: ['pale_signal_concluded'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAIN F: THE SERATHI CONSPIRACY  (8 cards — new)
  // flag chain: serathi_noticed → conspiracy_files → conspiracy_shell
  //           → conspiracy_dinner → conspiracy_threatened → conspiracy_joint
  //           → conspiracy_exposed → end
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'chain_conspiracy_tip',
    character: 'Anonymous',
    race: 'human',
    title: 'Encrypted Message',
    scenario:
      "An anonymous tip from an untraceable source: the Trade League has financial leverage over three sitting senators. Not bribery — something older and harder to prove. The tip includes a partial document trail and one sentence: 'Follow the Veth'an Holdings account.'",
    left: {
      label: 'Forward it to the Senate Ethics Committee',
      preview: 'Let the process handle it',
      effects: { senate: 5, trade: -4 },
    },
    right: {
      label: 'Investigate it yourself first',
      preview: 'Verify before you escalate',
      effects: { senate: -4, trade: -3 },
      flags: ['serathi_noticed'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_conspiracy_files',
    character: 'Senate Records Clerk',
    race: 'human',
    title: 'Financial Records Division',
    scenario:
      "You are trying to access Trade League campaign contribution filings from the last four sessions. Some of them require clearance you technically have but have never used. The clerk is noting the access request in the log. Every search here leaves a footprint.",
    left: {
      label: 'Access through official channels — logged',
      preview: 'Do it transparently',
      effects: { senate: 5, trade: -5 },
      flags: ['conspiracy_files'],
    },
    right: {
      label: 'Use a proxy to access it off-record',
      preview: 'Do it without the footprint',
      effects: { senate: -4, trade: 3 },
      flags: ['conspiracy_files'],
    },
    category: 'standard',
    requiredFlags: ['serathi_noticed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_conspiracy_shell',
    character: 'Forensic Accountant Vel',
    race: 'human',
    title: 'Independent Analyst',
    scenario:
      "The filings point to a shell company — Veth'an Holdings, registered in three separate jurisdictions, none of which require beneficial ownership disclosure. Vel says the structure is designed to be untraceable. She also says it took her four hours. She adds: someone built this to be found eventually, but not quickly.",
    left: {
      label: 'Follow the Holdings account trail',
      preview: 'Go further',
      effects: { trade: -3, senate: 4 },
      flags: ['conspiracy_shell'],
    },
    right: {
      label: 'Stop here and take what you have to the Senate',
      preview: 'This is already enough',
      effects: { senate: 6, trade: -6 },
      flags: ['conspiracy_shell'],
    },
    category: 'standard',
    requiredFlags: ['conspiracy_files'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_conspiracy_senator',
    character: 'Senator Drath',
    race: 'human',
    title: 'Trade-Aligned Senator',
    scenario:
      "One of the three compromised senators approaches you privately. He knows you have been looking at Veth'an Holdings. He says he did not come to threaten you — he came because he wants out and does not know how. He has been under leverage for six years. He will tell you everything if you can protect him.",
    left: {
      label: 'Hear him out — take his testimony',
      preview: 'He is your primary source',
      effects: { senate: 3, trade: -5 },
      flags: ['conspiracy_dinner'],
    },
    right: {
      label: 'Send him to the Ethics Committee with protection',
      preview: 'Handle it through the right channels',
      effects: { senate: 6, trade: -4 },
      flags: ['conspiracy_dinner'],
    },
    category: 'crossfire',
    requiredFlags: ['conspiracy_shell'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_conspiracy_envoy',
    character: 'Envoy Lissara',
    race: 'serathi',
    title: 'Serathi Senior Trade Envoy',
    scenario:
      "Senior Trade Envoy Lissara invites you to a private dinner. The invitation is warm, specific, and arrives forty-eight hours after you accessed the Holdings files. At the dinner she does not mention the investigation at all. She asks about your family, your constituency, your ambitions. She is very good at this.",
    left: {
      label: 'Play along — extract what you can',
      preview: 'Two can run a conversation',
      effects: { trade: 4, senate: -4 },
      flags: ['conspiracy_threatened'],
    },
    right: {
      label: 'Decline the next invitation — make it known you noticed',
      preview: 'Show them you understood the message',
      effects: { senate: 5, trade: -5 },
      flags: ['conspiracy_threatened'],
    },
    category: 'standard',
    requiredFlags: ['conspiracy_dinner'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_conspiracy_ally',
    character: 'Colonel Harven',
    race: 'human',
    title: 'Military Intelligence Division',
    scenario:
      "Colonel Harven makes contact. Military Intelligence has been building the same case from a different direction — they tracked Serathi arms routing through shell accounts that intersect with Veth'an Holdings. He wants to share evidence. He also wants access to your source inside the Senate. He says this is cooperation. It feels like something else.",
    left: {
      label: 'Pool evidence with Military Intelligence',
      preview: 'The case gets stronger',
      effects: { military: 6, senate: 3, trade: -6 },
      flags: ['conspiracy_joint'],
    },
    right: {
      label: 'Decline — keep the investigations separate',
      preview: 'You decide who controls this',
      effects: { senate: 4, military: -4, trade: -3 },
      flags: ['conspiracy_joint'],
    },
    category: 'crossfire',
    requiredFlags: ['conspiracy_threatened'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_conspiracy_exposure',
    character: 'Senate Speaker Havel',
    race: 'human',
    title: 'CRISIS — Bring It Forward',
    scenario:
      "You have the shell company, the senator's testimony, the financial trail, and Military Intelligence's routing data. It is enough. The Speaker is asking whether you want to table this in full session — public, on the record — or use it as private leverage to reform the Trade League's Senate agreements quietly.",
    left: {
      label: 'Table it in full session — public exposure',
      preview: 'Let the Assembly see it',
      effects: { senate: 8, trade: -9, military: 4 },
      flags: ['conspiracy_exposed'],
    },
    right: {
      label: 'Use it as leverage — extract concessions privately',
      preview: 'A quiet win is still a win',
      effects: { trade: -4, senate: -4, military: 5 },
      flags: ['conspiracy_exposed'],
    },
    category: 'crisis',
    requiredFlags: ['conspiracy_joint'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_conspiracy_wrapup',
    character: 'Envoy Lissara',
    race: 'serathi',
    title: 'Serathi Senior Trade Envoy',
    scenario:
      "Lissara is still the senior Trade Envoy. Different brief, same role, same name on the door. The three senators are gone. The Holdings account is dissolved. A new structure has almost certainly replaced it. She nods at you across the floor of the Assembly as if you have never met.",
    left: {
      label: '"At least we tried."',
      preview: '',
      effects: {},
    },
    right: {
      label: '"Next time, I\'ll be faster."',
      preview: '',
      effects: {},
    },
    category: 'standard',
    requiredFlags: ['conspiracy_exposed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // ── STANDALONE CARDS ──────────────────────────────────────────────────────
  {
    id: 'veth_schism',
    character: "Faction Leader Ku'eth",
    race: 'veth',
    title: 'Veth Senate Delegation',
    scenario:
      "The Veth Senate delegation has fractured into two irreconcilable factions over a constitutional dispute. Both claim to be the legitimate representative body of the Veth people. The Assembly must formally recognise one. The other will consider it a hostile act.",
    left: {
      label: 'Recognise the traditionalists',
      preview: 'Back the old order',
      effects: { senate: 7, coalition: -4, trade: -4 },
    },
    right: {
      label: 'Recognise the reform faction',
      preview: 'Back the new',
      effects: { senate: 4, trade: 5, coalition: 3, military: -5 },
    },
    category: 'crossfire',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'pale_artifact',
    character: 'Dr. Oswin Releth',
    race: 'pale',
    title: 'Deep Space Research Division',
    scenario:
      "A deep-space team has recovered a functioning Pale artefact from a decommissioned station. It is active. The Military wants it seized. The Coalition wants joint custody for study. No one is asking what the Pale want.",
    left: {
      label: 'Transfer to Military custody',
      preview: 'Control it',
      effects: { military: 7, coalition: -6, trade: -3 },
    },
    right: {
      label: 'Establish joint research',
      preview: 'Study it openly',
      effects: { coalition: 7, senate: 4, military: -7 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'trade_hostage',
    character: 'Director Kaed',
    race: 'human',
    title: 'CRISIS — Senate Hostage',
    scenario:
      "A Trade League director facing Senate prosecution has barricaded himself in a committee room with a junior senator. His demand: full immunity and destruction of the prosecution file. The Military wants to move in. He is broadcasting live.",
    left: {
      label: 'Negotiate partial immunity',
      preview: 'Get the senator out',
      effects: { trade: 7, senate: -7, military: -5 },
    },
    right: {
      label: 'Authorise Military entry',
      preview: 'Resolve it by force',
      effects: { military: 8, trade: -8, senate: -3 },
    },
    category: 'crisis',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'whistleblower_dump',
    character: 'Anonymous Source',
    race: 'human',
    title: 'CRISIS — Classified Data Released',
    scenario:
      "Every classified Senate session from the past decade has been published simultaneously on every public channel. Votes, private assurances, back-channel deals — all of it. The Trade League is already distributing highlights. The Military wants it suppressed. The public is reading it now.",
    left: {
      label: 'Call for immediate suppression',
      preview: 'Contain the damage',
      effects: { military: 7, senate: -6, coalition: -5, trade: -4 },
    },
    right: {
      label: 'Issue a statement — own your record',
      preview: 'Get ahead of it publicly',
      effects: { senate: 6, coalition: 5, military: -6, trade: -4 },
    },
    category: 'crisis',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'senate_recall',
    character: "Constituency Rep Varel",
    race: 'human',
    title: 'Senate Recall Petition',
    scenario:
      "Your constituents have filed a recall petition. The threshold is met — the vote proceeds in 72 hours unless you challenge on procedural grounds. Your legal team says the challenge has merit. Your aide says fighting it publicly will look worse than losing.",
    left: {
      label: 'Challenge the petition',
      preview: 'Fight it in court',
      effects: { senate: 6, military: -3, trade: -3 },
    },
    right: {
      label: 'Accept the vote — run on your record',
      preview: 'Let the constituents decide',
      effects: { senate: -6, coalition: 5, trade: 3 },
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
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
