import {Module} from '../core/module'
import {getRandomColor, random} from '../utils'


export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.shapes = ['circle', 'rectangle', 'triangle']
    }

    trigger() {
        const win_width = document.documentElement.clientWidth  // ширина документа
        const win_height = document.documentElement.clientHeight  // высота документа
        const shape_width = random(30, document.documentElement.clientWidth/2)  // случайная ширина фигуры, от 30 до половины ширины документа
        const shape_height = random(30, document.documentElement.clientHeight/2)  // случайная высота фигуры, от 30 до половины высоты документа
        const top = random(1, win_height - shape_height)  // случайный отступ от верха экрана
        const left = random(1, win_width - shape_width)  // случайный отступ от левого края экрана

        const color = getRandomColor()  // получаем случайный цвет
    }
}