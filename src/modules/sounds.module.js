import {Module} from '../core/module'
import {random} from '../utils'


export class SoundsModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.sounds = [
            'https://actions.google.com/sounds/v1/sports/bowling_single.ogg',
            'https://actions.google.com/sounds/v1/sports/basketball_bounce_and_roll.ogg',
            'https://actions.google.com/sounds/v1/tools/drill_motor_dopper.ogg',
            'https://actions.google.com/sounds/v1/tools/hammer_on_cement.ogg',
            'https://actions.google.com/sounds/v1/doors/door_slams_fast_four_times.ogg',
            'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg',
            'https://actions.google.com/sounds/v1/cartoon/cartoon_cowbell.ogg',
            'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg'
        ]
    }

    trigger() {
        const audio = new Audio(this.sounds[random(0, this.sounds.length-1)])
        audio.pause()
        audio.currentTime = 0
        audio.addEventListener("canplaythrough", event => audio.play());
    }
}