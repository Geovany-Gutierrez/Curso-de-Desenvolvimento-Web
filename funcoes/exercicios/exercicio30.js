function pegaMaiorEMenor(vetor) {
    let menor = vetor[0]
    let maior = vetor[0]
    vetor.forEach((element) => {
        if (element > maior) {
            maior = element
        } else if (element < menor) {
            menor = element
        }
    })
    vetor.forEach   
    console.log(`Menor: ${menor} | Maior: ${maior}`)
}
const meuVetor = [1, 4, 3, 9, 7, 20, 10]
pegaMaiorEMenor(meuVetor)