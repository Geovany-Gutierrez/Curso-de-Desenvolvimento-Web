function retornaStatus(nota) {
  if (nota > 40) {
    for (let i = nota; nota % 5 != 0; i++) {
      nota++
    }
    console.log(`Aprovado | ${nota}`);
  } else {
    if (nota > 34) {
      for (let i = nota; nota % 5 != 0; i++) {
        nota = i
      }
      console.log(`Nota arredondada, Aprovado | ${nota}`);
    } else {
      console.log(`Reprovado | ${nota}`);
    }
  }
  return "Fim teste";
}
console.log(retornaStatus(84));
console.log(retornaStatus(81))
console.log(retornaStatus(38));
console.log(retornaStatus(36))
console.log(retornaStatus(29));
