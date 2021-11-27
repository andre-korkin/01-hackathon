import {Menu} from './core/menu'

import {SettingsModule} from './modules/settings.module'
import {ShapeModule} from './modules/shape.module'
import {ClicksModule} from './modules/clicks.module'
import {BackgroundModule} from './modules/background.module'


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        this.items = [
            new SettingsModule('settings', 'Настройка меню'),
            new ShapeModule('shape', 'Случайная фигура'),
            new ClicksModule('clicks', 'Подсчет кликов'),
            new BackgroundModule('background', 'Случайный фон')
        ]

        this.add()
        this.clicker()
    }

    open(x, y) {
        this.el.style.top = y + 'px'
        this.el.style.left = x + 'px'
        this.el.classList.add('open')
    }

    close() {
        this.el.classList.remove('open')
    }

    add() {
        this.items.forEach(item => {
            this.el.innerHTML += item.toHTML()
        })
    }

    clicker() {
        this.items.forEach(item => {
            this.el.querySelector(`[data-type="${item.type}"]`).addEventListener('click', () => {
                this.close()
                item.trigger()
            })
        })
    }
}