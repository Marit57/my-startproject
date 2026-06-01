import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Shark } from './shark.js'
import { ScaryFish } from './scaryfish.js'
import { StartScene } from './scenes/startscene.js'
import { LevelOne } from './scenes/levelone.js'
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
        this.addScene("start", new StartScene());
        this.addScene("levelone", new LevelOne());
        this.goToScene("start");

        console.log("start de game!")
    }
       
}

new Game()
