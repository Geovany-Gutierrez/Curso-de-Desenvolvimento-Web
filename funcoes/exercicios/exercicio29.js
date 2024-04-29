function numerosEntreValor(numeros) {
  let intervalo = [10, 20];
  let quantidadeDentroIntervalo = 0;
  let quantidadeForaIntervalo = 0;

  numeros.forEach((element) => {
    if (element >= intervalo[0] && element <= intervalo[1]) {
      quantidadeDentroIntervalo++;
    } else {
      quantidadeForaIntervalo++;
    }
  });
  return console.log(
    `Dentro: ${quantidadeDentroIntervalo} | Fora: ${quantidadeForaIntervalo}`
  );
}
const vetor = [1, 5, 1, 4, 10, 15, 19, 20];
numerosEntreValor(vetor);