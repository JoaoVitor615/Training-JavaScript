let nameSpaceShip = prompt("Digite o nome da nave");
let velocity = 0;
let value = 0;


function menu() {
    let optionSpeed = prompt ("Escolha uma das opções: " +
                             "\n1 - Acelerar a nave em 5km/h" +
                             "\n2 - Desacelerar em 5km/h" +
                             "\n3 - Imprimir dados de bordo" +
                             "\n4 - Sair" + 
                             "\n5 - Reiniciar programa");
    
    if (optionSpeed == "1") {
        speedUp(5);
    } else if ((optionSpeed == "2") && (velocity >= 5)) {
        slowDown(5);
    } else if (optionSpeed == "3") {
        print();
    } else if (optionSpeed == "4"){

    } else if(optionSpeed == "5"){
        reset()
    }else {
        menu();
    }
}

function speedUp (value) {
    velocity += value;
    menu();
}

function slowDown (value){
    velocity -= value;
    menu();
}

function print () {
    alert("Nome da nave:  " + nameSpaceShip +"\nVelocidade atual:  "+ velocity);
    menu();
}

function reset(){
    nameSpaceShip = prompt("Digite o nome da nave");
    velocity = 0;
    value = 0;
    menu()
}

menu()