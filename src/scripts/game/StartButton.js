import * as PIXI from "pixi.js";
import {App} from "../system/App";


export class StartButton extends PIXI.Text {
    constructor() {
        super("Start Game", {fill: "purple"});
        this.x = App.config.startButton.x;
        this.y = App.config.startButton.y;
        this.anchor.set(App.config.startButton.anchor);
        this.interactive = true;
        this.buttonMode = true;
        this.on("pointerdown", this.startGame.bind(this));
    }

    startGame() {
        window.location.reload();
    }
}

export class RestartButton extends PIXI.Text {
    constructor() {
        super("Restart Game", {fill: "purple"});
        this.x = App.config.restartButton.x;
        this.y = App.config.restartButton.y;
        this.anchor.set(App.config.restartButton.anchor);
        this.interactive = true;
        this.buttonMode = true;
        this.on("pointerdown", this.restartGame.bind(this));
    }

    restartGame() {
        window.location.reload();
    }
}
