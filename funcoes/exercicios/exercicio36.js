function primeiraFuncao(vetor, num) {
  let vetorResultado = [];
  vetor.forEach((numero) => {
    numero *= num;
    vetorResultado.push(numero);
  });
  return vetorResultado;
}
const meuVetor = [1, 2, 4, 8];
console.log(primeiraFuncao(meuVetor, 2));

function segundaFuncao(vetor, num) {
  let vetorResultado = [];
  vetor.forEach((numero) => {
    if (numero > 5) {
      numero *= num;
      vetorResultado.push(numero);
    }
  });
  return console.log(vetorResultado);
}
segundaFuncao(meuVetor, 2);
