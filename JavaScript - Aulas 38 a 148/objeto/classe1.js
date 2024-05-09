// classe é um detalhe de sintaxe, o compilador converte para
// funçao ao rodar

//Criando uma classe lançamento
class Lancamento {
  //passando um construtor com nome e valor default, mas que podem ser passados
  constructor(nome = "Genérico", valor = 0) {
    //this -> o valor passado sera o valor do atributo
    this.nome = nome;
    this.valor = valor;
  }
}

//Criando outra classe
class CicloFinanceiro {
  //Declarando um construtor com mes e ano, sem valor padrao
  constructor(mes, ano) {
    // this -> ...
    this.mes = mes;
    this.ano = ano;
    //declarando um array para uso posterior
    this.lancamentos = [];
  }

  //Para cada instancia de lançamentos, de um push do valor
  addlancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0
    //para cada lançamento, adicione o valor consolidado
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

//Declarando um salario como instancia de lancamento, passando nome e valor
const salario = new Lancamento('Salario: ', 4500)
//Declarando contadeluz como instancia de lancamento, passando nome e valor negativo para gastor
const contaDeLuz = new Lancamento('Luz', -20)

//Declarando contas como instancia de ciclo financeiro, passando mes e ano
const contas = new CicloFinanceiro(6, 2018)
//Adicionado salario e lancamentos a contas
contas.addlancamentos(salario, contaDeLuz)
//Mostrando valor final
console.log(contas.sumario())