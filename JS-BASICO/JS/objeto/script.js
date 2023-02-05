let spaceship = {
    velocity: 0,
    speedUp: function(speed){
    this.velocity += speed
    if(this.velocity > this.maxVelocity){
        alert("Cuidado!!! Sua nave está a uma velocidade de " + this.velocity +
        ", mas a velocidade máxima dessa nave é " + this.maxVelocity)
    } else{
        alert("Nave acelerada com sucesso!")
    }
}
}

function registerSpaceship(){
    spaceship.name = prompt("Qual o nome da nave?")
    spaceship.type = prompt("Qual o tipo da nave?")
    spaceship.maxVelocity = prompt("Qual a velocidade máxima da nave?")
}

function menu(){
    let option = prompt("Escolha uma opção: \n1 - Parar a nave \n2 - Acelerar a nave")

    if(option == "1"){
        finalMessage(spaceship)
    } 
    else if(option == "2"){
        let aceleration = Number(prompt("Quanto você deseja acelerar?"))
        spaceship.speedUp(aceleration)
        menu()
    }
    else{
        alert("Escolha uma opção válida!")
        menu()
    }
}

function finalMessage(object){
    alert("Nave: " + object.name + "\nTipo da nave: " + object.type +
          "\nVelocidade máxima: " + object.maxVelocity + "\nVelocidade atingida: " + object.velocity)
}

registerSpaceship()
menu()