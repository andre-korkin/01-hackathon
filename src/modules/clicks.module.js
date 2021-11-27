import { Module } from '../../core/module'
import styles from './clicks.module.css'
export class ClicksModule extends Module {
    constructor(totalTime) {
        super('clicks', 'sadasd')
        if (!totalTime) {
            throw new Error('Please specify "totalTime" param')
        }
        this.totalTime = totalTime
        this.clicksTotal = 0
    }
    countdown() {
        if (time === 0) {
            alert(`фсё`)
            this.finish()
        } else {
            const timer = document.querySelector('#timer')
            const ss = Math.floor((tt - mi * 60 * 100) / 100)
            const ms = tt - Math.floor(tt / 100) * 100
            timer.innerHTML = `${fillZero(ss)}.${fillZero(ms)}`
        }
    }
    fillZero(num) {
        return num < 10 ? '0' + num : num
    }
    start() {
        const container = document.createElement('div')
        container.classList.add(`${styles.clicks__container}`)

        const alert = document.createElement('div')
        alert.classList.add(`${styles.clicks__alert}`)

        const alertTitle = document.createElement('h1')
        alertTitle.classList.add(`${styles.clicks__title}`)
        alertTitle.innerText = 'Идет подсчет "кликов".'

        const alertTimer = document.createElement('div')
        alertTimer.classList.add(`${styles.clicks__timer}`)
        alertTimer.innerHTML = `<p>Осталось <span id="timer">00.00</span> секунд</p>`

        const alertResult = document.createElement('div')
        alertResult.classList.add(`${styles.clicks__result}`)
        alert.append(alertTitle, alertTimer, alertResult)
        // alert.innerHTML = `Осталось ${this.totalTime} секунд`
        container.append(alert)

        document.body.append(container)
    }
    finish() {
        console.log(`<h1>Cчет <span class='primary'>${this.clicksTotal}</span></h1>`)
    }
    run() {

        this.start()
    }

}