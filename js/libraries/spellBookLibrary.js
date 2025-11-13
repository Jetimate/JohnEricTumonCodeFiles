const spellBookLibrary = {
	spikeBook: (() => {
		let castSpike = {
			radius: 12,
			FOVRadius: 0,
			name: "castSpike",
			art: "projecting",
			shape: "circle",
			appearance: "spell/spike.svg",
			castQuantity: 1,
			maxQuantity: 0,
			ignoreSpellCollision: false,
			ignoreMobCollision: false,
			index: 1,
			health: 1,
			defense: 0,
			damage: 4,
			speed: 10,
			ability: "shoot1",
			manaCost: 0.1,
			summonCost: 0,
			respawnTime: 500
		};

		let spikeCore = {
			radius: 25,
			FOVRadius: 0,
			name: "spikeCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/spike_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/spike_spellBook.png",
			name: "spikeBook",
			cooldown: 30, // number / 60 = seconds of cooldown
			text: "spike",
			spell: castSpike,
			spellCore: spikeCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 1.75 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 1.75 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 1.75 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 1.75 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 1.75 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 1.75 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 1.75 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	luminousEnergyBook: (() => {
		let castLuminousEnergy = {
			radius: 5,
			FOVRadius: 0,
			name: "castLuminousEnergy",
			art: "projecting",
			shape: "circle",
			appearance: "mob/luminousRock.svg",
			castQuantity: 5,
			maxQuantity: 5,
			ignoreSpellCollision: false,
			ignoreMobCollision: false,
			index: 1,
			health: 5,
			defense: 0,
			damage: 1,
			speed: 15,
			ability: "shoot2",
			manaCost: 1.25,
			summonCost: 0,
			respawnTime: 1000
		};

		let luminousEnergyCore = {
			radius: 25,
			FOVRadius: 0,
			name: "luminousEnergyCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/luminousEnergy_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/luminousEnergy_spellBook.png",
			name: "luminousEnergyBook",
			cooldown: 60, // number / 60 = seconds of cooldown
			text: "lumenergy",
			spell: castLuminousEnergy,
			spellCore: luminousEnergyCore,
			levelStats: {
				2: { spell: { castQuantity: 2, speed: 1.2, health: 1.2, damage: 1.2, manaCost: 1.25 } },
				3: { spell: { castQuantity: 2, speed: 1.2, health: 1.2, damage: 1.2, manaCost: 1.25 } },
				4: { spell: { castQuantity: 2, speed: 1.2, health: 1.2, damage: 1.2, manaCost: 1.25 } },
				5: { spell: { castQuantity: 5, speed: 1.2} },
				6: { spell: { castQuantity: 2, speed: 1.2, health: 1.2, damage: 1.2, manaCost: 1.25 } },
				7: { spell: { castQuantity: 2, speed: 1.2, health: 1.2, damage: 1.2, manaCost: 1.25 } },
				8: { spell: { castQuantity: 2, speed: 1.2, health: 1.2, damage: 1.2, manaCost: 1.25 } },
				9: { spell: { castQuantity: 2, speed: 1.2, health: 1.2, damage: 1.2, manaCost: 1.25 } },
				10: { spell: { castQuantity: 5, speed: 1.2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	glowShardBook: (() => {
		let castGlowShard = {
			radius: 5,
			FOVRadius: 0,
			name: "castGlowShard",
			art: "projecting",
			shape: "circle",
			appearance: "spell/glowShard.png",
			castQuantity: 3,
			maxQuantity: 3,
			ignoreSpellCollision: false,
			ignoreMobCollision: false,
			index: 1,
			health: 10,
			defense: 3,
			damage: 3,
			speed: 20,
			ability: "shoot2",
			manaCost: 5,
			summonCost: 0,
			respawnTime: 1000
		};

		let glowShardCore = {
			radius: 25,
			FOVRadius: 0,
			name: "glowShardCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/glowShard_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/glowShard_spellBook.png",
			name: "glowShardBook",
			cooldown: 60, // number / 60 = seconds of cooldown
			text: "glow Shard",
			spell: castGlowShard,
			spellCore: glowShardCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	luminousShieldBook: (() => {
		let summonLuminousShield = {
			radius: 120,
			FOVRadius: 0,
			name: "summonLuminousShield",
			art: "summoning",
			shape: "circle",
			appearance: "mob/luminousRock.svg",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: false,
			ignoreMobCollision: false,
			index: 1,
			health: 240,
			defense: 2.5,
			damage: 0.1,
			speed: 5,
			ability: "summon1",
			manaCost: 1,
			summonCost: 5,
			respawnTime: 1000
		};

		let luminousShieldCore = {
			radius: 25,
			FOVRadius: 0,
			name: "luminousShieldCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/luminousShield_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/luminousShield_spellBook.png",
			name: "luminousShieldBook",
			cooldown: 90, // number / 60 = seconds of cooldown
			text: "shield",
			spell: summonLuminousShield,
			spellCore: luminousShieldCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	luminousSpiritBook: (() => {
		let summonSpirit = {
			radius: 20,
			FOVRadius: 0,
			name: "summonSpirit",
			art: "summoning",
			shape: "circle",
			appearance: "mob/luminousSpirit.svg",
			castQuantity: 5,
			maxQuantity: 5,
			ignoreSpellCollision: false,
			ignoreMobCollision: false,
			index: 1,
			health: 20,
			defense: 0,
			damage: 3.5,
			speed: 5,
			ability: "summon1",
			manaCost: 2.5,
			summonCost: 2,
			respawnTime: 1000
		};

		let luminousSpiritCore = {
			radius: 25,
			FOVRadius: 0,
			name: "luminousSpiritCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/luminousSpirit_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/luminousSpirit_spellBook.png",
			name: "luminousSpiritBook",
			cooldown: 120, // number / 60 = seconds of cooldown
			text: "spirit",
			spell: summonSpirit,
			spellCore: luminousSpiritCore,
			levelStats: {
				2: { spell: { health: 1.25, damage: 1.25, manaCost: 1.5, speed: 1.2 } },
				3: { spell: { health: 1.25, damage: 1.25, manaCost: 1.5, speed: 1.2 } },
				4: { spell: { health: 1.25, damage: 1.25, manaCost: 1.5, speed: 1.2 } },
				5: { spell: { castQuantity: 3, speed: 1.5, damage: 1.25, radius: 2} },
				6: { spell: { health: 1.25, damage: 1.25, manaCost: 1.5, speed: 1.2 } },
				7: { spell: { health: 1.25, damage: 1.25, manaCost: 1.5, speed: 1.2 } },
				8: { spell: { health: 1.25, damage: 1.25, manaCost: 1.5, speed: 1.2 } },
				9: { spell: { hhealth: 1.25, damage: 1.25, manaCost: 1.5, speed: 1.2 } },
				10: { spell: { castQuantity: 3, speed: 1.5, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	specterBook: (() => {
		let summonSpecter = {
			radius: 25,
			FOVRadius: 0,
			name: "summonSpecter",
			art: "summoning",
			shape: "circle",
			appearance: "mob/specter.svg",
			castQuantity: 4,
			maxQuantity: 4,
			ignoreSpellCollision: false,
			ignoreMobCollision: false,
			index: 1,
			health: 35,
			defense: 0,
			damage: 4.5,
			speed: 7,
			ability: "summon1",
			manaCost: 4,
			summonCost: 2.5,
			respawnTime: 1500
		};

		let specterCore = {
			radius: 25,
			FOVRadius: 0,
			name: "specterCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/specter_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/specter_spellBook.png",
			name: "specterBook",
			cooldown: 120,
			text: "specter",
			spell: summonSpecter,
			spellCore: specterCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	specterHandBook: (() => {
		let castSpecterHand = {
			radius: 5,
			FOVRadius: 0,
			name: "castSpecterHand",
			art: "projecting",
			shape: "circle",
			appearance: "spell/specterHand.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: false,
			index: 1,
			health: 30,
			defense: 1.5,
			damage: 4.5,
			speed: 7.5,
			ability: "shoot3",
			manaCost: 3.5,
			summonCost: 0,
			respawnTime: 1500
		};

		let specterHandCore = {
			radius: 25,
			FOVRadius: 0,
			name: "specterHandCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/specterHand_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/specterHand_spellBook.png",
			name: "specterHandBook",
			cooldown: 90,
			text: "hand",
			spell: castSpecterHand,
			spellCore: specterHandCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.25, manaCost: 1.5 } },
				3: { spell: { health: 1.5, damage: 1.25, manaCost: 1.5 } },
				4: { spell: { health: 1.5, damage: 1.25, manaCost: 1.5 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.25, manaCost: 1.5 } },
				7: { spell: { health: 1.5, damage: 1.25, manaCost: 1.5 } },
				8: { spell: { health: 1.5, damage: 1.25, manaCost: 1.5 } },
				9: { spell: { health: 1.5, damage: 1.25, manaCost: 1.5 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	teleportBook: (() => {
		let castTeleport = {
			radius: 50,
			FOVRadius: 0,
			name: "teleport",
			art: "evading",
			shape: "circle",
			appearance: "spell/teleportation.png",
			castQuantity: 1,
			maxQuantity: 0,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 15,
			defense: 0,
			damage: 0,
			speed: 30,
			ability: "teleport",
			manaCost: 2,
			summonCost: 0,
			respawnTime: 500
		};

		let teleportCore = {
			radius: 25,
			FOVRadius: 0,
			name: "teleportCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/teleportation_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/teleportation_spellBook.png",
			name: "teleportBook",
			cooldown: 90,
			text: "teleport",
			spell: castTeleport,
			spellCore: teleportCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	smashBook: (() => {
		let castSmash = {
			radius: 30,
			FOVRadius: 0,
			name: "smash",
			art: "AoE",
			shape: "circle",
			appearance: "spell/smash.png",
			castQuantity: 15,
			maxQuantity: 0,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 1,
			defense: 100,
			damage: 2.5,
			speed: 0,
			ability: "AoE1",
			manaCost: 3,
			summonCost: 0,
			respawnTime: 500
		};

		let smashCore = {
			radius: 25,
			FOVRadius: 0,
			name: "smashCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/smash_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/smash_spellBook.png",
			name: "smashBook",
			cooldown: 30,
			text: "smash",
			spell: castSmash,
			spellCore: smashCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	beamBook: (() => {
		let castBeam = {
			radius: 0,
			FOVRadius: 0,
			name: "castBeam",
			art: "beams",
			shape: "line",
			appearance: "spell/beam.png",
			castQuantity: 1,
			maxQuantity: 0,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 10000,
			defense: 0,
			damage: 0.5,
			speed: 10,
			ability: "beam1",
			manaCost: 1,
			summonCost: 0,
			respawnTime: 500
		};

		let beamCore = {
			radius: 25,
			FOVRadius: 0,
			name: "beamCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/beam_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/beam_spellBook.png",
			name: "beamBook",
			cooldown: 120,
			text: "beam",
			spell: castBeam,
			spellCore: beamCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	lightningBoltBook: (() => {
		let castLightningBolt = {
			radius: 0,
			FOVRadius: 0,
			name: "castLightningBolt",
			art: "beams",
			shape: "line",
			appearance: "spell/lightningBolt.png",
			castQuantity: 3,
			maxQuantity: 0,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 1,
			defense: 0,
			damage: 10,
			speed: 10,
			ability: "beam2",
			manaCost: 2,
			summonCost: 0,
			respawnTime: 500
		};

		let lightningBoltCore = {
			radius: 25,
			FOVRadius: 0,
			name: "lightningBoltCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/lightningBolt_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/lightningBolt_spellBook.png",
			name: "lightningBoltBook",
			cooldown: 90,
			text: "lightning",
			spell: castLightningBolt,
			spellCore: lightningBoltCore,
			levelStats: {
				2: { spell: { health: 1.25, damage: 2, manaCost: 1.25 } },
				3: { spell: { health: 1.25, damage: 2, manaCost: 1.25 } },
				4: { spell: { health: 1.25, damage: 2, manaCost: 1.25 } },
				5: { spell: { castQuantity: 1, damage: 2} },
				6: { spell: { health: 1.25, damage: 2, manaCost: 1.25 } },
				7: { spell: { health: 1.25, damage: 2, manaCost: 1.25 } },
				8: { spell: { health: 1.25, damage: 2, manaCost: 1.25 } },
				9: { spell: { health: 1.25, damage: 2, manaCost: 1.25 } },
				10: { spell: { castQuantity: 3, damage: 1.25 } }
			}
		};

		return spellBook;
	})(),
	energyBallBook: (() => {
		let castEnergyBall = {
			radius: 50,
			FOVRadius: 0,
			name: "castEnergyBall",
			art: "projectile",
			shape: "circle",
			appearance: "spell/energyBall.png",
			castQuantity: 1,
			maxQuantity: 0,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 2500,
			defense: 0,
			damage: 3,
			speed: 10,
			ability: "shoot1",
			manaCost: 1,
			summonCost: 0,
			respawnTime: 500
		};

		let energyBallCore = {
			radius: 25,
			FOVRadius: 0,
			name: "energyBallCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/energyBall_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/energyBall_spellBook.png",
			name: "energyBallBook",
			cooldown: 90,
			text: "energy ball",
			spell: castEnergyBall,
			spellCore: energyBallCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
	treeBook: (() => {
		let summonTree = {
			radius: 50,
			FOVRadius: 0,
			name: "summonTree",
			art: "summoning",
			shape: "circle",
			appearance: "mob/gloomForestTree.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: false,
			ignoreMobCollision: false,
			index: 1,
			health: 50,
			defense: 3,
			damage: 0.5,
			speed: 0,
			ability: "summon2",
			manaCost: 3,
			summonCost: 2,
			respawnTime: 1500
		};

		let treeCore = {
			radius: 25,
			FOVRadius: 0,
			name: "treeCore",
			art: "books",
			shape: "circle",
			appearance: "spellBook/summonTree_spellBook.png",
			castQuantity: 1,
			maxQuantity: 1,
			ignoreSpellCollision: true,
			ignoreMobCollision: true,
			index: 1,
			health: 100,
			defense: 100,
			damage: 0,
			speed: 12,
			ability: null,
			manaCost: 1,
			summonCost: 0,
			respawnTime: null
		};

		let spellBook = {
			appearance: "spellBook/summonTree_spellBook.png",
			name: "treeBook",
			cooldown: 120,
			text: "tree",
			spell: summonTree,
			spellCore: treeCore,
			levelStats: {
				2: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				3: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				4: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				5: { spell: { castQuantity: 1, speed: 2 } },
				6: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				7: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				8: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				9: { spell: { health: 1.5, damage: 1.5, manaCost: 2 } },
				10: { spell: { castQuantity: 3, speed: 2, damage: 2 } }
			}
		};

		return spellBook;
	})(),
}