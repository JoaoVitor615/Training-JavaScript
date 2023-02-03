let spaceship = prompt("Digite o nome da sua nave:")
let chosenLetter = prompt("Escolha uma letra a ser substituia:")
let switchLetter = prompt("Escolha uma letra para substituir:")

let newSpaceship = ""


for(i = 0; i < spaceship.length; i++){
    if(spaceship[i] == chosenLetter){
        newSpaceship += switchLetter
    }else{
        newSpaceship += spaceship[i]
    }

}

alert("O nome final é: " + newSpaceship)