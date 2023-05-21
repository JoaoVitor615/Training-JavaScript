class Vehicle {
    move() {
        console.log('O veículo está se movendo')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo')
    }
}

const veiculoGenerico = new Vehicle()
const carro = new Car()

veiculoGenerico.move()
carro.move() 