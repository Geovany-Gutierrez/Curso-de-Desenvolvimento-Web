function compras(valor, valor2) {
  const comprarSorvete = valor || valor2; //or
   const comprarTv50 = valor && valor2 //and
  const compraTv32 = valor != valor2; //bitwise xor
  const manterSaudavel = !comprarSorvete; //operador unario
  return { comprarSorvete, comprarTv50, compraTv32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))