function calculadoraSwitch(a, operacao, b) {
    switch (operacao) {
        case '+':
            console.log(`${operacao} | ${a} + ${b} = ${a + b}`)
            console.log('------------------')
            break;
        case '-':
            console.log(`${operacao} | ${a} - ${b} = ${a - b}`)
            console.log('------------------')
            break;
        case '*':
            console.log(`${operacao} | ${a} * ${b} = ${a * b}`)
            console.log('------------------')
            break;
        case '/':
            console.log(`${operacao} | ${a} / ${b} = ${a * b}`)
            console.log('------------------')
            break;
        default:
            console.log('Operação inválida')
            console.log('------------------')
            break;
    }
}
calculadoraSwitch(4, '+', 2)
calculadoraSwitch(4, '-', 2)
calculadoraSwitch(4, '*', 2)
calculadoraSwitch(4, '/', 2)
calculadoraSwitch(4, 'dudu', 2)
