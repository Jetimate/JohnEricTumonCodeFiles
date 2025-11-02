class StorageManager {
    static save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static load(key, defaultValue = null) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    }

	static saveAll() {
		//savedData.health = myGameCharacter.health;
		//savedData.mana = myGameCharacter.mana;

		savedData.maxHealth = myGameCharacter.maxHealth;
		savedData.maxMana = myGameCharacter.maxMana;
		savedData.healthRegen = myGameCharacter.healthRegen;
		savedData.manaRegen = myGameCharacter.manaRegen;
		savedData.summonLimit = myGameCharacter.summonLimit;
		savedData.name = myGameCharacter.name;
		savedData.experience = myGameCharacter.experience;
		savedData.maxExperience = myGameCharacter.maxExperience;
		savedData.level = myGameCharacter.level;
		savedData.spellBookSlotsUnlocked = myGameCharacter.spellBookSlotsUnlocked;
		savedData.score = myGameCharacter.score;
		savedData.spellBooksArray = spellBooksArray;
		savedData.inventoryArray = inventoryArray;

		StorageManager.save("savedPlayerData", savedData);
	}

    static remove(key) {
        localStorage.removeItem(key);
    }

    static clearAll() {
        localStorage.clear();
    }
}