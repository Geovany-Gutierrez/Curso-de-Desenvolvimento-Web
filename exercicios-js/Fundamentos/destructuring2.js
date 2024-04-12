const [a] = [10]
console.log(a)

const [n1, n3, n5 = 1, n7] = [1, 3, , 7]
console.log(n1, n5, n7)

const [, [, nota]] = [1, [2, 5]]
console.log(nota)