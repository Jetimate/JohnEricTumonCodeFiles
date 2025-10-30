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
		inventoryArray.push(...toBeCraftedMap.values());

		// WIP
		savedData.maxHealth = myGameCharacter.maxHealth;
		savedData.maxMana = myGameCharacter.maxMana;
		savedData.healthRegen = myGameCharacter.healthRegen;
		savedData.manaRegen = myGameCharacter.manaRegen;
		// --------
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

	/*
	static loadAll() {
		const data = StorageManager.load("savedPlayerData");

		if (data) {
			myGameCharacter.health = data.health ?? myGameCharacter.health;
			myGameCharacter.mana = data.mana ?? myGameCharacter.mana;
			myGameCharacter.name = data.name ?? myGameCharacter.name;
			myGameCharacter.experience = data.experience ?? myGameCharacter.experience;
			myGameCharacter.maxExperience = data.maxExperience ?? myGameCharacter.maxExperience;
			myGameCharacter.level = data.level ?? myGameCharacter.level;
			myGameCharacter.score = data.score ?? myGameCharacter.score;

			spellBooksArray = data.spellBooksArray ?? [];
			inventoryArray = data.inventoryArray ?? [];

			// Keep the global savedData in sync
			savedData = data;
		}
	}
	*/

    static remove(key) {
        localStorage.removeItem(key);
    }

    static clearAll() {
        localStorage.clear();
    }
}