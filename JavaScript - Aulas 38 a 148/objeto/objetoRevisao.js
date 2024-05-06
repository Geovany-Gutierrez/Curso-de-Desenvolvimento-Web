// Coleção dinamica de pares chave valor

//declarando objeto a partir do Object
const produto = new Object
//criando e passando atributo nome
produto.nome = 'Cadeira'
//de forma resumida, o produto.marca sera generica, sem se diferir do comportamento de outras declaraçoes
produto['Marca'] = 'Generica'
//criando e passando atributo
produto.preco = 220

console.log(produto)
//deletando produto.preco
delete produto.preco
//deletando produto.marca
delete produto['Marca']
console.log(produto)


//Criando um objeto carro
const carro = {
    modelo: 'A4',
    valor: 80000,
    //passando objeto no objeto carro
    proprietario: {
        nome: 'Joao',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // ... ? Incluir explicação
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    //passando funçao no objeto
    calcularValorSeguro: function() {
        // ...
    }
}

carro.modelo = 1000
//Carro -> Proprietario -> Endereco -> Logradouro
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//Deletando carro.proprietario, tudo dentro do obj proprietario sera excluido
delete carro.proprietario
 
console.log(carro)