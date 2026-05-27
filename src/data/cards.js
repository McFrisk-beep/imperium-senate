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
  // Cards gate on run-level flags set by earlier cards in the same chain.
  // Chain cards stay in the deck pool until their flag is satisfied, then
  // surface naturally through the weighted draw.

  // Chain A: THE CEASEFIRE MISSION ──────────────────────────────────────────
  // Right choice on A1 → ceasefire_deployed → A2 unlocks
  // Right choice on A2 → ceasefire_negotiating → A3 unlocks
  {
    id: 'chain_ceasefire_offer',
    character: 'General Corvath',
    race: 'human',
    title: 'Joint Operations Command',
    scenario:
      "The front line on the Kra'van border has collapsed into open civilian displacement. General Corvath needs a Senate envoy — someone without a uniform who the separatists will talk to. He's asking for you personally.",
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
    id: 'chain_ceasefire_field',
    character: 'Commander Thek',
    race: 'kravan',
    title: "Kra'van Field Commander",
    scenario:
      "The front is worse than the briefings described. Hundreds displaced, no humanitarian corridor. Commander Thek will negotiate — but only if you dismiss your military escort and cross into the contested zone alone.",
    left: {
      label: 'Keep the escort',
      preview: 'Negotiate at a safe distance',
      effects: { military: 5, coalition: -7 },
    },
    right: {
      label: 'Dismiss the escort',
      preview: 'Cross the line alone',
      effects: { coalition: 9, military: -7 },
      flags: ['ceasefire_negotiating'],
    },
    category: 'crossfire',
    requiredFlags: ['ceasefire_deployed'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_ceasefire_resolution',
    character: 'Commander Thek',
    race: 'kravan',
    title: "CRISIS — Ceasefire Terms",
    scenario:
      "Thek's terms are on the table: recognition of the Veth'sol moon as sovereign Kra'van territory, effective immediately. General Corvath is on a secure line demanding you walk out. The Coalition delegation is watching in silence.",
    left: {
      label: 'Reject the terms',
      preview: 'Walk away — ceasefire fails',
      effects: { military: 9, coalition: -10, senate: -4 },
    },
    right: {
      label: 'Take the terms back to the Senate',
      preview: 'Ceasefire holds — for now',
      effects: { coalition: 10, military: -8, senate: 5 },
    },
    category: 'crisis',
    requiredFlags: ['ceasefire_negotiating'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // Chain B: THE DOWNED TRANSPORT ───────────────────────────────────────────
  // Both choices on B1 set ship_downed (crash is unavoidable)
  // Both choices on B2 set shelter_resolved → B3 unlocks
  {
    id: 'chain_ship_distress',
    character: 'Pilot Denna',
    race: 'human',
    title: 'Senate Transport Pilot',
    scenario:
      "Debris from an unlogged engagement has torn through your transport. You are going down on an uncharted moon. The comms system has one transmission before it fails. Who gets it?",
    left: {
      label: 'Military emergency channel',
      preview: 'Fast rescue, military control',
      effects: { military: 5, coalition: -3 },
      flags: ['ship_downed'],
    },
    right: {
      label: 'Open civilian broadcast',
      preview: 'Slower, but no strings',
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
      "You've found shelter in a cave network. You are not alone. An unregistered Dul'mak community has lived here for eleven years — off every census, unknown to the Coalition itself. They survived the border conflict by vanishing. They will hide you if you promise this settlement stays off the record.",
    left: {
      label: 'Promise silence',
      preview: 'Let them stay hidden',
      effects: { coalition: 8, senate: -5 },
      flags: ['shelter_resolved'],
    },
    right: {
      label: 'Explain you are bound to disclose',
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
    id: 'chain_ship_rescue',
    character: 'Agent Fell',
    race: 'human',
    title: 'CRISIS — Rescue Complications',
    scenario:
      "The rescue vessel arrives — but a Trade League salvage crew got here first and has begun cataloguing your wreck, including the classified documents you were carrying. They are citing full salvage rights under deep-space law and are not leaving.",
    left: {
      label: 'Cooperate with salvage',
      preview: 'Let them have the wreck',
      effects: { trade: 8, senate: -7, military: -3 },
    },
    right: {
      label: 'Invoke Senate privilege',
      preview: 'Order them off the site',
      effects: { senate: 7, military: 4, trade: -9 },
    },
    category: 'crisis',
    requiredFlags: ['shelter_resolved'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // Chain C: THE FUGITIVE SENATOR ───────────────────────────────────────────
  // Right choice on C1 → gone_underground → C2 unlocks
  // Both choices on C2 set fugitive_endgame → C3 unlocks
  {
    id: 'chain_fugitive_warning',
    character: 'Unknown Sender',
    race: 'human',
    title: 'Encrypted Transmission',
    scenario:
      "An encrypted message arrives through a channel you have never used. It contains your name, three surveillance photographs taken inside the Senate building, and one sentence: \"They know what you saw. Leave tonight or don't leave at all.\"",
    left: {
      label: 'Ignore it',
      preview: 'Probably a scare tactic',
      effects: { senate: 3, trade: -2 },
    },
    right: {
      label: 'Take it seriously — disappear',
      preview: 'Go underground tonight',
      effects: { senate: -5, military: -3, trade: -3 },
      flags: ['gone_underground'],
    },
    category: 'standard',
    requiredFlags: [],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_contact',
    character: 'Broker Zeth',
    race: 'human',
    title: 'Underground Intermediary',
    scenario:
      "A broker finds you within 24 hours — someone who knew exactly where to look. He can provide a new identity, off-world transport, and three weeks of cover. His price: a copy of the Senate classified personnel registry, which you have access to. He claims it is to protect other targets.",
    left: {
      label: 'Refuse — find another way',
      preview: 'The registry stays sealed',
      effects: { senate: 3, coalition: 5, trade: -6 },
      flags: ['fugitive_endgame'],
    },
    right: {
      label: 'Hand over the registry',
      preview: 'Trust him',
      effects: { senate: -9, trade: 7 },
      flags: ['fugitive_endgame'],
    },
    category: 'crossfire',
    requiredFlags: ['gone_underground'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },
  {
    id: 'chain_fugitive_surface',
    character: 'Marshal Senne',
    race: 'human',
    title: 'CRISIS — Senate Security',
    scenario:
      "A Senate Security Marshal tracks you down. She offers two options: return publicly and face a formal inquiry into your disappearance, or come back quietly under a private arrangement that keeps you in your seat — but leaves you owing her a favour with no expiry.",
    left: {
      label: 'Return publicly',
      preview: 'Face the inquiry',
      effects: { senate: 8, military: 4, trade: -5 },
    },
    right: {
      label: 'Accept the quiet return',
      preview: 'Owe the Marshal',
      effects: { senate: -7, military: 3, trade: 5 },
    },
    category: 'crisis',
    requiredFlags: ['fugitive_endgame'],
    requiredLegacyFlags: [],
    objectiveGlyph: false,
  },

  // Chain D: THE ASSASSINATION CONTRACT ─────────────────────────────────────
  // Both choices on D1 set threat_known (the encounter comes either way)
  {
    id: 'chain_assassin_warning',
    character: 'Bodyguard Teveth',
    race: 'human',
    title: 'Senate Security Detail',
    scenario:
      "Your security detail has intercepted chatter about a contract taken out on your life. Source unknown. Timeline uncertain. The assassin is believed to be already in the building. Teveth is recommending immediate evacuation.",
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
    id: 'chain_assassin_encounter',
    character: 'The Contractor',
    race: 'human',
    title: 'CRISIS — The Assassin',
    scenario:
      "The contractor contacts you directly — not with a weapon, but a message. They know who placed the order and they want out. They will name the client, disappear permanently, and cancel the contract — in exchange for safe passage off-planet and access to a Senate emergency account. They have twenty minutes before their handler checks in.",
    left: {
      label: 'Pay — take the name',
      preview: 'Let them go',
      effects: { senate: -5, trade: -5, military: 8 },
    },
    right: {
      label: 'Detain them',
      preview: 'Let Security handle it',
      effects: { senate: 8, military: 6, trade: -4 },
    },
    category: 'crisis',
    requiredFlags: ['threat_known'],
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
