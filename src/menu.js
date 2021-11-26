import {Menu} from './core/menu'


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }

    open(x, y) {
        this.el.style.top = y + 'px'
        this.el.style.left = x + 'px'
        this.el.classList.add('open')
    }
}