const valor = 0.1 + 0.2

function minimizaValor(valor) {
    const valorFormatado = valor.toFixed(2)
    return console.log(`R$${valorFormatado}`)
}
minimizaValor(valor)