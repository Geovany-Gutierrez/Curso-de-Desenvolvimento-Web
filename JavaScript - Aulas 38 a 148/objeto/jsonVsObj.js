
// criando um objeto com funçao e tres atributos
const obj = { a: 1, b:2, c:3, soma() { return a + b + c } }

//ao dar stringify, nao ira para o json, pois é um arquivo textual
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")
//console.log(JSON.parse("{ a': 1, 'b': 2, 'c': 3 }"))

//todo atributo deve ser coberto com aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
//é permitido objetos, strings, floats, boolean.. etc
console.log(JSON.parse('{ "a": 1.8, "b":"string", "c":true, "d": {}, "e": [] }'))