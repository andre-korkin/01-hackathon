import {Module} from '../core/module'


export class SettingsModule extends Module {
    constructor(type, text) {
        super(type, text)

        this.model = {  // свойства модели меню
            background: '#000000',
            color: '#ffffff',
            opacity: '50',
            radius: '5',
            shadow: '#444444'
        }

        // ---------- панель настроек ----------
        this.el = document.createElement('div')
        this.el.className = 'settings_panel'
            const $background_block = document.createElement('div')
            $background_block.textContent = 'Фон меню'
                const $inp_background = document.createElement('input')
                $inp_background.type = 'color'
                $inp_background.value = this.model.background
            $background_block.append($inp_background)

            const $color_block = document.createElement('div')
            $color_block.textContent = 'Цвет текста'
                const $inp_color = document.createElement('input')
                $inp_color.type = 'color'
                $inp_color.value = this.model.color
            $color_block.append($inp_color)

            const $opacity_block = document.createElement('div')
            $opacity_block.textContent = 'Прозрачность'
                const $inp_opacity = document.createElement('input')
                $inp_opacity.type = 'number'
                $inp_opacity.min = '0'
                $inp_opacity.max = '100'
                $inp_opacity.step = '10'
                $inp_opacity.value = this.model.opacity
            $opacity_block.append($inp_opacity)

            const $radius_block = document.createElement('div')
            $radius_block.textContent = 'Закругление углов'
                const $inp_radius = document.createElement('input')
                $inp_radius.type = 'number'
                $inp_radius.min = '0'
                $inp_radius.max = '20'
                $inp_radius.value = this.model.radius
            $radius_block.append($inp_radius)

            const $shadow_block = document.createElement('div')
            $shadow_block.textContent = 'Цвет тени'
                const $inp_shadow = document.createElement('input')
                $inp_shadow.type = 'color'
                $inp_shadow.value = this.model.shadow
            $shadow_block.append($inp_shadow)

        this.el.append($background_block, $color_block, $opacity_block, $radius_block, $shadow_block)
        document.body.append(this.el)


        // ---------- блок модели меню ----------
        this.modelblock = document.createElement('div')
        this.modelblock.className = 'model_block'
            const win_width = document.documentElement.clientWidth  // ширина документа
            const win_height = document.documentElement.clientHeight  // высота документа
            const menu_width = 200  // ширина меню
            const menu_height = 120  // высота меню
            this.modelblock.style.left = (win_width - menu_width) / 2 + 'px'  // выравниваем модель меню
            this.modelblock.style.top = (win_height - menu_height) / 2 + 'px'  // по центру окна
        document.body.append(this.modelblock)
    }

    trigger() {  // запуск отрисовки панели настроек, блока модели меню и самой модели
        this.el.classList.add('show')
        setTimeout(() => {
            this.modelblock.classList.add('show')
            this.render()
        }, 1000)
    }

    render() {  // отрисовка модели
        this.modelblock.innerHTML = ''
        const $menu = document.createElement('div')
        $menu.className = 'menu'
        $menu.classList.add('open')
            const items = ['Background', 'Color', 'Opacity', 'Radius', 'Shadow']
            items.forEach(item => {
                $menu.innerHTML += `<li class="menu-item">${item}</li>`
            })
        this.modelblock.append($menu)
    }
}