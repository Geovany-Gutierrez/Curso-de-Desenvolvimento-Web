function imprimirQuantidadeParEImpar(vetor) {
    let quantPar = 0
    let quantImpar = 0
    vetor.forEach(element => {
        if (element % 2 == 0) {
            quantPar++
        }
        else quantImpar++
    });
    console.log(`Quantidade par: ${quantPar}\nQuantidade impar: ${quantImpar}`)
}
const numeros = [2, 2, 3, 4, 3]
imprimirQuantidadeParEImpar(numeros)
//ler um vetor e imprimir quantos sao par e impar