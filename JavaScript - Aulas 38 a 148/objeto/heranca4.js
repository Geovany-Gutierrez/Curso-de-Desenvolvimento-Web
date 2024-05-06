function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Todos objetos criados a partir de uma mesma funçao
// construtora apontam para o mesmo proto
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);
// O prototipo aponta pra funçao.prototype
// em uma funçao construtora, ele aponta para o prototype da funcao

MeuObjeto.prototype.nome = "Anonimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia | eu sou ${this.nome}`);
};

obj1.falar();

//fazendo shadowing
obj2.nome = "Andre";
obj2.falar();

//criando com notaçao literal
const obj3 = {};
// mudando a referencia do obj3 de Object.prototype para MeuObjeto.prototype
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Rafael";
obj3.falar();

// Sumarizando

// quando um objeto é instaciado a partir da funcao eles sao iguais
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);

// a funcao tem um prototipo e uma referencia para __proto
// ele aponta para Object.prototype
console.log(MeuObjeto.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);

//Nulo, Object.prototype é o elemento pai maximo, nao tem nada apos ele
console.log(Object.prototype.__proto__);
