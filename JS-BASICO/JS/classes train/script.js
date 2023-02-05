class Person {
    constructor(name, age){
        this.name = name 
        this.age = age
        this.isAlive = true
    }
}

let youngs = []
let adults = []

function menu(){
    let action 
    while(action != "1" && action != "2" && action != "3" && action != "4"){
        action = prompt("Escolha uma ação:\n1- Cadastrar pessoa\n" +
                    "2- Listar jovens\n3- Listar adultos\n4- Sair")
    }

    return action
}

function register(namePerson, agePerson){
    if(agePerson < 23){
        let young = new Person(namePerson, agePerson)
        youngs.push(young)
    }
    else {
        let adult = new Person(namePerson, agePerson)
        adults.push(adult)
    }
}

function listPerson(person){
    let peopleList = ""
    person.forEach(element => {
        peopleList += "• " + element.name + ", " + element.age + "\n" 
    })
    alert(peopleList)
}


let action
while(action != "4"){
    action = menu()
    switch(action){
        case "1":
            let nome = prompt("Qual o nome da pessoa?")
            let idade = prompt("Qual a idade da pessoa?")
            register(nome, idade)
            break
        case "2": 
            listPerson(youngs)
            break
        case "3":
            listPerson(adults)
            break
    }
}