const pai = { nome: "Pedro", corCabelo: "preto" };

// Criando o objeto filha1 utilizano o objeto pai como pai
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo);

//criando com dois parametros (pai e atributos do filha 2)
const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});
console.log(filha2.nome);
filha2.nome = "Daenerys";
console.log(Object.keys(filha2));
console.log(Object.keys(filha1));

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(`${key}: Filha 2 property`)
    : console.log(`${key}: Hierarquico`);
  //hasOwnProperty -> pertence a ela?
}
