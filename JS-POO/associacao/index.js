const Address = require("./Address.js")
const Person = require("./Person.js")

const addr = new Address("Rua 25 de Março", 99, "Centro", "São Fidelis", "RJ")
const john = new Person( "John Doe", addr)

console.log(john)
console.log(john.address.fullAddress())