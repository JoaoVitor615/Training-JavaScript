function sum(...numbers){
    return numbers.reduce((acum, num) => acum + num, 0)
}

console.log(sum(1, 2, 198))