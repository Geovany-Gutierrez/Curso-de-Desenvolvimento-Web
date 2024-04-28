function retornaAnoBissexto(ano) {
  // de 4 em 4 é bissexto, de 100 em 100 nao é
  // de 400 em 400 é, 400 > 100 > 4
  if (ano % 400 == 0) return true
  if (ano % 100 == 0) return false
  if (ano % 4 == 0) return true
}

console.log(retornaAnoBissexto(400));
console.log(retornaAnoBissexto(100));
console.log(retornaAnoBissexto(200))
console.log(retornaAnoBissexto(900))
console.log(retornaAnoBissexto(4));
console.log(retornaAnoBissexto(2024));
