function retornaAnuidade(mesPagamento, valorAnuidade) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let tempoAplicacao = 0 + mesPagamento;
  return console.log(
    `Mês de pagamento = ${
      meses[mesPagamento - 1]
    } |\nTempo de aplicação = ${tempoAplicacao} |\nValor = ${(
      valorAnuidade *
      (1 + 5 / 100) ** tempoAplicacao
    ).toFixed(0)}`
  );
}
retornaAnuidade(12, 1000);
