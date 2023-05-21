class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
        this.published = false
    }

    publish(){
        this.published = true
    }
}

const authors = ["Ronaldo", "Ronaldinho"]
const eragon = new Book("Livro do Futebol", authors)

eragon.publish() 
console.log(eragon)
console.log(eragon instanceof Book)