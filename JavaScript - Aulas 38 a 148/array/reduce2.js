//reduce serve para transformar um array em outro elemento
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Maria', nota: 9.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

// Desafio 2: Algum aluno é bolsista?

console.log(alunos.map(a => a.bolsista))

// Todos os alunos são bolsistas?
const resultado = alunos.map(a => a.bolsista).reduce(function(bolsas, bolsistas) {
    alunos.forEach(element => {
        bolsas = bolsas && bolsistas
    });
    return bolsas
})

console.log(resultado)

// Algum aluno é bolsistas?
const existeBolsista = alunos.map(a => a.bolsista).reduce(function(bolsas, bolsistas) {
    bolsas = bolsas || bolsistas
    return bolsas
})

console.log(existeBolsista)  