function retornaJurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao) {
  const resultado = {
    montanteInvestido: `Total investido | ${capitalInicial} \n`,
    montanteGanho: `Total ganho em juros anual | ${
      ((capitalInicial * taxaDeJuros) / 100) * tempoAplicacao
    }\n`,
    totalGanho: `Total | ${
      capitalInicial + ((capitalInicial * taxaDeJuros) / 100) * tempoAplicacao
    }`,
  };
  const { montanteInvestido, montanteGanho, totalGanho } = resultado;
  return console.log(montanteInvestido, montanteGanho, totalGanho, "\nFim");
}
retornaJurosSimples(1000, 12, 10);

function retornaJurosCompostos(capitalInicial, taxaDeJuros, tempoAplicacao) {
  const resultado = {
    montanteInvestido: `Total investido | ${capitalInicial}\n`,
    montanteGanho: `Total ganho em juros anuais compostos |${
      capitalInicial * (1 + taxaDeJuros / 100) ** tempoAplicacao -
      capitalInicial
    }\n`,
    totalGanho: `Total | ${(
      capitalInicial +
      capitalInicial * (1 + taxaDeJuros / 100) ** tempoAplicacao -
      capitalInicial
    ).toFixed(2)}`,
  };
  const { montanteInvestido, montanteGanho, totalGanho } = resultado;
  console.log(montanteInvestido, montanteGanho, totalGanho);
}
retornaJurosCompostos(1000, 12, 10);