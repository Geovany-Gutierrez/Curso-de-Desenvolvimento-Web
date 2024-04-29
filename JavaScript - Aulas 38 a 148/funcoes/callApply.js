function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco}`;
}

const produto = {
  nome: "Notebook",
  preco: 4500,
  desc: 0.15,
  getPreco,
};

globalThis.preco = 20;
globalThis.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 4444 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, "$"));
console.log(getPreco.apply(global, [0.17, "$"]));
