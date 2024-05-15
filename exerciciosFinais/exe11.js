function receberPrimeiroEUltimoElemento(array) {
	meuArray = [array.shift(), array.pop()]
	return console.log(meuArray) 
}


receberPrimeiroEUltimoElemento([7, 14, "ola"])
receberPrimeiroEUltimoElemento([-100, "aplicativo", 10])