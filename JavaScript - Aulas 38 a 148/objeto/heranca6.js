function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Ate breve", 456);
console.log(aula1, aula2);

// simulando o new
function novo(f, ...params) {
  //criou objeto com notaçao literal
  const obj = {};
  //associou ao prototype da funcao no parametro(f)
  obj.__proto__ = f.prototype;
  //vai executar a funçao f passando o contexto(this) como obj e os parametros no metodo nov
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
const aula4 = novo(Aula, "Bem vindo", 456);
console.log(aula3, aula4);
