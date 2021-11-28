import {Menu} from './core/menu'
import { hexToRgb } from './utils'

// -------------- импортируем модули списков меню ---------
import {SettingsModule} from './modules/settings.module'
import {ShapeModule} from './modules/shape.module'
import {ClicksModule} from './modules/clicks.module'
import {BackgroundModule} from './modules/background.module'
import {MessageModule} from './modules/message.module'
import {SoundsModule} from './modules/sounds.module'
import {TimerModule} from './modules/timer.module'


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)

        const settings_module = new SettingsModule('settings', 'Настройка меню')
        this.settings = settings_module.model  // импортируем стили для меню из модуля настройки меню

        this.items = [  // создаем массив пунктов меню
            new ClicksModule('clicks', 'Подсчет кликов'),
            new ShapeModule('shape', 'Случайная фигура'),
            new SoundsModule('sounds', 'Случайный звук'),
            new BackgroundModule('background', 'Случайный фон'),
            new MessageModule('message', 'Мотивирующая цитата'),
            new TimerModule('timer', 'Таймер отсчета'),
            settings_module
        ]

        this.add()  // отрисовка пунктов меню
        this.clicker()  // навешивание кликов на пункты меню
    }

    open(event) {  // функция отрисовки меню
        const win_width = document.documentElement.clientWidth  // ширина документа
        const win_height = document.documentElement.clientHeight  // высота документа
        const menu_width = 200  // ширина меню
        const menu_height = 30*this.items.length  // высота меню = общей высоте пунктов меню
        let x = event.clientX  // X-координата курсора
        let y = event.clientY  // Y-координата курсора

        y + menu_height + 20 > win_height ? y -= menu_height : false  // отработка правильного расположения меню по горизонтали
        x + menu_width + 20 > win_width ? x -= menu_width : false  // и по вертикали (чтобы не уходило за край экрана)

        this.el.style.top = y + 'px'
        this.el.style.left = x + 'px'

        let opacity = 1 - this.settings.opacity / 100  // блок стилизации
        let {r, g, b} = hexToRgb(this.settings.background)
        this.el.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`

        this.el.style.color = this.settings.color
        this.el.style.borderRadius = this.settings.radius + 'px'
        this.el.style.boxShadow = `2px 3px 3px ${this.settings.shadow}`

        this.el.classList.add('open')
    }

    close() {  // функция скрытия меню
        this.el.classList.remove('open')
    }

    add() {  // функция отрисовки пунктов меню (перебираем массив пунктов)
        this.items.forEach(item => {  // 
            this.el.innerHTML += item.toHTML()
        })
    }

    clicker() {  // функция навешивания кликов на пункты меню (перебираем массив пунктов)
        this.items.forEach(item => {
            this.el.querySelector(`[data-type="${item.type}"]`).addEventListener('click', () => {
                this.close()
                item.trigger()
            })
        })
    }
}