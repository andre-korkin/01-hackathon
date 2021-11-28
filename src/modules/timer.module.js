import {Module} from '../core/module'


export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const body = document.querySelector('body')

            const timer = document.createElement('div')
            timer.className = 'timer'

                const showTime = document.createElement('div')
                showTime.className = 'showTime'
                showTime.innerHTML = '0 : 0 : 0'

                const input = document.createElement('input')
                input.type = 'number'
                input.value = '1'

                const button = document.createElement('div')
                button.className = 'timerButton'
                button.textContent = 'Запустить таймер'

                const close = document.createElement('div')
                close.className = 'closeButton'
                close.textContent = 'Закрыть'
            
            timer.append(showTime, input, button)

        body.append(timer)


        button.addEventListener('click', () => {
            if(input.value) {
                let timeMinute = parseInt(input.value, 10) * 60
        
                const startTimer = setInterval(function () {
                    let seconds = timeMinute % 60
                    let minutes = (timeMinute / 60) % 60
                    let hours = (timeMinute / 60 / 60) % 60

                    showTime.innerHTML = `${Math.trunc(hours)} : ${Math.trunc(minutes)} : ${Math.trunc(seconds)}`
                
                    if(timeMinute < 0) {
                        clearInterval(startTimer)
                        alert('Время вышло!!!')
                        showTime.innerHTML = '0 : 0 : 0'
                        timer.remove()
                    }
                    
                    timeMinute--
                }, 1000)
            }
        })
    }
} 