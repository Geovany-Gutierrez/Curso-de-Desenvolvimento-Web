function retornaSalarioComAumento(plano, salario) {
  switch (plano) {
    case "A":
      console.log(`Aumento de 10%: ${salario + salario * 0.1}`);
      break;
    case "B":
      console.log(`Aumento de 15%: ${salario + salario * 0.15}`);
      break;
    case "C":
      console.log(`Aumento de 20%: ${salario + salario * 0.2}`);
      break;
    default:
      console.log("Plano invalido");
      break;
  }
  console.log(salario);
}
retornaSalarioComAumento("A", 1000);
retornaSalarioComAumento("B", 1000);
retornaSalarioComAumento("C", 1000);
