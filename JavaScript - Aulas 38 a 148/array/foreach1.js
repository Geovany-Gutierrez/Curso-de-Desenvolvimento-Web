const aprovados = ['Ana', 'Bia', 'João', 'Raquel']

// Existe um terceiro parametro, que é o array
aprovados.forEach((e, i) => {
    console.log(`${i + 1}: ${e}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)