
const buttonLibrary = {
	// spell book slot
	/*
	z-index order:
	1 bar
	2 spellBookSlots
	3 display crafting and settings
	4 crafting slots and settings buttons
	5 display inventory, play button, and name input
	10 exit button
	*/
	spellBookSlot1: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot1",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot2: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot2",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot3: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot3",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot4: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot4",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot5: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot5",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot6: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot6",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot7: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot7",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot8: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot8",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	spellBookSlot9: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "spellBookSlot9",
		group: "spellBookSlot",
		classification: "slot",
		text: "bug 101",
		zIndex: 2,
		index: 1
	},
	// stats bars
	levelBar: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#5fa7e5",
		name: "levelBar",
		group: null,
		classification: "bar",
		text: "bug 101",
		zIndex: 1,
		index: 0
	},
	experienceBar: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#ffd15d",
		name: "experienceBar",
		group: null,
		classification: "bar",
		text: "bug 101",
		zIndex: 1,
		index: 1
	},
	healthBar: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#ff5d70",
		name: "healthBar",
		group: null,
		classification: "bar",
		text: "bug 101",
		zIndex: 1,
		index: 2
	},
	manaBar: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#dbcff8",
		name: "manaBar",
		group: null,
		classification: "bar",
		text: "bug 101",
		zIndex: 1,
		index: 3
	},
	// clickable buttons
	nameInput: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#d0def5",
		name: "nameInput",
		group: "textInputButton",
		classification: "clickable",
		text: "type your name here:",
		zIndex: 5,
		index: null
	},
	playButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#6cd649",
		name: "playButton",
		group: null,
		classification: "clickable",
		text: "play",
		zIndex: 5,
		index: null
	},
	inventoryButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#e3a04d",
		name: "inventoryButton",
		group: null,
		classification: "clickable",
		text: "inventory",
		zIndex: 1,
		index: null
	},
	craftButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#3477eb",
		name: "craftButton",
		group: null,
		classification: "clickable",
		text: "craft",
		zIndex: 1,
		index: null
	},
	settingsButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#bab6bf",
		name: "settingsButton",
		group: null,
		classification: "clickable",
		text: "settings",
		zIndex: 1,
		index: null
	},
	exitButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#870125",
		name: "exitButton",
		group: null,
		classification: "clickable",
		text: "save & exit",
		zIndex: 10,
		index: null
	},
	// display inventory
	displayInventory: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#e3a04d",
		name: "displayInventory",
		group: null,
		classification: "display",
		text: "bug 101",
		zIndex: 5,
		index: null
	},
	// crafting buttons
	displayCrafting: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#3477eb",
		name: "displayCrafting",
		group: null,
		classification: "display",
		text: "bug 101",
		zIndex: 3,
		index: null
	},
	craftSlot1: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "craftSlot1",
		group: "craftSlot",
		classification: "slot",
		text: "insert 5 pages",
		zIndex: 4,
		index: 1
	},
	craftSlot2: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "craftSlot2",
		group: "craftSlot",
		classification: "slot",
		text: "insert 15 essence",
		zIndex: 4,
		index: 2
	},
	activateCraft: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#808080",
		name: "activateCraft",
		group: "craftSlot",
		classification: "clickable",
		text: "craft",
		zIndex: 4,
		index: 3
	},
	craftedItemSlot: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#000000",
		name: "craftedItemSlot",
		group: "craftSlot",
		classification: "slot",
		text: "crafted item:",
		zIndex: 4,
		index: 4
	},
	displaySettings: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#bab6bf",
		name: "displaySettings",
		group: null,
		classification: "display",
		text: "bug 101",
		zIndex: 3,
		index: null
	},
	keyMovementButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#bab6bf",
		name: "keyMovementButton",
		group: "movementButtons",
		classification: "clickable",
		text: "keyMovement",
		zIndex: 4,
		index: 0
	},
	mouseMovementButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#bab6bf",
		name: "mouseMovementButton",
		group: "movementButtons",
		classification: "clickable",
		text: "mouseMovement",
		zIndex: 4,
		index: 1
	},
	followMouseMovementButton: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: 0,
		color: "#bab6bf",
		name: "followMouseMovementButton",
		group: "movementButtons",
		classification: "clickable",
		text: "followMouseMovement",
		zIndex: 4,
		index: 2
	}
}
class Button {
	constructor(x, y, width, height, radii, color, name, group, classification, text, zIndex, index) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
		this.radii = radii;
		this.color = color;
		this.name = name;
		this.group = group;
		this.classification = classification;
		this.text = text;
		this.zIndex = zIndex;
		this.index = index;
		this.toggle = false;
		this.codeClass = "button";
		this.slotActive = false;
		this.isShaking = false;
		this.shakeStartTime = null;
		this.shakeDuration = 0;
		this.shakeIntensity = 0;
		this.shakeReason = "";
		this.originalX = this.x;
		this.originalY = this.y;
		this.originalColor = this.color;
		this.isHovered = false;
    }

	draw(ctx) {
		ctx.beginPath();
		ctx.roundRect(this.x, this.y, this.width, this.height, window.innerHeight / 300);

		if (this.classification != "slot") {
			ctx.save();
			if (this.classification == "display") {
				ctx.globalAlpha = 0.5;
			}
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.restore();
		}

		if (this.group == "spellBookSlot") {
			ctx.strokeStyle = "#000000";
		} else {
			ctx.strokeStyle = darkenHexColor(this.color, 60);
		}
		ctx.lineWidth = lineThickness * 1.2;
		ctx.stroke();

		ctx.font = fontSize + "px 'Trebuchet MS'";
		ctx.fillStyle = "#000000";

		if (this.classification == "bar") {
			this.x = statsBarX;
			this.y = (statsBarY * (this.index + 1)) + statsBarHeight * this.index;
			this.width = statsBarWidth;
			this.height = statsBarHeight;
			if (this.name == "levelBar") {
				this.text = `level: ${myGameCharacter.level}`;
			}
			if (this.name == "experienceBar") {
				this.text = `experience: ${myGameCharacter.experience}/${myGameCharacter.maxExperience}`;
			}
			if (this.name == "healthBar") {
				this.text = `health: ${Math.floor(myGameCharacter.health) }/${myGameCharacter.maxHealth}`;
			}
			if (this.name == "manaBar") {
				this.text = `mana: ${Math.floor(myGameCharacter.mana)}/${myGameCharacter.maxMana}`;
			}
			ctx.fillText(this.text, this.x + 5, this.y + (this.height / 1.5));
		}

		// buttons
		if (this.name == "nameInput") {
			this.x = centerX - ((statsBarWidth * 0.8) / 2);
			this.y = centerY - (statsBarHeight / 2) - (statsBarHeight * 1.25);
			this.width = statsBarWidth * 0.8;
			this.height = statsBarHeight;
			ctx.fillText(this.text, this.x + 5, this.y + (this.height / 1.5));
		}
		if (this.name == "playButton") {
			this.x = centerX - ((statsBarWidth * 0.25) / 2);
			this.y = centerY - (statsBarHeight / 2);
			this.width = statsBarWidth * 0.25;
			this.height = statsBarHeight;
			this.text = "play";
			ctx.fillText(this.text, this.x + 5, this.y + (this.height / 1.5));
		}
		if (this.name == "inventoryButton") {
			this.x = statsBarX;
			this.y = (statsBarY * 5) + statsBarHeight * 4;
			this.width = statsBarWidth * 0.5;
			this.height = statsBarHeight;
			this.text = "inventory";
			ctx.fillText(this.text, this.x + 5, this.y + (this.height / 1.5));
		}
		if (this.name == "craftButton") {
			this.x = statsBarX;
			this.y = (statsBarY * 6) + statsBarHeight * 5;
			this.width = statsBarWidth * 0.5;
			this.height = statsBarHeight;
			this.text = "craft";
			ctx.fillText(this.text, this.x + 5, this.y + (this.height / 1.5));
		}
		if (this.name == "settingsButton") {
			this.width = statsBarWidth * 0.5;
			this.height = statsBarHeight;
			this.x = statsBarX;
			this.y = window.innerHeight - this.height - slotMargin;
			this.text = "settings";
			ctx.fillText(this.text, this.x + 5, this.y + (this.height / 1.5));
		}
		if (this.name == "exitButton") {
			this.width = statsBarWidth * 0.45;
			this.height = statsBarHeight * 0.75;
			this.x = window.innerWidth - this.width - statsBarX;
			this.y = statsBarY;
			this.text = "save & exit";
			ctx.fillText(this.text, this.x + 5, this.y + (this.height / 1.5));
		}
		if (this.name == "displaySettings") {
			let settingsButton = buttonsMap.get("settingsButton");
			let totalMovementButtonsArrayLength = Array.from(buttonsMap.values()).filter(element => element.group == "movementButtons").length;

			this.width = window.innerWidth / 4;
			this.height = (totalMovementButtonsArrayLength * (miniButtonSize + buttonMargin)) + buttonMargin;
			if (settingsButton.toggle == false) {
				if (this.x > -this.width * 1.2) {
					// Ensure we don't overshoot the target
					this.x = Math.max(this.x - 5, -this.width * 1.2);
					//console.log(this.x, -this.width * 1.2);
				}
			} else {
				if (this.x < buttonMargin) {
					// Ensure we don't overshoot the target
					this.x = Math.min(this.x + 5, buttonMargin);
					//console.log(this.x, buttonMargin);
				}
			}	
			this.y = window.innerHeight - this.height - window.innerHeight / 20 - (slotMargin * 2);
		}
		if (this.group == "movementButtons") {
			let displaySettings = buttonsMap.get("displaySettings");
			let referenceX = displaySettings.x;
			let referenceY = displaySettings.y;

			const xDistance = referenceX + buttonMargin;
			const yDistance = referenceY + buttonMargin + ((miniButtonSize + buttonMargin) * this.index);
			this.x = xDistance;
			this.y = yDistance;
			this.width = miniButtonSize;
			this.height = miniButtonSize;

			if (this.name == "keyMovementButton" && keyMovement && this.toggle) {
				this.toggle = false;
				this.originalColor = "#000000";
				this.color = "#000000";
			}

			if (this.name == "mouseMovementButton" && mouseMovement && this.toggle) {
				this.toggle = false;
				this.originalColor = "#000000";
				this.color = "#000000";
			}

			if (this.name == "followMouseMovementButton" && followMouseMovement && this.toggle) {
				this.toggle = false;
				this.originalColor = "#000000";
				this.color = "#000000";
			}

			if (leftClick) {
				let distance = mouseMoveX >= this.x && mouseMoveX < miniButtonSize + this.x && mouseMoveY >= this.y && mouseMoveY < miniButtonSize + this.y;

				let totalMovementButtonsArray = Array.from(buttonsMap.values()).filter(element => element.group == "movementButtons");
				if (distance && this.name == "keyMovementButton") {
					// shut off the other buttons
					totalMovementButtonsArray.forEach(button => {
						button.toggle = false;
						button.originalColor = "#bab6bf";
						button.color = "#bab6bf";
						
					});
					// toggles itself
					this.toggle = true;
					keyMovement = true;
					mouseMovement = false;
					followMouseMovement = false;
				}

				if (distance && this.name == "mouseMovementButton") {

					totalMovementButtonsArray.forEach(button => {
						button.toggle = false;
						button.originalColor = "#bab6bf";
						button.color = "#bab6bf";
						
					});
					this.toggle = true;
					keyMovement = false;
					mouseMovement = true;
					followMouseMovement = false;
				}

				if (distance && this.name == "followMouseMovementButton") {

					totalMovementButtonsArray.forEach(button => {
						button.toggle = false;
						button.originalColor = "#bab6bf";
						button.color = "#bab6bf";
						
					});
					this.toggle = true;
					keyMovement = false;
					mouseMovement = false;
					followMouseMovement = true;
				}
			}

			ctx.font = fontSize + "px 'Trebuchet MS'";
			ctx.fillStyle = "#000000";
			ctx.fillText(
				this.text,
				this.x + miniButtonSize + buttonMargin,
				this.y + miniButtonSize / 2);
		}
		if (this.name == "displayCrafting") {
			let slotsPerRow = 5;
			let referenceWidth = (slotsPerRow * lootSize) + ((slotsPerRow + 1) * slotMargin);
			this.x = (window.innerWidth / 64 + window.innerWidth / 8) + referenceWidth;
			this.y = (window.innerHeight / 64);
			this.width = (slotsPerRow * lootSize) + ((slotsPerRow + 1) * slotMargin); //window.innerWidth / 3;
			// the extra height is space for the heading "(lootSize / 2)"
			this.height = (slotsPerRow * lootSize) + ((slotsPerRow + 1) * slotMargin) + (lootSize / 2); //window.innerHeight / 2;

			const craftingItems = Array.from(toBeCraftedMap.values());

			for (let i = 0; i < craftingItems.length; i++) {
				let item = craftingItems[i];

				let displayCrafting = buttonsMap.get("displayCrafting");
				let referenceX = displayCrafting.x;
				let referenceY = displayCrafting.y;
				let referenceWidth = displayCrafting.width;
				let referenceHeight = displayCrafting.height;

				let totalCraftSlotArray = Array.from(buttonsMap.values())
					.filter(element => element.group === "craftSlot")
					.length;
				const xDistance = referenceX + (referenceWidth - lootSize * totalCraftSlotArray) / 2 + (lootSize + slotMargin) * (item.index - 1) - slotMargin;
				// the extra height is space for the heading "(lootSize / 2)"
				const yDistance = referenceY + ((referenceHeight - lootSize) / 2) + (lootSize / 2); 

				item.x = xDistance;
				item.y = yDistance;

				ctx.beginPath();
				ctx.roundRect(
					item.x,
					item.y,
					lootSize,
					lootSize,
					radiiSize);

				ctx.strokeStyle = item.borderColor;
				ctx.lineWidth = lineThickness;
				ctx.stroke();
				ctx.font = (fontSize * 0.8) + "px Trebuchet MS";
				ctx.fillStyle = "#000000";

				ctx.drawImage(
					item.image,
					item.x,
					item.y,
					lootSize,
					lootSize);

				if (item.level == null) item.level = "";

				ctx.fillText(
					item.quantity + "x" + item.text + " " + item.level,
					item.x,
					item.y - (slotMargin / 4))
				
				ctx.closePath();
			}
			// heading
			ctx.font = (fontSize * 1.5) + "px 'Trebuchet MS'";
			ctx.fillStyle = "#000000";
			ctx.fillText(
				"Craft",
				this.x + slotMargin,
				this.y + (slotMargin * 2));
		}
		if (this.group == "craftSlot") {
			let displayCrafting = buttonsMap.get("displayCrafting");
			// TODO should i delete this line below or not?
			if (!displayCrafting) return
			let referenceX = displayCrafting.x;
			let referenceY = displayCrafting.y;
			let referenceWidth = displayCrafting.width;
			let referenceHeight = displayCrafting.height;
			let totalCraftSlotArray = Array.from(buttonsMap.values())
				.filter(element => element.group === "craftSlot")
				.length;

			const xDistance = referenceX + (referenceWidth - lootSize * totalCraftSlotArray) / 2 + (lootSize + slotMargin) * (this.index - 1) - slotMargin;
			// the extra height is space for the heading "(lootSize / 2)"
			const yDistance = referenceY + ((referenceHeight - lootSize) / 2) + (lootSize / 2); 
			this.x = xDistance;
			this.y = yDistance;
			this.width = lootSize;
			this.height = lootSize;
			let textY = this.y - slotMargin;
			let textX = this.x;
			if (this.name == "activateCraft") {
				this.width = lootSize / 1.5;
				this.height = lootSize / 3;
				this.x = xDistance + (lootSize / 2) - (this.width / 2);
				this.y = yDistance + (lootSize / 2) - (this.height / 2);
				textX = xDistance + (lootSize / 2) - (this.width / 4)
				textY = yDistance + (lootSize / 2) + (this.height / 5);

				const craftSlot1Item = toBeCraftedMap.get("craftSlot1Item");
				const craftSlot2Item = toBeCraftedMap.get("craftSlot2Item");

				// checks if the crafting system is ready to craft
				if (!this.toggle && craftSlot1Item && craftSlot2Item) {
					if ((craftSlot1Item.form == "page" && craftSlot2Item.form == "essence" &&
						craftSlot1Item.quantity >= craftSlot1Item.pagesToCraft &&
						craftSlot2Item.name == craftSlot1Item.essenceName &&
						craftSlot2Item.quantity >= craftSlot1Item.essenceToCraft
					    ) || (
						craftSlot1Item.form == "spellBook" && craftSlot2Item.form == "spellBook" &&
						craftSlot1Item.name == craftSlot2Item.name &&
						craftSlot1Item.level == craftSlot2Item.level)) {
						this.toggle = true;
						this.originalColor = "#008000";
						this.color = "#008000";
					}
				} else if (this.toggle && (!craftSlot1Item || !craftSlot2Item)) {
					this.toggle = false;
					this.originalColor = "#808080";
					this.color = "#808080";
				} else if (craftSlot1Item && craftSlot2Item) {
					if (craftSlot1Item.quantity < craftSlot1Item.pagesToCraft ||
						craftSlot2Item.name !== craftSlot1Item.essenceName ||
						craftSlot2Item.quantity < craftSlot1Item.essenceToCraft) {
						this.toggle = false;
						this.originalColor = "#808080";
						this.color = "#808080";
					}
				}
			}

			ctx.font = (fontSize * 0.8) + "px Trebuchet MS";
			ctx.fillStyle = "#000000";
			ctx.fillText(
				this.text,
				textX,
				textY);
		}
		if (this.name == "displayInventory") {
			this.x = window.innerWidth / 64 + window.innerWidth / 8;
			this.y = (window.innerHeight / 64) + (window.innerHeight / 18) * 0;
			let row = 0;
			let column = 0;
			let slotsPerRow = 5;
			this.width = (slotsPerRow * lootSize) + ((slotsPerRow + 1) * slotMargin);
			// the extra height is space for the heading "(lootSize / 2)"
			this.height = (slotsPerRow * lootSize) + ((slotsPerRow + 1) * slotMargin) + (lootSize / 2);

			for (let i = 0; i < inventoryArray.length; i++) {

				if (i >= slotsPerRow && i % slotsPerRow == 0) {
					row++;
					column += slotsPerRow;
				}

				let xDistance = this.x + (lootSize * (i - column)) + (slotMargin * (i - column + 1));
				// the extra height is space for the heading "(lootSize / 2)"
				let yDistance = this.y + slotMargin + ((slotMargin + lootSize) * row) + (lootSize / 2);
				inventoryArray[i].x = xDistance;
				inventoryArray[i].y = yDistance;

				// TODO: I think there's an inconsistency or ways to improve the code below
				if (leftClick && mouseHeldItem.length <= 1) {
					let distance = mouseClickX >= inventoryArray[i].x &&
						mouseClickX < lootSize + inventoryArray[i].x &&
						mouseClickY >= inventoryArray[i].y &&
						mouseClickY < lootSize + inventoryArray[i].y;
					if (distance && mouseHeldItem.length < 1) {
						inventoryArray[i].held = true;
						inventoryArray[i].from = "inventory";
						mouseHeldItem.push(inventoryArray[i]);
					}
					if (inventoryArray[i].held) {
						inventoryArray[i].x = mouseMoveX - (lootSize / 2);
						inventoryArray[i].y = mouseMoveY - (lootSize / 2);
					}
				// triggers when the item is unheld
				} else if (!leftClick && inventoryArray[i].held && mouseHeldItem.length >= 1) {
					inventoryArray[i].held = false;
					mouseHeldItem.splice(0, mouseHeldItem.length);
				}

				ctx.beginPath();
				ctx.roundRect(
					inventoryArray[i].x,
					inventoryArray[i].y,
					lootSize,
					lootSize,
					radiiSize);

				ctx.strokeStyle = inventoryArray[i].borderColor;
				ctx.lineWidth = lineThickness;
				ctx.stroke();
				ctx.font = (fontSize * 0.6) + "px 'Trebuchet MS'";
				ctx.fillStyle = "#000000";

				ctx.drawImage(
					inventoryArray[i].image,
					inventoryArray[i].x,
					inventoryArray[i].y,
					lootSize,
					lootSize);

				if (inventoryArray[i].level == null) inventoryArray[i].level = "";

				ctx.fillText(
					inventoryArray[i].quantity + "x" + inventoryArray[i].text + " " + inventoryArray[i].level,
					inventoryArray[i].x,
					inventoryArray[i].y - (slotMargin / 4));
			}
			// heading
			ctx.font = (fontSize * 1.5) + "px 'Trebuchet MS'";
			ctx.fillStyle = "#000000";
			ctx.fillText(
				"Inventory",
				this.x + slotMargin,
				this.y + (slotMargin * 2));
		}
		if (this.group == "spellBookSlot") {
			const xDistance = window.innerWidth / 2 - (((slotSize + slotMargin) * myGameCharacter.spellBookSlotsUnlocked) / 2) + (slotSize + slotMargin) * (this.index - 1);
			const yDistance = window.innerHeight - slotMargin - slotSize;
			this.x = xDistance;
			this.y = yDistance;
			this.width = slotSize;
			this.height = slotSize;
			let spellBookIndex = spellBooksArray.findIndex(element => element.index === this.index);
			if (spellBookIndex != -1) {
				this.text = spellBooksArray[spellBookIndex].text + " " + spellBooksArray[spellBookIndex].level;
			} else {
				this.text = "slot " + this.index;
			}
			ctx.font = (fontSize * 0.8) + "px Trebuchet MS";
			ctx.fillStyle = "#000000";
			ctx.fillText(
				this.text,
				this.x,
				this.y - (slotMargin / 2));
		}
        ctx.closePath();
	}

	hoverButton() {
		if (mouseMoveX >= this.x &&
			mouseMoveX <= this.x + this.width &&
			mouseMoveY >= this.y &&
			mouseMoveY <= this.y + this.height
		) {
			if (this.classification == "clickable" && !this.isHovered) {
				//console.log(this.color, darkenHexColor(this.color, 20),  "i ran first");
				this.isHovered = true;
				this.color = darkenHexColor(this.color, 20);
			}
		} else if (this.isHovered) {
			//console.log("i ran");
			this.isHovered = false;
			this.color = this.originalColor;
		}
	}

	clickButton() {
		if (leftClick &&
			mouseClickX >= this.x &&
			mouseClickX <= this.x + this.width &&
			mouseClickY >= this.y &&
			mouseClickY <= this.y + this.height
		) {
			// TODO: Add a function that makes you be able to add animation (animation for sliding in or out of the screen) to the buttons with less code used
			if (this.name == "nameInput" && !this.toggle) {
				this.toggle = true;
				this.color = darkenHexColor("#d0def5", 20);
				this.text = "";
			} else if (this.name == "nameInput" && this.toggle) {
				this.toggle = false;
				this.color = "#d0def5";
			}
			if (this.name == "playButton") {
				setUpPlayerName();
				gameplayScreen = true;
			}
			if (this.name == "settingsButton" && !this.toggle) {
				this.toggle = true;
				// settings buttons
				addButton(buttonLibrary.displaySettings, null);
				addButton(buttonLibrary.keyMovementButton, 0);
				addButton(buttonLibrary.mouseMovementButton, 1);
				addButton(buttonLibrary.followMouseMovementButton, 2);
			} else if (this.name == "settingsButton" && this.toggle) {
				this.toggle = false;
				buttonsMap.delete("displaySettings");
				buttonsMap.delete("keyMovementButton");
				buttonsMap.delete("mouseMovementButton");
				buttonsMap.delete("followMouseMovementButton");
			}
			if (this.name == "exitButton") {
				properlyRemoveCraftSlots();

				gameStarted = false;
				gameplayScreen = false;
				startMenuButtons = false;
				startMenuScreen = true;
			}
			if (this.name == "inventoryButton" && !this.toggle) {
				this.toggle = true;
				addButton(buttonLibrary.craftButton, null);
				addButton(buttonLibrary.displayInventory, null);
				
			} else if (this.name == "inventoryButton" && this.toggle) {
				this.toggle = false;
				buttonsMap.delete("displayInventory");
				buttonsMap.delete("craftButton");

				properlyRemoveCraftSlots();
			}
			if (this.name == "craftButton" && !this.toggle) {
				this.toggle = true;
				addButton(buttonLibrary.displayCrafting, null);
				addButton(buttonLibrary.craftSlot1, 1);
				addButton(buttonLibrary.craftSlot2, 2);
				addButton(buttonLibrary.activateCraft, 3);
				addButton(buttonLibrary.craftedItemSlot, 4);

			} else if (this.name == "craftButton" && this.toggle) {
				this.toggle = false;

				properlyRemoveCraftSlots()
			}
			
		}
		if (!leftClick &&
			mouseMoveX >= this.x &&
			mouseMoveX <= this.x + this.width &&
			mouseMoveY >= this.y &&
			mouseMoveY <= this.y + this.height
		) {
			if (this.group == "spellBookSlot") {
				if (mouseHeldItem.length > 0 && mouseHeldItem[0].codeClass == "spellBook" && !this.slotActive) {
					if (mouseHeldItem[0].from == "inventory") {
						mouseHeldItem[0].index = this.index;
						spellBooksArray.push(mouseHeldItem[0]);
						mouseHeldItem[0].held = false;
						this.slotActive = true;
						mouseHeldItem[0].onSlot = true;

						let heldItemIndex = inventoryArray.findIndex(element => element.name == mouseHeldItem[0].name && element.uniqueID == mouseHeldItem[0].uniqueID);
						inventoryArray.splice(heldItemIndex, 1);
						mouseHeldItem.splice(0, 1);

						// Save the whole array properly
						savedData.spellBooksArray = spellBooksArray;
						savedData.inventoryArray = inventoryArray;

						StorageManager.save("savedPlayerData", savedData);
					}
					else if (mouseHeldItem[0].from == "spellBookSlot") {
						mouseHeldItem[0].index = this.index;
						spellBooksArray.push(mouseHeldItem[0]);
						mouseHeldItem[0].held = false;
						this.slotActive = true;
						mouseHeldItem[0].onSlot = true;

						let heldItemIndex = spellBooksArray.findIndex(element => element.name == mouseHeldItem[0].name && element.uniqueID == mouseHeldItem[0].uniqueID);
						spellBooksArray.splice(heldItemIndex, 1);
						mouseHeldItem.splice(0, 1);

						// Save the whole array properly
						savedData.spellBooksArray = spellBooksArray;
						savedData.inventoryArray = inventoryArray;

						StorageManager.save("savedPlayerData", savedData);
					}
				}
			}
			if (this.name == "craftSlot1") {
				// checks if an item being placed into the slot is valid or not
				if (mouseHeldItem.length > 0 &&
					(mouseHeldItem[0].form == "page" || mouseHeldItem[0].form == "spellBook") &&
					(mouseHeldItem[0].from == "inventory" || mouseHeldItem[0].from == "spellBookSlot") &&
					mouseHeldItem[0].quantity >= 1 &&
					!this.slotActive)
				{
					mouseHeldItem[0].index = this.index;
					mouseHeldItem[0].location = this.name;

					toBeCraftedMap.set("craftSlot1Item", mouseHeldItem[0]);
					mouseHeldItem[0].held = false;
					this.slotActive = true;

					if (mouseHeldItem[0].from == "inventory") {
						let itemIndex = inventoryArray.findIndex(element => element.index == mouseHeldItem[0].index && element.location == mouseHeldItem[0].location);
						inventoryArray.splice(itemIndex, 1);
					} else if (mouseHeldItem[0].from == "spellBookSlot") {
						mouseHeldItem[0].held = false;
						mouseHeldItem[0].index = this.index;
						mouseHeldItem[0].onSlot = false;
						mouseHeldItem[0].spawned = false;

						let spellCoreIndex = spellsArray.findIndex(element => element.name == mouseHeldItem[0].spellCore.name && element.spellBookID == mouseHeldItem[0].uniqueID);
						spellsArray.splice(spellCoreIndex, 1);

						let spellBookIndex = spellBooksArray.findIndex(element => element.name == mouseHeldItem[0].name && element.uniqueID == mouseHeldItem[0].uniqueID);
						spellBooksArray.splice(spellBookIndex, 1);
					}
					mouseHeldItem.splice(0, mouseHeldItem.length);

					// Save the whole array properly
					savedData.inventoryArray = inventoryArray;
					savedData.spellBooksArray = spellBooksArray;

					StorageManager.save("savedPlayerData", savedData);
				} else if (mouseHeldItem.length == 0 && this.slotActive) {
					let craftSlot1Item = toBeCraftedMap.get("craftSlot1Item");
					craftSlot1Item.index = null;
					craftSlot1Item.location = null;
					this.slotActive = false;

					inventoryArray.push(craftSlot1Item);
					toBeCraftedMap.delete("craftSlot1Item");

					// Save the whole InventoryArray properly
					savedData.inventoryArray = inventoryArray;

					StorageManager.save("savedPlayerData", savedData);
				}
			}
			if (this.name == "craftSlot2") {
				// checks if an item being placed into the slot is valid or not
				if (mouseHeldItem.length > 0 &&
					(mouseHeldItem[0].form == "essence" || mouseHeldItem[0].form == "spellBook") &&
					(mouseHeldItem[0].from == "inventory" || mouseHeldItem[0].from == "spellBookSlot") &&
					mouseHeldItem[0].quantity >= 1 &&
					!this.slotActive)
				{
					mouseHeldItem[0].index = this.index;
					mouseHeldItem[0].location = this.name;

					toBeCraftedMap.set("craftSlot2Item", mouseHeldItem[0]);
					mouseHeldItem[0].held = false;
					this.slotActive = true;

					if (mouseHeldItem[0].from == "inventory") {
						let itemIndex = inventoryArray.findIndex(element => element.index == mouseHeldItem[0].index && element.location == mouseHeldItem[0].location);
						inventoryArray.splice(itemIndex, 1);
					} else if (mouseHeldItem[0].from == "spellBookSlot") {
						mouseHeldItem[0].held = false;
						mouseHeldItem[0].index = this.index;
						mouseHeldItem[0].onSlot = false;
						mouseHeldItem[0].spawned = false;

						let spellCoreIndex = spellsArray.findIndex(element => element.name == mouseHeldItem[0].spellCore.name && element.spellBookID == mouseHeldItem[0].uniqueID);
						spellsArray.splice(spellCoreIndex, 1);

						let spellBookIndex = spellBooksArray.findIndex(element => element.name == mouseHeldItem[0].name && element.uniqueID == mouseHeldItem[0].uniqueID);
						spellBooksArray.splice(spellBookIndex, 1);
					}
					mouseHeldItem.splice(0, mouseHeldItem.length);

					// Save the whole array properly
					savedData.inventoryArray = inventoryArray;
					savedData.spellBooksArray = spellBooksArray;

					StorageManager.save("savedPlayerData", savedData);
				} else if (mouseHeldItem.length == 0 && this.slotActive) {

					let craftSlot2Item = toBeCraftedMap.get("craftSlot2Item");
					craftSlot2Item.index = null;
					craftSlot2Item.location = null;
					this.slotActive = false;
					inventoryArray.push(craftSlot2Item);
					toBeCraftedMap.delete("craftSlot2Item");

					// Save the whole InventoryArray properly
					savedData.inventoryArray = inventoryArray;

					StorageManager.save("savedPlayerData", savedData);
				}
			}
			if (this.name == "activateCraft") {
				let craftSlot1Item = toBeCraftedMap.get("craftSlot1Item");
				let craftSlot2Item = toBeCraftedMap.get("craftSlot2Item");
				if (craftSlot1Item && craftSlot2Item) {
					if (craftSlot1Item.form == "page" && craftSlot2Item.form == "essence") {
						if (craftSlot1Item.quantity >= craftSlot1Item.pagesToCraft &&
							craftSlot2Item.name == craftSlot1Item.essenceName &&
							craftSlot2Item.quantity >= craftSlot1Item.essenceToCraft)
						{
							// consumes the page and essence required to craft a spellBook
							craftSlot1Item.quantity -= craftSlot1Item.pagesToCraft;
							craftSlot2Item.quantity -= craftSlot1Item.essenceToCraft;

							/* ensures that the slots are set back to inactive so that new spells can be crafted without bugging.
							without this code, in a situation where the last page or essence quantity is all consumed by the last craft,
							the game will bug and not let any other pages or essence be placed into their respective slot and crafted. */
							if (craftSlot1Item.quantity <= 0) {
								let craftSlot1 = buttonsMap.get("craftSlot1");
								craftSlot1.slotActive = false;
							}

							if (craftSlot2Item.quantity <= 0) {
								let craftSlot2 = buttonsMap.get("craftSlot2");
								craftSlot2.slotActive = false;
							}

							/* checks if there's an item at the craftedItemSlot and properly places the current item back to the inventory 
							so that there is space for the new crafted item */
							let craftedItemSlot = buttonsMap.get("craftedItemSlot");
							if (craftedItemSlot.slotActive) {
								let spellBook = toBeCraftedMap.get("spellBook");

								spellBook.index = null;
								spellBook.location = null;

								inventoryArray.push(spellBook);
								toBeCraftedMap.delete("spellBook");

								craftedItemSlot.slotActive = false;

								// Save the whole InventoryArray properly
								savedData.inventoryArray = inventoryArray;

								StorageManager.save("savedPlayerData", savedData);
							}

							// crafts a spell book
							let baseSpellBook = craftSlot1Item.spellBookName;
							let craftedSpellBook = new SpellBook(0, 0, null, 0, 0, 0, "#000000", baseSpellBook.appearance, baseSpellBook.name, generateID(), baseSpellBook.spell, baseSpellBook.spellCore, 1, baseSpellBook.levelStats, baseSpellBook.cooldown, baseSpellBook.text);

							// places the spell book inside the crafted item slot
							craftedSpellBook.index = craftedItemSlot.index;
							craftedSpellBook.location = craftedItemSlot.name;
							toBeCraftedMap.set("spellBook", craftedSpellBook);
							craftedItemSlot.slotActive = true;

							// deletes the items from craftSlot 1 and 2 once the crafting is complete and their quantity is 0
							if (craftSlot1Item.quantity == 0) {
								toBeCraftedMap.delete("craftSlot1Item");
							}
							if (craftSlot2Item.quantity == 0) {
								toBeCraftedMap.delete("craftSlot2Item");
							}
						}
					} else if (craftSlot1Item.form == "spellBook" && craftSlot2Item.form == "spellBook") {
						if (craftSlot1Item.name == craftSlot2Item.name &&
							craftSlot1Item.level == craftSlot2Item.level &&
							craftSlot1Item.level < craftSlot1Item.maxLevel &&
							craftSlot2Item.level < craftSlot2Item.maxLevel)
						{
							// ensures that the slots are set back to inactive so that new spells can be crafted without bugging.
							let craftSlot1 = buttonsMap.get("craftSlot1");
							let craftSlot2 = buttonsMap.get("craftSlot2");
								craftSlot1.slotActive = false;
								craftSlot2.slotActive = false;

							/* checks if there's an item at the craftedItemSlot and properly places the current item back to the inventory 
							so that there is space for the new crafted item */
							let craftedItemSlot = buttonsMap.get("craftedItemSlot");
							if (craftedItemSlot.slotActive) {
								let spellBook = toBeCraftedMap.get("spellBook");

								spellBook.index = null;
								spellBook.location = null;

								inventoryArray.push(spellBook);
								toBeCraftedMap.delete("spellBook");

								craftedItemSlot.slotActive = false;

								// Save the whole InventoryArray properly
								savedData.inventoryArray = inventoryArray;

								StorageManager.save("savedPlayerData", savedData);
							}

							// crafts a spell book
							let baseSpellBook = craftSlot1Item;
							let craftedSpellBook = new SpellBook(0, 0, null, 0, 0, 0, "#000000",
								baseSpellBook.appearance, baseSpellBook.name, generateID(),
								structuredClone(baseSpellBook.spell), structuredClone(baseSpellBook.spellCore),
								baseSpellBook.level + 1, structuredClone(baseSpellBook.levelStats),
								baseSpellBook.cooldown, baseSpellBook.text);
							console.log(craftedSpellBook.spell.speed);
							levelUpSpellBook(craftedSpellBook);

							// places the spell book inside the crafted item slot
							craftedSpellBook.index = craftedItemSlot.index;
							craftedSpellBook.location = craftedItemSlot.name;
							toBeCraftedMap.set("spellBook", craftedSpellBook);
							console.log("crafted spellBook:", toBeCraftedMap.get("spellBook"));
							craftedItemSlot.slotActive = true;

							// deletes the items from craftSlot 1 and 2 once the crafting is complete.
							toBeCraftedMap.delete("craftSlot1Item");
							toBeCraftedMap.delete("craftSlot2Item");
						}
					}
				}
			}
			if (this.name == "craftedItemSlot") {
				if (mouseHeldItem.length == 0 && this.slotActive) {

					let spellBook = toBeCraftedMap.get("spellBook");

					spellBook.index = null;
					spellBook.location = null;
					this.slotActive = false;

					inventoryArray.push(spellBook);
					toBeCraftedMap.delete("spellBook");

					// Save the whole InventoryArray properly
					savedData.inventoryArray = inventoryArray;

					StorageManager.save("savedPlayerData", savedData);
				}
			}
		}
	}
	// method called inside spellBook.js whenever there is sufficient mana
	startShaking(reason, duration, intensity) {
		this.isShaking = true;
		this.shakeStartTime = performance.now();
		this.shakeDuration = duration;
		this.shakeIntensity = intensity;
		this.shakeReason = reason;
		this.originalX = this.x;
		this.originalY = this.y;
		if (reason == "insufficientMana") {
			this.color = "#800000";
			this.originalColor = buttonLibrary.manaBar.color;
		}
	}

	updateShake(currentTime) {	
		const elapsed = currentTime - this.shakeStartTime;
		if (elapsed < this.shakeDuration) {
			this.x = this.originalX + (Math.random() - 0.5) * this.shakeIntensity;
			this.y = this.originalY + (Math.random() - 0.5) * this.shakeIntensity;
		} else {
			this.x = this.originalX;
			this.y = this.originalY;
			this.color = this.originalColor;
			this.isShaking = false;
			this.shakeStartTime = null;
		}
	}
}
