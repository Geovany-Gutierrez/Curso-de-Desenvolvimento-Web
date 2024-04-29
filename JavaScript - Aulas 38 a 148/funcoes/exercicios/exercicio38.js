function retornaImpar(menor = 0, maior = 100) {
  menor > maior
    ? ((menor = maior + menor),
      (maior = menor - maior),
      (menor = maior - menor))
    : menor;
  for (; menor < maior; menor++) {
    if (menor % 2 > 0) {
      console.log(menor);
    }
  }
}
retornaImpar(40, 0);
