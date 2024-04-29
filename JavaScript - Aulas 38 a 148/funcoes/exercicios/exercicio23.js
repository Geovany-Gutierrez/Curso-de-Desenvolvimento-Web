function retornaMediaPonderada(idAluno, nota1, nota2, nota3) {
  // peso maior nota = 4, resto = 3
  //mostrar codigo do aluno, a media
  //aprovado se >= 5, reprovado se < 5
  let notas = [nota1, nota2, nota3];
  let media = (nota1 + nota2 + nota3) / notas.length;
  let maiorNota = notas[0];
  while (idAluno > -1) {
    for (let i = 0; i < notas.length; i++) {
      if (notas[i] > maiorNota) {
        maiorNota = notas[i];
      }
    }
    let texto = `Id: ${idAluno}
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        Nota 3: ${nota3}
        Maior nota: ${maiorNota}
        Media: ${media.toFixed(0)}
        Situação: ${media >= 5 ? "Aprovado" : "Reprovado"}`;
    return console.log(texto);
  }
}
retornaMediaPonderada(1, 5, 9, 5);
