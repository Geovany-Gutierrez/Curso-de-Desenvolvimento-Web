// criar um objeto usando funca factory

function criarObjeto(nome, sobrenome) {
  const obj = {
    nome: nome,
    sobrenome: sobrenome,
    nomeCompleto: `${nome} ${sobrenome}`,
  };
  return obj;
}
console.log(criarObjeto("Joao", "Almeida"));
