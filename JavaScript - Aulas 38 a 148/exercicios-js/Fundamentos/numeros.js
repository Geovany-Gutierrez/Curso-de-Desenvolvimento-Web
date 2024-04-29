const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
// Verificando se peso é integer
console.log(Number.isInteger(peso2))
// Verificando se peso2 é integer

//Atribuindo valores aos identificadores 'avaliacao1 e 2'
const avaliacao1 = 5.5
const avaliacao2 = 6.6

// Multiplicando avaliacao pelo peso respectivo
const total = avaliacao1 * peso1 + avaliacao2 * peso2
// Usando o peso para obter a media
const media = total / (peso1 + peso2)

// Mostrando no console
console.log(media.toFixed(2))
console.log(media.toString(2)) //converte para binario
console.log(typeof(media))

console.log(typeof(Number)) //Number é uma função