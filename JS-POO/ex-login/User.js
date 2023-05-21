class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(inputEmail, inputPassword) {
        if(inputEmail == this.email && inputPassword == this.password){
            console.log(`Login bem suscedido, bem vindo ${this.fullname}!`)
        } else {
            console.log('Email ou senha inválidos')
        }
    }
}

const joao = new User('João Vítor', 'jvpeniza@gmail.com', 06015)
console.log(joao)
joao.login('jvpeniza@gmail.com', 06015)