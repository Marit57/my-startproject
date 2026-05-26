import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Shark } from "./shark.js";

export class Fish extends Actor {
    sprite;

    constructor(){
        super({width: Resources.Fish.width, height: Resources.Fish.height});
        console.log("i am a fish");
    

    
        this.sprite = Resources.Fish.toSprite();
        this.graphics.use(this.sprite);

        this.pos = new Vector(Math.random() * 255, Math.random() * 255);
        this.vel = new Vector(Math.random() * -150 - 50, 0);
        
        const sc = Math.random() * 2;
        this.scale = new Vector(sc, sc);

        this.events.on("exitviewport", (e) => this.resetPosition(e));
    }


    resetPosition(e) {
        const rightside = this.scene.engine?.drawWidth;
        this.pos = new Vector(Math.random() * 400 + rightside, Math.random() * 600);
        this.vel = new Vector(Math.random() * -150 - 50, 0);
    }

    onCollisionStart(engine, other){
        if(other.owner instanceof Shark){
            this.kill();
        }
    }
}