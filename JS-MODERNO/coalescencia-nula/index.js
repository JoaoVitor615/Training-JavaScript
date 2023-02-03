const a = 0
const b = null
const c = 'Teste'

console.log(a ?? b ?? c) // 0
console.log(b ?? a ?? c)
console.log(a || b || c) // Teste

let d = 0
let e = d || 42
let f = d ?? 42

console.log({d , e, f})
// d: 0, e: 42, f: 0