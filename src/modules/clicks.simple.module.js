import {Module} from '../core/module'
import styles from './clicks.module.css'

export class ClicksModule extends Module {

    constructor(type, text, timeTotal) { // Длбавляем время для таймера кликов в секундах вызов модуля просиходит по схеме new ClickModule(type, text, seconds)
        super(type, text)
        if (!timeTotal) {
            throw new Error('Please specify "timeTotal" param')
        }
        this.timeTotal = Number(timeTotal) * 100
    }

    trigger() {
        let clicksTotal = 0
        document.body.addEventListener('click', (e) => {
            ++clicksTotal
            console.log(clicksTotal)
        })
    }
}


