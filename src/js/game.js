import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

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
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(500, 300)
        fish.vel = new Vector(-10,0)
        fish.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(fish)

        const shark = new Actor()
        shark.graphics.use(Resources.Shark.toSprite())
        shark.pos = new Vector(300, 150)
        shark.vel = new Vector(30, 0)
        shark.events.on("exitviewport", (e) => this.sharkRight(e))
        this.add(shark)
    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, 300)
    }

    sharkRight(e) {
        e.target.pos = new Vector(0, 150)
    }
}

new Game()
