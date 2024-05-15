function maiorOuIgual(num, num2) {
	// retorna se o primeiro é maior ou igual ao segundo
	if (num === num2) return true
	if (num > num2) return false
	return false
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))
