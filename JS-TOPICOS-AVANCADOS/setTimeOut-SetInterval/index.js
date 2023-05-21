console.log("Programa iniciado")

//const timeoutId = setTimeout( () => {
//    console.log("3 segundos se passaram")
//}, 1000 * 3)
//
//clearTimeout(timeoutId)
//console.log(timeoutId)

let seconds = 0

setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds}`)

}, 1000 * 3, )

//ClearInterval()