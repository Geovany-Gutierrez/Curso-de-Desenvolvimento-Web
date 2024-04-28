// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
  a = a || 1;
  b = b || 2;
  c = c || 3;
  return a + b + c;
}
console.log(soma1());
console.log(soma1(2));
console.log(soma1(2, 3, 0));
console.log(soma1(0, 0, 0));

// estrategia 2,3 e 4 para gerar valor padrao
console.log("Estrat 2")
function soma2(a, b, c) {
    a == undefined ? a = 1 : a
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2())
console.log(soma2(2,2,2))

// valor padrao do es2015
function soma3(a = 2, b = 2, c = 3) {
    return a + b + c
}
console.log(soma3())