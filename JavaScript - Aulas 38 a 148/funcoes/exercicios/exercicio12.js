function calculaFatorial(num) {
  let fatorial = "";
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      fatorial += `${i}. | ${i} * ${num} = ${i * num}\n`;
    }
  } else if (num == 0) {
    fatorial = "Sem Fatorial | Zero";
  } else if (isNaN(num)) {
    fatorial = "Não é um numero";
  }
  return console.log(fatorial);
}
let negativo = 4;
calculaFatorial(5);
calculaFatorial(0);
calculaFatorial();
