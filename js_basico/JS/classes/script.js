class Spaceships {
    constructor(name, crew) {
        this.name = name 
        this.crew = crew
        this.isHitched = false
        this.isOpen = false
    }

    hitch() {
        this.isHitched = true
        this.isOpen = true
    }
}

function menu(){
    let option
    while(option != "1" && option != "2" && option != "3"){
        option = prompt("1 - Realizar engate\n" + 
                        "2 - Listar naves\n" +
                        "3 - Sair do programa")
    }
    return option
}

function spaceshipList(spaceship) {
    let spaceshipList = ""
    spaceship.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + ", " + spaceship.crew + " tripulantes\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []

let option

while(option != "3"){
    option = menu()
    switch(option){
        case "1":
            let nameSpaceShip = prompt("Qual o nome da nave?")
            let crewSpaceship = prompt("Qual a quantidade de tripulantes?")
            let spaceship = new Spaceships(nameSpaceShip, crewSpaceship)
            spaceship.hitch()
            hitchedSpaceships.push(spaceship)
            break
        case "2":
            spaceshipList(hitchedSpaceships)
            break
    }
}

menu()