//Declarando objeto com get e set
const sequencia = {
  _valor: 1, // convencao
  //Cada vez que a sequencia.valor é chamado, aumenta 1
  get valor() {
    return this._valor++;
  },
  //Quando o valor for passado, automaticamente isto sera invocado
  set valor(valor) {
    valor > this.valor ? this.valor = valor : valor
  },
};
//Exemplo: 
console.log(sequencia.valor, sequencia.valor)
// O que esta acontecendo? getValor(), getValor
sequencia.valor = 1000
//setValor() invocado automaticamente
console.log(sequencia.valor)
//quando o set é chamado, o get tambem é?
sequencia.valor = 100     
console.log(sequencia.valor)
//Qual o resultado de valor apos tudo isto?