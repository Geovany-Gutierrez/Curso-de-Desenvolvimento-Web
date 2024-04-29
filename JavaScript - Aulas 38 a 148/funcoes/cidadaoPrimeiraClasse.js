//criar funcao de forma literal
function fun1() {

} //pode ou nao retornar um valor

// armazenar em uma variavel
const fun2 = function() {return 2 + 2}
console.log(fun2)

// armazenar funcao em um array
const array = [function() {
    return console.log(2)
}]
console.log(array[0])

//armazenar funcao em atributo de objeto
const pessoa = {
    nome: `Ana`,
    sobrenome: `Silva`,
    nomeCompleto: function(a, b) {
        console.log(`${a} ${b}`)
    }
}
pessoa.nomeCompleto(pessoa.nome, pessoa.sobrenome)

//passar funcao como parametro
/*function a() {
    return 1
}
function b() {
    return 1
}
function c(a, b) {
    return console.log(a + b)
}
c(a(), b())*/
function run(fun) {
    fun()
}

run(function () { console.log('Executando... ')})

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)