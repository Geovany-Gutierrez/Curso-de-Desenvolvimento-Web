function calculaBhaskara(a, b, c) {
  // delta = negativo, parar
  //a, b, c, delta = b ** 2 - 4 * a * b
  // x = -b  +- raizQuadrada de delta / 2 * a
  const delta = b ** 2 - 4 * a * b;
  if (delta > -1) {
    opcoes = [
      (-b + Math.sqrt(delta)) / (2 * a),
      (-b - Math.sqrt(delta)) / (2 * a),
    ];
    opcoes.forEach(element => {
        console.log(Math.abs(element.toFixed(2)))
    });
  } else console.log(`O delta ${delta} é negativo`);
}
calculaBhaskara(2, -6, 0)
console.log(opcoes)