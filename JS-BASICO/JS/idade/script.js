let pergunta1 = prompt("Digite a priemira idade:")
let p
ergunta2 = prompt("Digite a segunda idade:")

console.log(pergunta1)
console.log(pergunta2)

let idade1 = pergunta1
let idade2 = pergunta2
let maisNovo
let maisVelho

if(idade1 > idade2){
    maisNovo = idade2
    maisVelho = idade1
}
else{
    maisNovo = idade1
    maisVelho = idade2
}

alert("o mais novo tem: " + maisNovo + ", e o mais velho tem: " + maisVelho )


console.log(maisNovo + " " + maisVelho)