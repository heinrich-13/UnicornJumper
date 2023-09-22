import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    bgSpeed: 2,
    hero: {
        position: {
            x: 350,
            y: 640
        },
        jumpSpeed: 10,
        maxJumps: 2,
    },
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    scenes: {
        "Game": Game
    },
    platforms: {
        moveSpeed: -2,
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
        },
    },
    rewardItems: {
        chance: 0.4,
        offset: {
            min: 100,
            max: 200
        }
    },
    score: {
        x: 10,
        y: 10,
        anchor: 0,
        style: {
            fontFamily: "Verdana",
            fontWeight: "bold",
            fontSize: 44,
            fill: ["pink"]
        }
    },
};
