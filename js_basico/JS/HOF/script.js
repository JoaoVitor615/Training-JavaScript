let velocity = 150

let decreseVel = (velocity, print) => {
    let newVelocity = velocity - 20 
    print(newVelocity)
    return newVelocity
}



let printVelocity = velocity => {
    console.log("A velocidade agora é de" + velocity + "km/s")
}


while(velocity > 0){
velocity = decreseVel(velocity, printVelocity)
if(velocity<0){velocity = 0}
console.log(velocity)
}




