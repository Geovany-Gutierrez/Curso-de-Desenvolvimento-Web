Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = function (nota) {
  if (nota.entre(10, 10)) {
    console.log("Quadro de honra");
  } else if (nota.entre(7, 9.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação')
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado')
  } else {
    console.log('Invalido')
  }
  console.log('fim')
};
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(-1)