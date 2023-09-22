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
        App.start("Game");
    }
}
