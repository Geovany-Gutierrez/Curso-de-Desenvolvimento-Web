const sequencia = {
  _valor: 1, // convencao
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    valor > this.valor ? this.valor = valor : valor
  },
};
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor)