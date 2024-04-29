function retornaMensagem(marca) {
  switch (marca) {
    case "Hatch":
      console.log(`${marca} | Compra efetuada com sucesso`);
      break;
    case "Sedans":
    case "Motocicletas":
    case "Caminhonetes":
      console.log("Tem certeza que não quer um Hatch");
      break;
    default:
      console.log("Não vendemos este modelo aqui");
      break;
  }
}
retornaMensagem('Hatch')
retornaMensagem('Sedans')
retornaMensagem('Coruja')