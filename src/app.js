import './styles.css'
import {ContextMenu} from './menu'

// -------------- импортируем модули списков меню ---------
import {SettingsModule} from './modules/settings.module'
import {ShapeModule} from './modules/shape.module'
import {ClicksModule} from './modules/clicks.module'
import {BackgroundModule} from './modules/background.module'
import {SoundsModule} from './modules/sounds.module'

const modules = [  // создаем массив пунктов меню
    new ShapeModule('shape', 'Случайная фигура'),
    new ClicksModule('clicks', 'Подсчет кликов', 5),
    new SoundsModule('sounds', 'Случайный звук'),
    new BackgroundModule('background', 'Случайный фон'),
    new SettingsModule('settings', 'Настройка меню')
]

const contextMenu = new ContextMenu('#menu', modules)

contextMenu.add()
contextMenu.call()

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    const {clientX, clientY} = event
    contextMenu.open(clientX, clientY)
})

