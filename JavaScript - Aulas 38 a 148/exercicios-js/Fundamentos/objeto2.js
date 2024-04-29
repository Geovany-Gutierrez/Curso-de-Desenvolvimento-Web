console.log(typeof Object)
console.log(typeof new Object) // instanciando a funçao = vira objeto

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{} // ecmascript 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())