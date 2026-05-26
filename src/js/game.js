import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Shark } from './shark.js'
import { ScaryFish } from './scaryfish.js'
// import { Background } from './background.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Fish();
        for (let j = 0; j < 14; j++) {
            this.add(new Fish());
        }

        const scaryFish = new ScaryFish();
        for (let j = 0; j < 14; j++) {
            this.add(new ScaryFish());
        }

        const shark = new Shark();
        this.add(shark);

        for (let i = 0; i < 100; i++) {
            this.createBubble();
        }
    }


    createBubble(){
        const bubble = new Actor();
        bubble.graphics.use(Resources.Bubble.toSprite());
        const randomX = Math.random() * this.drawWidth;
        const randomY = Math.random() * 1000 + (this.drawHeight - Resources.Bubble.height / 2);
        bubble.pos = new Vector(randomX, randomY);
        bubble.vel = new Vector(0, -(Math.random() * 10 + 20));
        this.add(bubble);
    }
    
}

new Game()
