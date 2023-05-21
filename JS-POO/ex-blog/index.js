const Author = require("./Author.js");

const john = new Author("John Doe")
const post = john.writePost("Titulo", "Lorem Ipsum texto aaaa")

post.addComment("Isaac Pontes", "Muito bom!!!")
post.addComment("Lucas", "Achei maneiro!!")

console.log(john)
console.log(post)