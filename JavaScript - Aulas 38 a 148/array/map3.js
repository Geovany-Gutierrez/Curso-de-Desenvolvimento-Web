Array.prototype.map2 = function(callback) {
    //retorna um array com os valores modificados
    //criando um array vazio
    const meuArray = []
    //por ser um prototype de array, o this é o array
    const elementos = this
    for(let i = 0; i < elementos.length; i++) {
        //para cada interaçao, lance o valor no array
        meuArray.push(callback(this[i], i, this))
    }
    return meuArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
