function checkAge(age) {
    return new Promise((resolve, reject) => {
        if(age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if(birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

getAge('2004-01-06')
    .then(age => { //ou .then((age) => checkAge(age)) pois o return é automatico quando não há "{" 
        return checkAge(age)
    })
    .then(isOver18 => {
        if(isOver18){
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        }
    })
    .catch(err => {
        console.log(err.message)
    })
