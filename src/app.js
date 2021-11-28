import './styles.css';
import {ContextMenu} from './menu';


const context_menu = new ContextMenu('#menu')
const $body = document.querySelector('body')
$body.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    context_menu.items.length > 0 ? context_menu.open(event) : false  // отрисовываем меню только тогда, когда массив пунктов меню не пустой
})