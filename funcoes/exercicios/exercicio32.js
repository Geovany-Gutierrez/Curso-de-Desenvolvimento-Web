function mediaDeVetor(vetor) {
    let valores = 0
    vetor.forEach((element) => {
        valores += element
    })
    console.log(`Média: ${valores / vetor.length} | Valor Total: ${valores}`)
}
const meuVetor = [5, 5, 5]
mediaDeVetor(meuVetor)