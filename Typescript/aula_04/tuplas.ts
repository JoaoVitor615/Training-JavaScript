let crew: [string, string, string] = ['', '', '']

crew[0] = 'Joao'
crew[1] = 'André'
crew[2] = 'Leandro'
//crew[3] = 'Júlio' <- não pode ser inserido

var point: [number, string] = [2 , 'Alexandre']

let [x, y] = point

console.log(`${y} tem atualmente ${x} anos`)