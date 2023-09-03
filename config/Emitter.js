const library = require('../config/EventEmmitters')
const buffer = new Buffer.from("string")
const libraryBook = new library()

libraryBook.on("book", (title, body) => {
    console.log(`book available: it is ${title} and it contains this: "${body}"`)
})
  
libraryBook.order("harry", "Hi, my name is harry")
libraryBook.order("ore", "Hi, my name is ore")
libraryBook.order("porter", "Hi, my name is porter")
libraryBook.displayBook()

buffer.write("Hackathon")
console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())
module.exports = {libraryBook, buffer}