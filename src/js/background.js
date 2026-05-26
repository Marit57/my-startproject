import { Actor, Vector, ImageSource } from "excalibur"
import BackgroundImg from '../images/water.jpg'


export class Background extends Actor {
    
    constructor(){
    super({
        pos: new Vector(0,0),
        width: 1280,
        height: 720,
        anchor: new Vector(0,0)
    });
    this.graphics.use(new ImageSource(BackgroundImg).toSprite());
    }

}