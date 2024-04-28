// 01
function minhaFuncao(a, b) {
    const funcoes = {
        soma: `${a} + ${b} = ${a + b}`,
        sub: `${a} - ${b} = ${a - b}`,
        mult: `${a} * ${b} = ${a * b}`,
        div: `${a} / ${b} = ${a / b}`
    }
    const { soma, sub, mult, div } = funcoes
    console.log(`${soma} | ${sub} | ${mult} | ${div}`)
}

minhaFuncao(2, 4)