let valor
console.log(valor) // nao inicializada = undefined
// console.log(valor2) not defined por nao ser declarado
valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString())

let produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(produto.preco)
console.log(produto) 

produto.preco = null // sem preço
console.log(produto)