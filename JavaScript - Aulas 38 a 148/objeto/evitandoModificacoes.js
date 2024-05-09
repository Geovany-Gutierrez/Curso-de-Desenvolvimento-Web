// Object.preventExtensions
const obj = Object.preventExtensions({
    nome: 'Qualquer', preco: 2.99, tag:'promocao'
})

obj.descricao = 'barato'

console.log('Extensivel: ', Object.isExtensible(obj))

delete obj.nome

console.log(obj)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze, congela totalmente o objeto
const humano = Object.freeze({
    nome: 'Pessoa'
})

console.log(humano)