import {Menu} from './core/menu'

// -------------- импортируем модули списков меню ---------
import {SettingsModule} from './modules/settings.module'
import {ShapeModule} from './modules/shape.module'
import {ClicksModule} from './modules/clicks.module'
import {BackgroundModule} from './modules/background.module'


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        this.items = [  // создаем массив пунктов меню
            new SettingsModule('settings', 'Настройка меню'),
            new ShapeModule('shape', 'Случайная фигура'),
            new ClicksModule('clicks', 'Подсчет кликов'),
            new BackgroundModule('background', 'Случайный фон')
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