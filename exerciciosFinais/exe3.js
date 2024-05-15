function calculaSalario(horasTrabalhadas, salarioHora) {
	const salarioMensal = horasTrabalhadas * salarioHora
	return console.log(`Salário igual a R$${salarioMensal.toFixed(2)}`)
}

calculaSalario(150, 40.5)