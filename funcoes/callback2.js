const notas = [7.7, 5.4, 5.8, 7.6, 6.6];

//sem callback
const notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas);

//com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});
console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => nota < 7);
console.log(notasBaixas3);
