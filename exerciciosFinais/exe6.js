
function inverso(parametro) {
	if (typeof parametro == 'boolean') return console.log(!parametro)
		if (typeof parametro == 'number') return console.log(-parametro)
	return console.log(`Esperado boolean|number, mas é ${typeof parametro}`)
}

inverso(true)
inverso(1)
inverso(-1)
inverso(2)
inverso(5)
inverso('ola')
