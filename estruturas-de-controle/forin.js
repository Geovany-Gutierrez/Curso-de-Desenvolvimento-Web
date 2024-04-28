const notas = [3.3, 4.3, 5.4, 5.4]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 35
}

for (let atributo in pessoa) {
    console.log(`Atributo : ${pessoa[atributo]}`)
}

try {
    console.log(atributo)
}
catch {
    console.log('Erro')
}