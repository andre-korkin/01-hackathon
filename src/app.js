import './styles.css'
import {ContextMenu} from './menu'
// import {SettingsModule} from './modules/settings.module'
// import {ShapeModule} from './modules/shape.module'
// import {ClicksModule} from './modules/clicks.module'
// import {BackgroundModule} from './modules/background.module'


const context_menu = new ContextMenu('#menu')

const $body = document.querySelector('body')
$body.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    context_menu.items.length > 0 ? context_menu.open(event.clientX, event.clientY) : false
})