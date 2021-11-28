import {Module} from '../core/module';


export class ClicksModule extends Module {
    #sec = 5

    constructor(type, text) {
        super(type, text)
        this.body = document.querySelector('body')
        this.countClicks = 0
        this.time = this.#sec
        this.countBlock()
    }


    trigger() {
        this.clicker()
        this.start()
    }

    start(){
        this.timer = setInterval(() => {
            this.showTimer()
            if (this.time > 0) {
                this.time--
            } else {
                clearInterval(this.timer)
                this.closeResult()
            }
        }, 1000)
    }

    countBlock() {
        this.block = document.createElement('span')
        this.block.id = 'count'
        this.block.textContent = this.countClicks
        this.block.setAttribute('hidden', '')
        this.body.append(this.block)
    }

    showCount() {
        this.block.removeAttribute('hidden')
        this.block.textContent = ''
        this.block.textContent = this.countClicks
    }

    showTimer() {
        this.body.querySelector('#timer')?.remove()
        const timer = document.createElement('span')
        timer.id = 'timer'
        timer.textContent = `Осталось: ${this.time}`
        this.body.append(timer)
    }

    showResult(){
        this.blockResult = document.createElement('div')
        this.blockResult.className = 'blockResult'
        this.blockResult.innerHTML = `<h2>Результат:</h2> <h1>${this.countClicks}</h1>`
        this.body.append(this.blockResult)
    }

    closeResult(){
        document.addEventListener('click', () => {
            this.blockResult.classList.add('close')
        })
        this.showResult()
        this.countClicks = 0
    }

    clicker() {
        this.countClicks = -1
        this.body.addEventListener('click', () => {
            if (this.time > 0) {
                this.countClicks++
            }
            this.showCount()
        })
    }
}