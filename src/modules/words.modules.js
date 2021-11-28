import {Module} from '../core/module'
import {random} from '../utils'


export class MessageModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.messages = [
            ['Выбери профессию, которую ты любишь, — и тебе не придется работать ни дня в твоей жизни.', 'Конфуций'],
            ['Подумай, сколько всего ты мог бы сделать, если бы не чужое мнение.', 'Стивен Кови'],
            ['Успеха добивается лишь тот, кто остается после того как все остальные уходят.', 'Уильям Фидер'],
            ['Успешный человек больше сосредоточен на том, чтобы делать правильные вещи вместо того, чтобы делать вещи правильно.', 'Питер Друкер'],
            ['Дорога к успеху – это всегда дорога в гору, и чтобы подняться в нее, нужно приложить усилие.', 'Вилли Дейвис'],
            ['Лучше сделать и пожалеть, чем не сделать и пожалеть дважды.', 'Грейс Хоппер'],
            ['Если вы решили что-то сделать, но не начали это делать в течении 72 часов — в 85% случаев вы не сделаете это никогда.', 'Бодо Шефер'],
            ['Тот, кто может и бездействует, хуже того, кто не может, но пытается что-то сделать.', 'Уильям Блейк'],
            ['Мечты не работают, пока не работаешь ты.', 'Грейс Хоппер'],
            ['Если вы думаете, что способны выполнить что-то, или думаете, что не способны на это, вы правы в обоих случаях.', 'Генри Форд'],
            ['Кто сильно желает подняться наверх, тот придумает лестницу.', 'Японская мудрость']
        ]

        this.message = document.createElement('div')
        this.messageInner = document.createElement('div')
        this.messageClose = document.createElement('span')
        this.message.classList.add('messageContent')
        this.messageInner.classList.add('messageContent__inner')
        this.messageClose.classList.add('close')
        this.messageClose.innerText = '&times'
        // this.messageClose.dataset.close
        this.message.append(this.messageInner)
        this.messageInner.append(this.messageClose)

    }

    trigger() {
        if (!document.querySelector('.messageContent')) {
            document.body.append(this.message)
        }
        const text = this.messages[random(0, 10)]
        this.messageInner.innerHTML = `${text}`
        this.message.classList.add('active')

        setTimeout(() => {
            this.message.classList.remove('active')
        }, 5000);
    }
}


