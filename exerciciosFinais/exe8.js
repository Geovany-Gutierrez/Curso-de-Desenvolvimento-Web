function multiplicar(a, b) {
	if (a >= 0 && 0 <= b) {
		if (a == 0 || b == 0) {
			return console.log(0)
		}
		let teste = 0
		for (let i = b; i > 0; i--) {
			teste += (a)
		}
		return console.log(teste)
	}
	else return console.log('teste')
}

//recebe dois numeros >= 0, nao utilizar *
multiplicar(1, 1)
multiplicar(2, 0)
multiplicar(2, 2)
multiplicar(2, 8)
multiplicar(2, 5)
multiplicar(5, 5)