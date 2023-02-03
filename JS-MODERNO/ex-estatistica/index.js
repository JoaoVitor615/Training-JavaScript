const arithmeticAverage = (...numbersToCalc) => {
    const length = numbersToCalc.length
    const sum = numbersToCalc.reduce((accum, currentValue) => accum + currentValue)
    return (sum/length).toFixed(1)
    
}

console.log(`Média aritimética: ${arithmeticAverage(1, 2, 3, 6)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number , weight}) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return (sum/weightSum).toFixed(1)
}

console.log(`Média poderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7  },
    { number: 10, weight: 1 }
)}`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const midle = Math.floor(orderedNumbers.length/2)
    if(orderedNumbers.length % 2 !== 0){
        return orderedNumbers[midle]
    } 
    const firstMedian = orderedNumbers[midle - 1]
    const seconMedian = orderedNumbers[midle]
    return arithmeticAverage(firstMedian, seconMedian)

}

console.log('Mediana: ' + median(1, 2, 3, 4, 5, 6))

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter( n => num === n ).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 2, 4, 5, 3, 2, 1, 3, 1, 8)}`)