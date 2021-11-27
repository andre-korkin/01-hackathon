import {Module} from '../core/module'


export class SettingsModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        console.log('Начинаем настройку меню')
    }
}