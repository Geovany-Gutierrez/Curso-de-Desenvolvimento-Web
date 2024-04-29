function retornaValorASerPago(idade) {
    let valor = 100
    if (idade < 10) {
        valor += 80
    } else if (idade >= 10 && idade <= 30) {
        valor += 50
    } else if (idade > 30 && idade <= 60) {
        valor += 95
    } else {
        valor += 130
    }
    return console.log(`${valor} | Idade = ${idade}`)
}

retornaValorASerPago(9)
retornaValorASerPago(11)
retornaValorASerPago(24)
retornaValorASerPago(33)
retornaValorASerPago(61)