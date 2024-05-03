const pessoa = { nome: 'Joao' }

// pessoa aponta para um endereco de memoria
// pessoa -> 123 -> { objeto }
pessoa.nome = 'Pedro' 
console.log(pessoa)

// pessoa -> { 456 } -> { objeto }
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze( { nome: 'Joao' } )
console.log(pessoaConstante)