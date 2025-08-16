const textLibrary = {
    gameTitle: {
        x: 0,
        y: 0,
        text: "Spelz.io",
        fontSize: 100,
        fillColor: "#FFFFFF",
        strokeColor: "#000000",
        border: true,
        fontFamily: "sans serif",
        name: "gameTitle",
        group: null,
        classification: "header",
        zIndex: 10,
        textInRect: false
    },
    gameOverText: {
        x: 0,
        y: 0,
        text: "GAME OVER",
        fontSize: 100,
        fillColor: "#0b0414",
        strokeColor: "#0b0414",
        border: false,
        fontFamily: "sans serif",
        name: "gameOverText",
        group: null,
        classification: "header",
        zIndex: 10,
        textInRect: false
    },
    playerScoreText: {
        x: 0,
        y: 0,
        text: "score: null",
        fontSize: 20,
        fillColor: "#0b0414",
        strokeColor: "#0b0414",
        border: false,
        fontFamily: "sans serif",
        name: "playerScoreText",
        group: null,
        classification: "normal",
        zIndex: 10,
        textInRect: false
    }
}
class Text {
    constructor(x, y, text, fontSize, fillColor, strokeColor, border, fontFamily, name, group, classification, zIndex, textInRect = false) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.fontSize = fontSize;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.border = border;
        this.fontFamily = fontFamily;
        this.name = name;
        this.group = group;
        this.classification = classification;
        this.zIndex = zIndex;
        this.textInRect = textInRect;

        this.codeClass = "text";
        this.originalX = this.x;
        this.originalY = this.y;
        this.isHovered = false;
    }

    draw(ctx) {

        if (this.classification == "header") {
            ctx.font = "bold " + this.fontSize + "px " + this.fontFamily;
        } else {
            ctx.font = this.fontSize + "px " + this.fontFamily;
        }

        // Responsive centering
        if (this.name === "gameTitle") {
            const metrics = ctx.measureText(this.text);
            const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
            this.x = (window.innerWidth - metrics.width) / 2;
            this.y = (window.innerHeight + height) / 3.5;
        }
        if (this.name === "gameOverText") {
            const metrics = ctx.measureText(this.text);
            const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
            this.x = (window.innerWidth - metrics.width) / 2;
            this.y = (window.innerHeight + height) / 3.5;
        }
        if (this.name === "playerScoreText") {
            const metrics = ctx.measureText(this.text);
            const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
            this.x = (window.innerWidth - metrics.width) * 0.5;
            this.y = (window.innerHeight + height) * 0.40;
            this.text = "score: " + myGameCharacter.score;
        }

        if (this.textInRect) {
            // idk if this works yet
            const padding = 8;
            const metrics = ctx.measureText(this.text);
            const rectWidth = metrics.width + padding * 2;
            const rectHeight = this.fontSize + padding;
            ctx.beginPath();
            ctx.roundRect(this.x - padding, this.y - this.fontSize, rectWidth, rectHeight, 5);
            ctx.fillStyle = "#00000044"; // semi-transparent bg for example
            ctx.fill();
        }
        ctx.fillStyle = this.fillColor;
        ctx.fillText(this.text, this.x, this.y);

        
        if (this.border) {
            ctx.lineWidth = lineThickness * 1.5;
            ctx.strokeStyle = this.strokeColor;
            ctx.strokeText(this.text, this.x, this.y);
        }
    }
}