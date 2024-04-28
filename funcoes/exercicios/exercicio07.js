<<<<<<< HEAD
function calculaBhaskara(a, b, c) {
  // delta = negativo, parar
  //a, b, c, delta = b ** 2 - 4 * a * b
  // x = -b  +- raizQuadrada de delta / 2 * a
  const delta = b ** 2 - 4 * a * b;
  if (delta > -1) {
    opcoes = [
      (-b + Math.sqrt(delta)) / (2 * a),
      (-b - Math.sqrt(delta)) / (2 * a),
    ];
    opcoes.forEach(element => {
        console.log(Math.abs(element.toFixed(2)))
    });
  } else console.log(`O delta ${delta} é negativo`);
}
calculaBhaskara(2, -6, 0)
console.log(opcoes)
=======
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
>>>>>>> e461e635c8ed6dd9a60e9e5152299a30414c85e9
