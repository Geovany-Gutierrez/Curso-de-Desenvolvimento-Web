// receba 4 numeros, numero, minimo, maximo, inclusivo
// retorne se o numero esta entre minimo e maximo
// padrao do inclusivo é false
// se inclusivo for true, considere se numero é igual a minimo / maximo
function estaEntre(numero, minimo, maximo, inclusivo = false) {
	if (inclusivo) 
		console.log(`${numero >= minimo && numero <= maximo}`);
	else
	console.log(`${(numero > minimo && numero < maximo)}`)
}

estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)
estaEntre(150, 3, 150, true)