class Spaceship{
    static get decelerationRate() {
        return 0.17
    }
    
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}