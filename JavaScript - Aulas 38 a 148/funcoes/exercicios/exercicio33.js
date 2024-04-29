const vetorInteiro = [2, 3, 4, 5];
const vetorString = ["Dois", "Tres", "Quatro", "Cinco"];
const vetorDouble = [2.5, 3.5, 4.5, 5.5];

function concatenaVetor(vetor, vetor2, vetor3) {
  const concatenaUm = vetor.concat(vetor2);
  const concatenaDois = vetor2.concat(vetor3);
  console.log(`${concatenaUm}\n${concatenaDois}`);
}
concatenaVetor(vetorInteiro, vetorString, vetorDouble)