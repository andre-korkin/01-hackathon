import {Module} from '../core/module'
import {getRandomColor, random} from '../utils'


export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.shapes = ['circle', 'rectangle']
        this.variable = 0  // количество вариантов реализаций для каждого вида фигуры - разное
        this.width = random(30, document.documentElement.clientWidth/3)  // случайная ширина фигуры, от 30 до половины ширины документа
        this.height = random(30, document.documentElement.clientHeight/3)  // случайная высота фигуры, от 30 до половины высоты документа
        this.skewX = ''  // сдвиг по X
        this.skewY = ''  // сдвиг по Y

        this.shape = document.createElement('div')
        this.shape.style.position = 'absolute'
    }

    trigger() {
        const win_width = document.documentElement.clientWidth  // ширина документа
        const win_height = document.documentElement.clientHeight  // высота документа
        const top = random(1, win_height - this.height)  // случайный отступ от верха экрана
        const left = random(1, win_width - this.width)  // случайный отступ от левого края экрана
        const color = getRandomColor()  // получаем случайный цвет

        this.shape.style.width = this.width + 'px'
        this.shape.style.height = this.height + 'px'
        this.shape.style.top = top + 'px'
        this.shape.style.left = left + 'px'
        this.shape.style.background = color

        const fig = random(0, 1)  // случайный выбор вида фигуры

        switch(this.shapes[fig]) {
            case 'circle':
                this.getCircle()
                break
            case 'rectangle':
                this.getRectangle()
                break
        }

        this.shape.style.transform = `rotate(${random(0, 360)}deg)`  // случайный поворот
        document.body.append(this.shape)
    }

    getCircle() {
        this.variable = random(0, 1)  // два вида circle: круг и овал
        this.variable == 0 ? this.shape.style.height = this.shape.style.width : false
        this.shape.style.borderRadius = '50%'
    }

    getRectangle() {
        this.shape.style.borderRadius = random(0, 25) + '%'
        this.variable = random(0, 3)  // четыре вида rectangle: квадрат, параллелепипед из квадрата и то же самое для прямоугольника
        this.skewX = random(0, 45) + 'deg'
        this.skewY = random(0, 45) + 'deg'

        switch(this.variable) {
            case 0:
                this.shape.style.height = this.shape.style.width
                break
            case 2:
                this.shape.style.height = this.shape.style.width
                this.shape.style.transform = `skew(${this.skewX}, ${this.skewY})`
                break
            case 3:
                this.shape.style.transform = `skew(${this.skewX}, ${this.skewY})`
                break
        }
    }
}