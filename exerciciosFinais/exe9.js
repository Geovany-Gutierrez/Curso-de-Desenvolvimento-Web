function repetir(parametro, quantRepetir) {
	const meuArray = []
	for (; quantRepetir > 0; quantRepetir--) {
		meuArray.push(parametro)
	}
	return console.log(meuArray)
}

repetir('codigo', 2)
repetir(7, 3)ech