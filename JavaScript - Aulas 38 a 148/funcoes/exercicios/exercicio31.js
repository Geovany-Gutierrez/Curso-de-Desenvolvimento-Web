function pegaNumerosNegativos(vetor) {
    let numerosNegativos = 0
    vetor.forEach((num) => {
        if (num < 0) {
            numerosNegativos++
        }
    })
    console.log(numerosNegativos)
}
const meuVetor = [1, 2, 3, -1, -7, 0, -8]
pegaNumerosNegativos(meuVetor)