import {Menu} from './core/menu'


export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        this.items = []
    }

    open(x, y) {
        this.el.style.top = y + 'px'
        this.el.style.left = x + 'px'
        this.el.classList.add('open')
    }

    close() {
        this.el.classList.remove('open')
    }

    add(arr) {
        arr.forEach(item => {
            this.items.push(item)
            this.el.innerHTML += item.toHTML()
            this.el.querySelector(`[data-type="${item.type}"]`).addEventListener('click', () => {
                this.close()
                item.trigger()
            })
        })
    }
}