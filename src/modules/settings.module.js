import {Module} from '../core/module'


export class SettingsModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.el = document.createElement('div')
        this.el.className = 'settings_panel'
            const $background_block = document.createElement('div')
            $background_block.textContent = 'Фон меню'
                const $inp_background = document.createElement('input')
                $inp_background.type = 'color'
                $inp_background.value = '#000000'
            $background_block.append($inp_background)

            const $color_block = document.createElement('div')
            $color_block.textContent = 'Цвет текста'
                const $inp_color = document.createElement('input')
                $inp_color.type = 'color'
                $inp_color.value = '#ffffff'
            $color_block.append($inp_color)

            const $opacity_block = document.createElement('div')
            $opacity_block.textContent = 'Прозрачность'
                const $inp_opacity = document.createElement('input')
                $inp_opacity.type = 'number'
                $inp_opacity.min = '0'
                $inp_opacity.max = '100'
                $inp_opacity.step = '10'
                $inp_opacity.value = '50'
            $opacity_block.append($inp_opacity)

            const $radius_block = document.createElement('div')
            $radius_block.textContent = 'Закругление углов'
                const $inp_radius = document.createElement('input')
                $inp_radius.type = 'number'
                $inp_radius.min = '0'
                $inp_radius.max = '20'
                $inp_radius.value = '5'
            $radius_block.append($inp_radius)

        this.el.append($background_block, $color_block, $opacity_block, $radius_block)
        document.body.append(this.el)
    }

    trigger() {
        this.el.classList.add('show')
    }
}