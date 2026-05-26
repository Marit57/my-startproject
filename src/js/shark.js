import { Actor, Keys, Vector } from "excalibur"
import { Resources } from './resources.js';
import { Fish } from "./fish.js";

export class Shark extends Actor {

    speed = 200;

    constructor(){
        super({width: Resources.Shark.width, height: Resources.Shark.height});
        console.log("i am a shark");
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Shark.toSprite());
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0,0);
        
    }

    // onCollisionStart(engine, other){
    //     if(other.owner instanceof Fish){
    //         other.owner.kill();
    //     }
    // }
    
    onPreUpdate(engine){
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.Left)){
            xspeed = -this.speed;
        }

        if (engine.input.keyboard.isHeld(Keys.Right)){
            xspeed = this.speed;
        }

        if (engine.input.keyboard.isHeld(Keys.Up)){
            yspeed = -this.speed;
        }

        if (engine.input.keyboard.isHeld(Keys.Down)){
            yspeed = this.speed;
        }

        this.vel = new Vector(xspeed, yspeed);
    }
}