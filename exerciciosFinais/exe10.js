function simboloMais(parametro) {
	let minhaString = ''
	for (; parametro > 0; parametro--) {
		minhaString += "*"
	}
	return console.log(minhaString)
}
simboloMais(2)
simboloMais(4)
