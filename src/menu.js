import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector, modules) {
        super(selector)
        this.modules = modules
    }

    open(posX, posY) {
        console.log(posX, posY)
        this.el.classList.add('open')
        this.el.style.left = `${posX}px`
        this.el.style.top = `${posY}px`
    }

    close() {
        this.el.classList.remove('open')
    }

    add() {
        this.modules.forEach(item => {
            this.el.innerHTML += item.toHTML()
        })
    }

    call() {
        this.el.addEventListener('click', (event) => {
            const {target} = event
            const typeModule = target.dataset.type
            this.modules.map(item=>{
                if (item.type === typeModule) item.trigger()
            })
        })
    }
}
