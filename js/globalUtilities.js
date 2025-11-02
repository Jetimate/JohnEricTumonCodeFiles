let savedData = JSON.parse(localStorage.getItem("savedPlayerData")) || {};

//savedData.health ??= 100;
//savedData.mana ??= 5;
savedData.maxHealth ??= 100;
savedData.maxMana ??= 5;
savedData.healthRegen ??= 0.01;
savedData.manaRegen ??= 0.005;

savedData.isFirstTimePlaying ??= true;
savedData.name = savedData.name?.trim() || "unnamed player";
savedData.experience ??= 0;
savedData.maxExperience ??= 100;
savedData.level ??= 0;
savedData.spellBookSlotsUnlocked ??= 4;
savedData.summonLimit ??= 20;
savedData.score ??= 0;
savedData.spellBooksArray ??= [];
savedData.inventoryArray ??= [];

localStorage.setItem("savedPlayerData", JSON.stringify(savedData));

const constantPlayerSpeed = 7.5; //5
let keyMovement = true;
let mouseMovement = false;
let followMouseMovement = false;

let startMenuScreen = true;
let startMenuButtons = false;
let gameplayScreen = false;
let gameStarted = false;

let resizePending = false;
const keys = {
	KeyW: false,
	KeyA: false,
	KeyS: false,
	KeyD: false,

	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false,

	Digit1: false,
	Digit2: false,
	Digit3: false,
	Digit4: false,
	Digit5: false,
	Digit6: false,
	Digit7: false,
	Digit8: false,
	Digit9: false,
	Digit0: false,

	ShiftLeft: false,
	ShiftRight: false,

	Space: false,
	Backspace: false,
	Enter: false,

	KeyB: false,
	KeyC: false,
	KeyE: false,
	KeyF: false,
	KeyG: false,
	KeyH: false,
	KeyI: false,
	KeyJ: false,
	KeyK: false,
	KeyL: false,
	KeyM: false,
	KeyN: false,
	KeyO: false,
	KeyP: false,
	KeyQ: false,
	KeyR: false,
	KeyT: false,
	KeyU: false,
	KeyV: false,
	KeyX: false,
	KeyY: false,
	KeyZ: false
};
let lastKeyPressed = null;

// Track if the key has already fired a "pressed once" event
const keyPressedOnce = {};

// Initialize keyPressedOnce for all keys in keys
for (const key in keys) {
	keyPressedOnce[key] = false;
}

let keyDown = false;
let keyUp = true;

let generatedID = 0;
let gameTime = 0;

let isMouseDown = false;
let leftClick = false;
let rightClick = false;

let mouseMoveX = null;
let mouseMoveY = null;
let mouseDownMoveX = null;
let mouseDownMoveY = null;
let mouseClickX = null;
let mouseClickY = null;
let worldMouseClickX = null;
let worldMouseClickY = null;
let mouseReleaseX = null;
let mouseReleaseY = null;
let mouseWorldX = null;
let mouseWorldY = null;
let playerTargetX = null;
let playerTargetY = null;
let castMouseX = null;
let castMouseY = null;

let mobsArray = [];
let lootsArray = [];
let inventoryArray = [];

let buttonsMap = new Map();
let textsMap = new Map();
let spellBooksArray = [];
let spellsArray = [];
let mouseHeldItem = [];
let toBeCraftedMap = new Map();

let manaBuildUp = 0;
const spellKnockbackDistance = 5;

let baseSize = ((screen.width + screen.height) * 0.2) + ((window.innerWidth + window.innerHeight) * 0.8);
let lootSize = baseSize * 0.025;
let slotSize = baseSize * 0.03;
let slotMargin = baseSize * 0.005;
let radiiSize = baseSize * 0.002;
let miniButtonSize = baseSize * 0.015;
let buttonMargin = baseSize * 0.005;
let lineThickness = baseSize * 0.0008;
let fontSize = baseSize * 0.00575;

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

let statsBarX = window.innerWidth * 0.004;
let statsBarY = window.innerHeight * 0.008;
let statsBarWidth = ((screen.width * 0.6) + (window.innerWidth * 0.4)) / 8;
let statsBarHeight = ((screen.height * 0.6) + (window.innerHeight * 0.4)) / 24;

const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

// set this atleast once
// TODO fix this code... it is not working as intended. it must make the screen load
// with the gray background expanding throughout the whole screen at the beginning
let newWidth = window.innerWidth;
let newHeight = window.innerHeight;
let dpr = window.devicePixelRatio || 1;

canvas.width = newWidth * dpr;
canvas.height = newHeight * dpr;
canvas.style.width = newWidth + "px";
canvas.style.height = newHeight + "px";

window.addEventListener('contextmenu', event => {
	event.preventDefault();
});
var myGame = {
	canvas: document.getElementById("mycanvas"), // splice
	start: function () {
		this.context = this.canvas.getContext("2d");
		resizeCanvas(); // Set initial size
		requestAnimationFrame(updateCanvas);
	},
	clear: function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
}

window.addEventListener("beforeunload", () => {
	if (myGameCharacter && myGameCharacter.state !== "dead") {
		properlyRemoveCraftSlots()
		// Move items from toBeCraftedMap to inventoryArray before saving and exiting
		for (const [key, item] of toBeCraftedMap.entries()) {
			inventoryArray.push(item);
		}
		toBeCraftedMap.clear();

		StorageManager.saveAll();
	}
});

window.addEventListener("resize", () => {
	resizePending = true;
});

window.addEventListener('click', function (event) {
	const rect = canvas.getBoundingClientRect();
	mouseReleaseX = event.clientX - rect.left;
	mouseReleaseY = event.clientY - rect.top;
	//console.log("mouseRelease", mouseReleaseX, mouseReleaseY);
});

window.addEventListener('mousedown', (event) => {
	//console.log("mousedown");
	isMouseDown = true;
	if (event.button == 0) {
		leftClick = true;

	}
	if (event.button == 2) {
		rightClick = true;

		playerTargetX = mouseWorldX - biome1.x;
		playerTargetY = mouseWorldY - biome1.y;

		myGameCharacter.hasTarget = true;
	}
	const rect = canvas.getBoundingClientRect();

	mouseClickX = event.clientX - rect.left;
	mouseClickY = event.clientY - rect.top;

	if (gameplayScreen) {
		worldMouseClickX = ((mouseClickX / camera.zoom) + camera.x) - biome1.x;
		worldMouseClickY = ((mouseClickY / camera.zoom) + camera.y) - biome1.y;
	} else {
		//console.warn("Camera not set. Skipping worldMouseClick calculations.");
	}
	
	buttonsMap.forEach((value, key) => {
		value.clickButton();
	});

	if (gameplayScreen) {
		biome1.clickImage(biome1);
	} else {
		//console.warn("biome not set. skipping line of code.");
	}
});

window.addEventListener('mouseup', (event) => {
	//console.log("mouseup");
	isMouseDown = false;
	if (event.button == 0) {
		leftClick = false;
	}
	if (event.button == 2) {
		rightClick = false;
	}
	// TODO: make it so that only spellSlots are called instead of the entire buttons existance
	buttonsMap.forEach(button => {
		button.clickButton();
	});
});

window.addEventListener('mousemove', (event) => {
	//console.log("mousemove");
	const rect = canvas.getBoundingClientRect();
	mouseMoveX = event.clientX - rect.left;
	mouseMoveY = event.clientY - rect.top;

	if (isMouseDown) {
		mouseDownMoveX = event.clientX - rect.left;
		mouseDownMoveY = event.clientY - rect.top;
	}

	buttonsMap.forEach((value, key) => {
		value.hoverButton();
	});
});
// Key down event listener
window.addEventListener('keydown', (event) => {
	keyDown = true;
	if (keys.hasOwnProperty(event.code)) {
		if (!keys[event.code]) {
			// Key was not previously pressed, so register a "pressed once"
			keyPressedOnce[event.code] = true;
		}
		keys[event.code] = true; // mark key as pressed
		if (event.code == "KeyX") {
			console.log(event.code, "Clearing local storage data");

			// Clear all local storage
			localStorage.clear();
		}
	}
	//console.log(event);
	lastKeyPressed = event.key;
});

// Key up event listener
window.addEventListener('keyup', (event) => {
	keyDown = false;
	if (keys.hasOwnProperty(event.code)) {
		keys[event.code] = false;          // mark key as released
		keyPressedOnce[event.code] = false; // reset pressed once flag on release
	}
	if (event.code in keys) {
		keys[event.code] = false;
	}
});
function generateID() {
	//console.log(generatedID + 1);
	return generatedID++;
}

function darkenHexColor(hex, percent) {
	// Remove "#" if present
	hex = hex.replace(/^#/, '');

	// Parse r, g, b values
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	// Calculate the darkened values
	r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent / 100))));
	g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent / 100))));
	b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent / 100))));

	// Convert back to hex with padding
	const toHex = (value) => value.toString(16).padStart(2, '0');

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getDistance(circle1, circle2) {
	let a = circle2.y - circle1.y;
	let b = circle2.x - circle1.x;
	return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}

function properlyRemoveCraftSlots() {
	let displayCraftingButton = buttonsMap.get("displayCrafting");
	if (displayCraftingButton) {
		// removing the craftSlot1 properly
		let craftSlot1Item = toBeCraftedMap.get("craftSlot1Item");
		if (craftSlot1Item) {
			let craftSlot1 = buttonsMap.get("craftSlot1");

			craftSlot1Item.index = null;
			craftSlot1Item.location = null;
			craftSlot1.slotActive = false;

			inventoryArray.push(craftSlot1Item);
			toBeCraftedMap.delete("craftSlot1Item");
		}
		// removing the craftSlot2 properly
		let craftSlot2Item = toBeCraftedMap.get("craftSlot2Item");
		if (craftSlot2Item) {
			let craftSlot2 = buttonsMap.get("craftSlot2");

			craftSlot2Item.index = null;
			craftSlot2Item.location = null;
			craftSlot2.slotActive = false;

			inventoryArray.push(craftSlot2Item);
			toBeCraftedMap.delete("craftSlot2Item");
		}
		// removing the craftedItemSlot properly
		let spellBook = toBeCraftedMap.get("spellBook");
		if (spellBook) {
			let craftedItemSlot = buttonsMap.get("craftedItemSlot");

			spellBook.index = null;
			spellBook.location = null;
			craftedItemSlot.slotActive = false;

			inventoryArray.push(spellBook);
			toBeCraftedMap.delete("spellBook");
		}
		buttonsMap.delete("craftSlot1");
		buttonsMap.delete("craftSlot2");
		buttonsMap.delete("activateCraft");
		buttonsMap.delete("craftedItemSlot");
		buttonsMap.delete("displayCrafting");

		// Save the whole array properly
		savedData.spellBooksArray = spellBooksArray;
		savedData.inventoryArray = inventoryArray;

		StorageManager.save("savedPlayerData", savedData);
	}
}