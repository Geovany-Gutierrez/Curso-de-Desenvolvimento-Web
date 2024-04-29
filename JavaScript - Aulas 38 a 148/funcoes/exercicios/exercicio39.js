const vetorUm = ["Um", "Dois"];
const vetorDois = ["Tres", "Quatro"];

function inverteVetores(vetor, vetorDois) {
  vetorDois.forEach((valor) => {
    vetor.push(valor);
  });
  for (let i = 0; i < vetor.length; i++) {
    vetorDois[i] = vetorUm[i];
  }
  vetorUm.splice(0, vetorDois.length - 2);
  vetorDois.splice(vetorUm.length, vetorDois.length);
  console.log(`${vetorUm}\n${vetorDois}`);
}
inverteVetores(vetorUm, vetorDois);
console.log("Fim");
