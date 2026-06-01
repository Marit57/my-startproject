import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";


export class Bubble extends Actor {
    constructor(pos) {
        super({width: Resources.Bubble.width, height: Resources.Bubble.height});
        this.pos = new Vector(pos.x, pos.y);
        this.vel = new Vector(500, 0);
        this.graphics.use(Resources.Bubble.toSprite());
        this.events.on("exitviewport", (e) => this.kill());
    }

}