class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property { }

class Apartament extends Property {
    constructor(number, area, price){
        super(area, price)
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)
const app = new Apartament("201", 100, 160000)

console.log(land)
console.log(someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof Property)
console.log(app instanceof Property)
console.log(app.getFloor())