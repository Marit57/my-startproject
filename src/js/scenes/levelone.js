import { Actor, Font, Label, Scene, Vector } from "excalibur";
import { Shark } from "../shark";
import { ScaryFish } from "../scaryfish";
import { Fish } from "../fish";
import { Resources } from "../resources";
import { UI } from "../ui";

export class LevelOne extends Scene {
    shark;
    ui;

    onInitialize(engine) {

        for (let j = 0; j < 14; j++) {
            this.add(new Fish());
        }

        for (let j = 0; j < 14; j++) {
            this.add(new ScaryFish());
        }

        this.shark = new Shark();
        this.ui = new UI();
        this.add(this.shark);
        this.add(this.ui);

    }
    }

