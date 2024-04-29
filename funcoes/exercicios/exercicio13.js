// domingo dia 1, sabado dia 7
function retornaDia(dia) {
  switch (dia) {
    case 1:
    case 7:
      console.log("Fim de semana");
      break;
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
      console.log("Dia útil");
      break;
    default:
      console.log("Inválido");
      break;
  }
}
retornaDia(1)
retornaDia(7)
retornaDia(5)
retornaDia('cecia')