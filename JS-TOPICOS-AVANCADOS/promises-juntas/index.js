function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be numbers')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSub(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be numbers')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33 )
const subResult = asyncSub(50, 33)

Promise.all([sumResult, subResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})