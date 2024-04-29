const valores = [7.7, 8.9, 6.3, 9.2]
// index começam no valor 0
console.log(valores[0], valores[2], valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof(valores)) // em javascript um array é um objeto