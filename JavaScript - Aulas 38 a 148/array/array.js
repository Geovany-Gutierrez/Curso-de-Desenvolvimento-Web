// array é um objeto que organiza os dados a partir de um index qye começa com 0
// é essencial nao misturar tipos de dados em um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Sem parametro -> undefined

aprovados[3] = 'Paulo'
aprovados.push('Juao')
console.log(aprovados)

aprovados[9] = 'Rafael' // Todos os index nao preenchidos ate o 9 serao undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
// .sort() modifica o array, ao inves de criar um copia
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
// nao reordena o array, deixa o 1 como undefined

console.log(aprovados[1], aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0) //, 'Elemento1', 'Elemento2') // parametros(start, end) -> excluira itens do start ate o end, modificando reordenando o array
// parametros(start, end, elementos a adicionar) A partir do indice start, ira adicionar os elementos especificados nos parametros
console.log(aprovados)                      