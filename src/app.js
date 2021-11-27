import './styles.css'
import {ContextMenu} from './menu'
import {SettingsModule} from './modules/settings.module'
import {ShapeModule} from './modules/shape.module'
import {ClicksModule} from './modules/clicks.module'
import {BackgroundModule} from './modules/background.module'


const context_menu = new ContextMenu('#menu')
    const settings = new SettingsModule('settings', 'Настройка меню')
    const shape = new ShapeModule('shape', 'Случайная фигура')
    const clicks = new ClicksModule('clicks', 'Подсчет кликов')
    const background = new BackgroundModule('background', 'Случайный фон')
context_menu.add([settings, shape, clicks, background])

const $body = document.querySelector('body')
$body.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    context_menu.items.length > 0 ? context_menu.open(event.clientX, event.clientY) : false
})