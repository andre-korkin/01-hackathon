import {Module} from '../core/module'
import styles from './clicks.module.css'

export class ClicksModule extends Module {
    clicksTotal = 0
    count = 0

    constructor(type, text, timeTotal) { // Длбавляем время для таймера кликов в секундах вызов модуля просиходит по схеме new ClickModule(type, text, seconds)
        super(type, text)
        if (!timeTotal) {
            throw new Error('Please specify "timeTotal" param')
        }
        this.timeTotal = Number(timeTotal)
        this.text = `${text} за ${this.timeTotal * .01} секунд`
        this.timer = null

        this.alertContainer
        this.alertTitle
        this.alertTimer
        this.alertTimerClock
        this.alertClicksCounter
    }

    getHTML() {
        const container = document.createElement('div')
        const alert = document.createElement('div')
        const title = document.createElement('h1')
        const timer = document.createElement('div')
        const counter = document.createElement('div')
        // const counterClock = document.createElement('span')

        container.classList.add(`${styles.clicks__container}`)
        alert.classList.add(`${styles.clicks__alert}`)
        title.classList.add(`${styles.clicks__title}`)
        timer.classList.add(`${styles.clicks__timer}`)
        counter.classList.add(`${styles.clicks__counter}`)
        // counterClock.id = 'timer'

        this.alertContainer = container
        this.alertTitle = title
        this.alertTimer = timer
        this.alertClicksCounter = counter
        // this.alertClicksClock = counterClock
        this.alertContainer.append(alert, this.alertClicksCounter)
        alert.append(this.alertTitle, this.alertTimer)

        document.body.append(this.alertContainer)
    }

    countdown() {
        if (this.count <= 0 || !this.count) {
            this.finish()
        } else {
            const ss = Math.floor(this.count / 100)
            const ms = this.count - Math.floor(this.count / 100) * 100
            this.alertClicksClock.innerHTML = `${this.getZero(ss)}.${this.getZero(ms)}`
            console.log(this.count)
        }
    }


    start() {

        if (!this.timer) {
            document.body.classList.toggle(`${styles.unselectable}`)
            this.alertTitle.innerHTML = `Идет подсчет "кликов".`
            this.alertTimer.innerHTML = `Осталось <span id="timer"></span> секунд`
            this.alertClicksClock = this.alertTimer.querySelector('#timer')
            this.alertClicksCounter.innerHTML = `00`
            this.count = this.timeTotal
            this.timer = setInterval(()=>{
                this.countdown()
                this.count -= 1
            }, 1000)
        }
        document.addEventListener('click', () => {
            if (this.timer) {
                this.clicksTotal += 1
                console.log(this.clicksTotal)
                this.alertClicksCounter.innerHTML = `${this.getZero(this.clicksTotal)}`
            }
        })
    }

    getZero(num) {
        return (num >= 0 && num < 10) ? '0' + num : num
    }

    finish() {
        this.timer = null
        this.alertTitle.innerHTML = `Поздравляем!`
        this.alertTimer.innerHTML = `Вы накликали ${this.clicksTotal} раз(а).`
        this.alertClicksCounter.remove()
        clearInterval(this.timer)
        this.clicksTotal = 0

        document.body.classList.toggle(`${styles.unselectable}`)

        setTimeout(() => {
            this.alertContainer.remove()
        }, 3000)
    }

    trigger() {
        this.getHTML()
        this.start()

    }
}


