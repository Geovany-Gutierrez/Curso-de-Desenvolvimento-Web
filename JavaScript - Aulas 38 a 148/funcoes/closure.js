// closure é o escopo criado quando uma funçao é declarada
// esse escopo permite a funçao acessar e manipular variaveis fora do escopo

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        const x = 'local2'
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())