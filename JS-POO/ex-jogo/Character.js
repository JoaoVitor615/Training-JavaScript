class Character {
    constructor(name, lifePoints, atackPower, defensePower){
        this.name = name
        this.lifePoints = lifePoints
        this.atackPower = atackPower 
        this.defensePower = defensePower
    }

    atack(target){
        target.lifePoints = target.lifePoints - this.atackPower
        console.log(`Agora ${target.name} tem ${target.lifePoints} pontos de vida`)
    }
}

const spiderMan = new Character('Spider Man', 50, 43, 47)
const ironMan = new Character('Iron Man', 60, 36, 50)

spiderMan.atack(ironMan)