import './styles.css'
import {ContextMenu} from './menu'


const $body = document.querySelector('body')
const $context_menu = new ContextMenu('#menu')
$body.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    $context_menu.open(event.clientX, event.clientY)
})

