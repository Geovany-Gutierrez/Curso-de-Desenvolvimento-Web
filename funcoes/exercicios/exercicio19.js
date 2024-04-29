function retornaCardapio(codigo, quantidade) {
    switch(codigo) {
        case 100:
            console.log(`${codigo} | Nome: Cachorro Quente | Preço: R$${quantidade * 3}`)
            break;
        case 200:
            console.log(`${codigo} | Nome: Hamburguer simples | Preço: R$${quantidade * 4}`)
            break;
        default:
            console.log('Este codigo nao é valido')
            break;
    }
}
retornaCardapio(100, 5)