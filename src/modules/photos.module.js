import {Module} from "../core/module";

export class PhotosModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=h4y1bgi7FAFixONbTLaSQHVHBgZBK3nwhq7Ms0G2'
        this.body = document.querySelector('body')
        this.container = document.createElement('div')
        this.container.className = 'container'
        this.body.append(this.container)
        this.data = []
    }

    trigger() {
        this.start()
    }

    async start() {
        const response = await fetch(this.url)
        let data
        if (response.ok) {
            data = await response.json()
        } else {
            throw new Error('ошибка подключения')
        }
        const photos = await data.photos
        this.data = await photos

        if (await photos) {
            this.render()
        }
    }

    render() {
        this.data.length && this.data.forEach(item => this.createBlock(item.img_src, item.earth_date))
    }

    createBlock(url, date) {
        const block = document.createElement('div')
        block.className = 'blockImage'

        const img = document.createElement('img')
        img.className = 'img'
        img.src = url

        const dateSpan = document.createElement('span')
        dateSpan.className = 'date'
        dateSpan.textContent = date

        block.append(img)
        block.append(dateSpan)

        this.container.append(block)
    }

}