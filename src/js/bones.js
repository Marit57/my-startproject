import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Bones extends Actor {
    constructor(pos, scale) {
        super();
        this.pos = new Vector(pos.x, pos.y);
        this.vel = new Vector(0, 100);
        this.scale = scale;
        this.graphics.use(Resources.Bones.toSprite());
    }
}
