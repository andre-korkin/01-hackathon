import {Module} from '../core/module'
import styles from './clicks.module.css'

export class ClicksModule extends Module {
    constructor(type, text, timeTotal) { // Длбавляем время для таймера кликов в секундах вызов модуля просиходит по схеме new ClickModule(type, text, seconds)
        super(type, text)
        if (!timeTotal) {
            throw new Error('Please specify "timeTotal" param')
        }
        this.timeTotal = Number(timeTotal) * 100
        this.text = `${text} за ${this.timeTotal * .01} секунд`
        this.timer = null
        this.clicksTotal = 0
    }


    static getHTML() {
        return `
        <div class="${styles.clicks__container}">
            <div class="${styles.clicks__alert}">
                <h1 class="${styles.clicks__title}">Идет подсчет "кликов".</h1>
                <div class="${styles.clicks__timer}">
                    Осталось <span id="timer">00.00</span> секунд
                </div>
            </div>
        </div>
       `
    }

    static getZero(num) {
       return  (num >= 0 && num < 10) ? '0' + num : num
    }

    countdown() {
        if (this.timeTotal === 0 || !this.timeTotal) {
            this.finish()
        } else {
            let current = --this.timeTotal
            const timerHTML = document.querySelector('#timer')
            const ss = Math.floor(current / 100)
            const ms = this.timeTotal - Math.floor(current / 100) * 100
            timerHTML.innerHTML = `${ClicksModule.getZero(ss)}.${ClicksModule.getZero(ms)}`
        }
    }

    start() {
        if (!this.timer) {
            this.timer = setInterval(() => this.countdown(), 10)
            document.body.classList.toggle(`${styles.unselectable}`)
            const clicksCounter = document.createElement('div')
            clicksCounter.classList.add(`${styles.clicks__counter}`)
            clicksCounter.innerHTML = `00`
            document.querySelector(`.${styles.clicks__container}`).append(clicksCounter)
        }
    }

    finish() {
        clearInterval(this.timer)
        document.querySelector(`.${styles.clicks__title}`).innerHTML = `Поздравляем!`
        document.querySelector(`.${styles.clicks__timer}`).innerHTML = `Вы накликали ${this.clicksTotal} раз(а).`
        document.querySelector(`.${styles.clicks__counter}`).remove()
        document.body.classList.toggle(`${styles.unselectable}`)
        this.timer = null
    }

    trigger() {
        document.body.innerHTML = ClicksModule.getHTML()
        this.start()
        document.body.addEventListener('click', (e) => {
            if (this.timer) {
                ++this.clicksTotal
                document.querySelector(`.${styles.clicks__counter}`).innerHTML = `${ClicksModule.getZero(this.clicksTotal)}`
            }
        })
    }
}


