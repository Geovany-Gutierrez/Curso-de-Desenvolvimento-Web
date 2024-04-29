function imprimirSoma(a, b) {
    console.log(a + b)
}
// Funcao sem retorno acima
imprimirSoma(2, 4)
imprimirSoma(4, 8)

// Funcao com retorno
function Soma(a, b = 0) {
    return a + b
}
console.log(Soma(2, 3))
console.log(Soma(2))