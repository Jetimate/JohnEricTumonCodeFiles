class PlayableCharacter extends Mob {
	constructor(setMinX, setMaxX, setMinY, setMaxY, x, y, appearance, ignoreSpellCollision, ignoreMobCollision, health, defense, damage, radius, radiusAdjust, name, mana, experience, level, state) {
		super(setMinX, setMaxX, setMinY, setMaxY, x, y, appearance, ignoreSpellCollision, ignoreMobCollision, health, defense, damage, radius, radiusAdjust);
		this.name = name;
		this.mana = mana;
		this.manaRegen = savedData.manaRegen; // 0.005
		this.healthRegen = savedData.healthRegen; // 0.01
		this.maxHealth = savedData.maxHealth;
		this.maxMana = savedData.maxMana; // 5
		this.experience = experience;
		this.maxExperience = savedData.maxExperience;
		this.level = level;
		this.state = state;
		this.movementX = 0;
		this.movementY = 0;
		this.speed = constantPlayerSpeed;	
		this.newSpeed = 0;
		this.side = "player1";
		this.summonSpace = 0;
		this.summonLimit = savedData.summonLimit; //20
		this.pickUpRange = 20; //20
		this.spellBookSlotsUnlocked = savedData.spellBookSlotsUnlocked;
		this.codeClass = "playableCharacter";
		this.hasTarget = false;
		this.score = 0;
		this.lastDamageTime = 0;
		this.currentActiveSpellQuantity = 0;
		this.activeSpellQuantityLimit = 1;
	}		
	playerNewPos() {
		if (this.state === "dead") {
			return;
		}
		if (keyMovement) {
			this.angle += this.moveAngle * Math.PI / 180;
			this.x += this.newSpeed * Math.sin(this.angle);
			this.y -= this.newSpeed * Math.cos(this.angle);
			myGameCharacter.x += myGameCharacter.movementX;
			myGameCharacter.y += myGameCharacter.movementY;

			// Ensure the entity stays within the canvas boundaries
			stayWithinMap(this, biome1);
		}
	}
	regenerateHealth() {
		if (this.state === "dead") {
			return;
		}
		if (this.maxHealth > this.health) {
			this.health += this.healthRegen; // remove 1 after debug
		}
	}
	regenerateMana() {
		if (this.state === "dead") {
			return;
		}
		if (this.maxMana > this.mana) {
			this.mana += this.manaRegen;
		}
	}
}