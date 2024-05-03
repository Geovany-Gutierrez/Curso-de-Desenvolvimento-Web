//usando a notação literal
const obj1 = {}

// Object em JS
const obj2 = new Object

console.log(obj1, obj2)

// funcao construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
    this.desc = desc
}

const p1 = new Produto('Caneta', 8, 0.15)
const p2 = new Produto('Notebook', 3000, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const func1 = criarFuncionario('Eduardo', 2000, 0)
const func2 = criarFuncionario('Juan', 2000, 20)

console.log(func1.getSalario())
console.log(func2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// um funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"": "Sou um json"}')
console.log(fromJSON)