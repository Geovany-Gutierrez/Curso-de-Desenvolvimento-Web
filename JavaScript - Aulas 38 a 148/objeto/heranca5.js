console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
// Todos eles tem um prototipo, pois toda funcao tem um prototipo

String.prototype.reverse = function () {
    // usando split da String para converter em array
    // convertido em array, pode-se utilizar a funçao Array .reverse()
    // apos a conversao, se junta tudo com o .join('')
    return this.split('').reverse().join('')
}

console.log('1234'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log(['a', 'b'].first())

// nao substitua comportamentos que ja existem
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('1234'.reverse())