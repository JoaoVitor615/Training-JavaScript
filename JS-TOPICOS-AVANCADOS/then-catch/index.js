function execute(){
    return new Promise((resolve, reject) => {
        console.log('Promisse executada')
        setTimeout(() => {
            if(true){
                reject('A promise foi rejeitada')
            } else {
                resolve(42)
            }
        }, 1000 * 2)
    })
}

const p = execute()
execute().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log('A promise foi rejeitada! Motivo: ' + err)
}) 