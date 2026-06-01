import { Actor, Color, Label } from "excalibur";

export class UI extends Actor {
    constructor() {
        super();
        this.score = 0;
        this.scoreLabel = new Label({
                color: Color.Yellow,
                x: 10,
                y: 10,
                text: `Score: ${this.score}`
            });
        this.addChild(this.scoreLabel)
    }

    updateScore() {
        this.score++
        this.scoreLabel.text = `Score: ${this.score}`;
    }
}