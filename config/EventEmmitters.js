const EventEmitter = require('node:events')
const { createGunzip } = require('zlib')

class library extends EventEmitter{
    constructor () {
        super();
        this.books = 0
    }

    order(title, body){
        this.books++
        this.emit("book", title, body);
    }

    displayBook(){
        console.log(`Current book is: ${this.books}`)
    }
}
module.exports = library