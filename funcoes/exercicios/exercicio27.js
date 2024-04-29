function retornaAnoDeCrescimento(altura1, taxa1, altura2, taxa2) {
  altura1 *= 100;
  taxa1 /= 100;
  altura2 *= 100;
  taxa2 /= 100;

  let anosParaUltrapassar = 0;
  const alturas = [altura1, altura2];
  let menor = alturas[0];
  let maior = alturas[1];
  if (menor == maior) {
    console.log("Não há diferença de altura");
  } else {
    menor > alturas[1] ? (menor = maior) : (menor = menor);
    for (; menor < maior; anosParaUltrapassar++) {
      menor = (altura1 * (1 + taxa1) ** anosParaUltrapassar).toFixed(0);
    }
    console.log(
      `Menor: ${menor}cm | Anos para ultrapassar: ${anosParaUltrapassar - 1}`
    );
  }
}
retornaAnoDeCrescimento(1.5, 10, 1.65, 10);
