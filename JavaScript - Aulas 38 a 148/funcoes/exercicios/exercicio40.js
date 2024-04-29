/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/
function retornaConceito(vetor) {
  const conceitos = [];
  const textoEstilizado = vetor.forEach((nota) => {
    if (nota >= 0 && nota < 5) conceitos.push("Conceito D");
    else if (nota >= 5 && nota < 7) conceitos.push("Conceito C");
    else if (nota >= 7 && nota < 9) conceitos.push("Conceito B");
    else if (nota >= 9 && nota <= 10) conceitos.push("Conceito A");
    else conceitos.push("Invalido");
  });
  console.log(`${vetor}\n${conceitos}`);
}
const notas = [0, 4.9, 5, 6.9, 7, 8.9, 9, 10, 11];
retornaConceito(notas);
