import {Module} from '../core/module'


let clicks = 0
// let dblclicks = 0

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        
        //создание игрового поля
        this.app = document.createElement('div')
        this.app.id = 'app'

            this.app_header = document.createElement('div')
            this.app_header.id = 'app_header'

                this.game_time = document.createElement('h1')
                this.game_time.id = 'game_time'
                    this.spn_time = document.createElement('span')
                this.game_time.textContent = 'Time: '
                this.game_time.append(this.spn_time)

                this.result = document.createElement('h1')
                this.result.id = 'result'
                    this.spn_result = document.createElement('span')
                this.result.textContent = 'Clicks: '
                this.result.append(this.spn_result)

            this.app_header.append(this.game_time, this.result)

            this.app_content = document.createElement('div')
            this.app_content.id = 'app_content'

                this.start = document.createElement('button')
                this.start.id = 'start'
                this.start.textContent = 'Start'

                this.newgame = document.createElement('button')
                this.newgame.id = 'newgame'
                this.newgame.textContent = 'Close'

                this.gamebox = document.createElement('div')
                this.gamebox.id = 'gamebox'

            this.app_content.append(this.start, this.newgame, this.gamebox)

            this.app_footer = document.createElement('div')
            this.app_footer.id = 'app_footer'

                this.label = document.createElement('label')
                this.label.textContent = 'Set time, (sec)'

                this.set_time = document.createElement('input')
                this.set_time.id = 'set_time'
                this.set_time.type = 'number'
                this.set_time.min = '5'
                this.set_time.value = '5'
                this.set_time.step = '1'

            this.app_footer.append(this.label, this.set_time)

        this.app.append(this.app_header, this.app_content, this.app_footer)
    }

    trigger() {  // отрисовка игрового поля
        document.body.append(this.app)

        this.result.style.display = 'none'
        this.spn_time.textContent = '5.0'
        this.game_time.style.display = 'block'
        this.set_time.removeAttribute('disabled')
        this.newgame.style.display = 'none'
        this.start.style.display = 'block'
        this.beforeStartGame()

        this.start.addEventListener('click', () => this.startGame())
        this.newgame.addEventListener('click', () => this.app.remove())
    }

    beforeStartGame() {  // Установка таймера
        // Автоматическое получение значения из input
        this.set_time.addEventListener('input', () => this.set_time.value ? this.spn_time.textContent = parseFloat(this.set_time.value).toFixed(1) : this.spn_time.textContent = '')
        
        this.spn_time.textContent = parseFloat(this.set_time.value).toFixed(1)
    }

    startGame() {  // Запуск игры при клике на кнопку СТАРТ
        if(this.spn_time == '' || parseFloat(this.spn_time.textContent) < 5) {
            alert('Минимальное время - 5 сек')
            this.set_time.value = '5'
            this.spn_time.textContent = '5.0'
        }
        else {
            this.gamebox.style.background = '#fff'
            this.start.style.display = 'none'
            this.afterStartGame()
        }
    }

    afterStartGame() {  // Игровой процесс
        this.set_time.setAttribute('disabled', 'true')
        clicks = 0
        // dblclicks = 0
        document.addEventListener('click', this.clicksCounter)
        // document.addEventListener('dblclick', this.dblclicksCounter)
        this.game_time.style.display = 'none'
        this.result.style.display = 'block'

        setTimeout(() => {
            document.removeEventListener('click', this.clicksCounter)
            // document.removeEventListener('dblclick', this.dblclicksCounter)
            this.endGame()
        }, this.set_time.value * 1000)
    }

    clicksCounter() {
        clicks += 1
        document.querySelector('#result span').textContent = clicks - 1
        // document.querySelector('#result span').textContent = `${clicks - 1}/${dblclicks - 1}`
    }

    // dblclicksCounter() {
    //     dblclicks += 1
    //     document.querySelector('#result span').textContent = `${clicks - 1}/${dblclicks - 1}`
    // }

    endGame() {  // Конец игры: вывод результата и появление кнопки ИГРАТЬ ЗАНОВО
        // document.removeEventListener('click', this.clicksCounter)
        this.gamebox.innerHTML = ''
        this.gamebox.style.background = '#ccc'
        this.newgame.style.display = 'block'
    }
}