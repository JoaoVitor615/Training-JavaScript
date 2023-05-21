class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100
    }

    set username(newUsername) {
        if(typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log('Username must be of type string')
        }
        
    }

    get username() {
        return this.#username
    }
    
}

const myWallet = new Wallet()

myWallet.username = 1

console.log(myWallet.username)