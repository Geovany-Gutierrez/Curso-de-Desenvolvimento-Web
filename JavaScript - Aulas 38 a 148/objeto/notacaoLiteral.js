const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a };
const obj2 = { a, b, c };
console.log(obj1, obj2);

const nomeAttr = "Nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

const obj5 = {
  funcao1: function () {},
  //ecma 2015
  funcao2() {},
};

console.log(obj5);
