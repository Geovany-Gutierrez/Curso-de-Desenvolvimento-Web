const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Nao pode mudar a referencia de memoria do array, apenas do objeto
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adicionado o item apos a ultima posiçao do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adicionado o item no inicio do array
console.log(pilotos)

// Splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Ira remover apenas o elemento com index 3
console.log(pilotos)

// O slice retorna um novo array, sem modificar o original
const algunsPilotos1 = pilotos.slice(2)
// Pega um pedaço do array, parametros (start, end), se end nao for definido -> pega tudo a partir do start
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
// O parametro end(4) nao é consumido, para nele
console.log(algunsPilotos2)
