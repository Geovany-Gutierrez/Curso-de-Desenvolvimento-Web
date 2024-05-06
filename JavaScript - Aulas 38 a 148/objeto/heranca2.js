// Cadeia de protótipos prototype chain
Object.prototype.attr0 = "Z"; // faça com muito cuidado, impacta globalmente 
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B", attr3: "L" };
const filho = { __proto__: pai, attr3: "C" };
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
// O attr3 do objeto achado sombrea os outros em niveis hierarquicos maiores

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if ((this.delta += this.velAtual <= this.velMax)) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `Atual: ${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};
const ferrari = {
  modelo: "F40",
  velMax: 324, // shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    // do mesmo modo que this é usado para o volvo (filho), super é usado para procurar no carro (pai)
    return `${this.modelo} | ${super.status()}`;
  },
};

// estabelecendo relaçao de prototipo
Object.setPrototypeOf(ferrari, carro); // parametros (filho, pai)
// ferrari -> tem carro como prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

console.log(ferrari.status())
console.log(volvo.status())
