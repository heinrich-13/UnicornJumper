import { Tools } from "../system/Tools";
import { GameScene } from "./GameScene";

export const Config = {
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    bgSpeed: 2,
    score: {
        x: 10,
        y: 70,
        anchor: 0,
        style: {
            fontFamily: "Comic Sans MS",
            fontWeight: "bold",
            fontSize: 60,
            fill: ["pink"]
        }
    },
    rewardItems: {
        chance: 0.4,
        offset: {
            min: 100,
            max: 200
        }
    },
    platforms: {
        moveSpeed: -1.5,
        ranges: {
            rows: {
                min: 2,
                max: 6
            },
            cols: {
                min: 3,
                max: 9
            },
            offset: {
                min: 60,
                max: 200
            }
        }
    },
    hero: {
        jumpSpeed: 10,
        maxJumps: 2,
        position: {
            x: 350,
            y: 640
        }
    },
    scenes: {
        "Game": GameScene
    },
    startButton: {
        x: 10,
        y: 10,
        anchor: 0,
        buttonMode: true,
        interactive: true
    },
    restartButton: {
        x: 10,
        y: 45,
        anchor: 0,
        buttonMode: true,
        interactive: true
    }
};
