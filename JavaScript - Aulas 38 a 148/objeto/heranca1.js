// Referencia no prototipo - herança
/// procura na hierarqueria de objetos ate achar o objeto
// se nao achar = undefined, se achar = igual ao valor
// do elemento na hierarquia que ele encontrou

// o conceito de prototipo nao é igual ao .prototype

const ferrari = {
  modelo: "F40",
  velMax: 342,
};

const volvo = {
  modelo: "V40",
  velMax: 120,
};

console.log(ferrari.prototype)
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// todos __proto se reportam ao Object prototype
console.log(Object.prototype.__proto__ === null)
// '__' serve para acessar o prototipo do objeto
// o objeto pai, se ele nao achar na ferrari, ele procura na hierarquia
//de prototipos

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)