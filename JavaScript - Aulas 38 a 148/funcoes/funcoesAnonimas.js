const soma = function (x, y) {
  return x + y;
};
console.log(soma(2, 2));

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(4, 3);

imprimirResultado(4, 3, function (x, y) {
  return x - y;
});

imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  falar: function () {
    console.log("Opa");
  },
};
pessoa.falar();