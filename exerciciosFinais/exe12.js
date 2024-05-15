// recebe um obj como parametro
// o nome de uma propriedade
// retorna uma copia sem a propriedade especificacda
function removerPropriedade(obj, parametro) {
    const copiaObj = { ...obj }; // Cria uma cópia do objeto original
    delete copiaObj[parametro]; // Remove a propriedade especificada
    return console.log(copiaObj);
}

const meuObj = { nome: "Joao", idade: 12, teste: true }
const meuObj2 = { nome: "Maria", idade: 235, teste: false }

removerPropriedade(meuObj, 'idade')
removerPropriedade(meuObj2, 'teste')