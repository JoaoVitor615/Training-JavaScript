class Product {
    constructor(name, description, price){
        this.name = name 
        this.description = description 
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(discount){
        this.price = this.price - (this.price * (discount / 100))
    }
}

const bola = new Product('Bola', 'É uma bola', 80)

console.log(bola)

bola.addToStock(12)
bola.calculateDiscount(10)


console.log(bola)