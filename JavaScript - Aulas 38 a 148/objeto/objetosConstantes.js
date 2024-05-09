const pessoa = { nome: 'Joao' }

// pessoa aponta para um endereco de memoria
// pessoa -> 123 -> { objeto }
pessoa.nome = 'Pedro' 
console.log(pessoa)

// pessoa -> { 456 } -> { objeto }
// pessoa = { nome: 'Ana' }

// Congelando o objeto, alteraçoes apos esta linha nao sera consideradas
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//declarando o Objeto ja como freeze, congelando no momento de declaraçao
const pessoaConstante = Object.freeze( { nome: 'Joao' } )
console.log(pessoaConstante)