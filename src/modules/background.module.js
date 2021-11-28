import {Module} from '../core/module'
import {getRandomColor, random} from '../utils'


export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.fones = [
            '../src/assets/img/layer_1_000.png',
            '../src/assets/img/layer_1_fff.png',
            '../src/assets/img/layer_2_000.png',
            '../src/assets/img/layer_2_fff.png',
            '../src/assets/img/layer_3_000.png',
            '../src/assets/img/layer_3_fff.png',
        ]
    }

    trigger() {
        document.body.style.backgroundColor = getRandomColor()
        document.body.style.backgroundImage = `url(${this.fones[random(0, 5)]})`
    }
}