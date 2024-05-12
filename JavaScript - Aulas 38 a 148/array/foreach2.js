const meuArray = ["Ana", "Bia", "João", "Gugu"];

//Declarando uma funçao para array usando prototype
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    // passando conteudo, indice e array para parametros
    callback(this[i], i, this);
    console.log(`${i + 1}: ${any[i]}`);
  }
};

meuArray.forEach((e, i) => {
  console.log(`${i + 1}: ${e}`);
});

console.log("------------------");

function exibeArray(any) {
  for (let i = 0; i < any.length; i++) {
    console.log(`${i + 1}: ${any[i]}`);
  }
}

exibeArray(meuArray);
