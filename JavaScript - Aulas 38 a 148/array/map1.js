const numeros = [1, 2, 3, 4, 5]

// Map é um for que transforma os elementos de um array
// Criando uma copia com os novos valores
// Parametros: (valor, index, array)
let resultado = numeros.map((e) => e * 2)

//arrow function tem retorno explicito
let soma10 = e => e + 10
let triplo = e => e * 3
let paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

//map encadeado
resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)

console.log(`${resultado}`)