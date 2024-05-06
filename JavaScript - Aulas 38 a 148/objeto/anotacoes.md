## Orientação a Objetos

A orientação a objetos é um paradigma de programação que organiza o código em torno de objetos e classes. Em vez de escrever um código procedural, onde as ações são executadas em uma sequência linear, na orientação a objetos, o foco está nos objetos, que representam entidades do mundo real, e suas interações.

### Objetivos Principais:

- **Abstração:** Permite representar objetos do mundo real no código, simplificando a complexidade do problema.
- **Encapsulamento:** Oculta os detalhes internos de um objeto, fornecendo uma interface clara para interagir com ele.
- **Herança:** Permite que uma classe herde características e comportamentos de outra, facilitando a reutilização de código e a organização hierárquica.
- **Polimorfismo:** Permite que objetos de diferentes classes sejam tratados de maneira uniforme, facilitando a flexibilidade e a extensibilidade do código.

### Utilização:

- Desenvolvimento de sistemas complexos, onde é importante modelar entidades e suas interações de forma clara e eficiente.
- Reutilização de código, aumentando a produtividade e facilitando a manutenção.
- Construção de interfaces gráficas, jogos, sistemas de gerenciamento de banco de dados, entre outros.

A orientação a objetos proporciona uma maneira poderosa e flexível de organizar e estruturar o código, tornando-o mais fácil de entender, modificar e manter ao longo do tempo.

## Coleção Dinâmica de Pares Chave-Valor

```javascript
// Declarando objeto a partir do construtor Object
const produto = new Object();
// Criando e atribuindo o atributo 'nome'
produto.nome = 'Cadeira';
// De forma resumida, o produto.marca será genérico, sem se diferir do comportamento de outras declarações
produto['Marca'] = 'Genérica';
// Criando e atribuindo o atributo 'preco'
produto.preco = 220;

console.log(produto);

// Deletando produto.preco
delete produto.preco;
// Deletando produto.marca
delete produto['Marca'];
console.log(produto);

// Criando um objeto carro
const carro = {
    modelo: 'A4',
    valor: 80000,
    // Passando objeto no objeto carro
    proprietario: {
        nome: 'João',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // Condutor -> Array de objetos
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    // Passando função no objeto
    calcularValorSeguro: function() {
        // ...
    }
};

carro.modelo = 1000;
// Carro -> Proprietario -> Endereco -> Logradouro
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';
console.log(carro);

// Deletando carro.proprietario. Tudo dentro do objeto proprietario será excluído
delete carro.proprietario;

console.log(carro);
```

## Criação de objetos

## Objetos Constantes

## Notação literal

## Getter e Setter 

## Funções importantes do Object

## Anotações sobre Protótipos em JavaScript

- Referência no protótipo - herança:

  - Procura na hierarquia de objetos até achar o objeto.
  - Se não achar, retorna `undefined`; se achar, retorna o valor do elemento na hierarquia onde foi encontrado.

- O conceito de protótipo não é igual ao `.prototype`.

```javascript
const ferrari = {
  modelo: "F40",
  velMax: 342,
};

const volvo = {
  modelo: "V40",
  velMax: 120,
};

console.log(ferrari.prototype); // Resultado: undefined
console.log(ferrari.__proto__); // Resultado: [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype); // Resultado: true
console.log(volvo.__proto__ === Object.prototype); // Resultado: true

console.log(Object.prototype.__proto__ === null); // Resultado: true

// '__proto__' serve para acessar o protótipo do objeto, ou seja, o objeto pai.
// Se não encontrar no objeto atual, ele procura na hierarquia de protótipos.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); // Resultado: function function
console.log(Object.prototype, MeuObjeto.prototype); // Resultado: {} MeuObjeto {}
```

Qual será o resultado de `console.log(ferrari.prototype)`?

<details>
<summary>Resposta</summary>
`undefined`
</details>
Qual será o resultado de `console.log(Object.prototype.__proto__)`?
<details>
<summary>Resposta</summary>
`null`
</details>

## Continuação: Cadeia de Protótipos (Prototype Chain)

```javascript
Object.prototype.attr0 = "Z"; // Cuidado! Isso impacta globalmente

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B", attr3: "L" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
// Resultado: Z A B C
// O attr3 do objeto encontrado sobrescreve os outros em níveis hierárquicos superiores

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
    // Assim como 'this' é usado para o volvo (filho), 'super' é usado para procurar no carro (pai)
    return `${this.modelo} | ${super.status()}`;
  },
};

// Estabelecendo relação de protótipo
Object.setPrototypeOf(ferrari, carro); // parâmetros (filho, pai)
// ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

console.log(ferrari.status());
console.log(volvo.status());
```

Qual será a saída de `console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)`?
<details>
<summary>Resposta</summary>
Z A B C
</details>

## Criando Objetos com `Object.create()`

```javascript
const pai = { nome: "Pedro", corCabelo: "preto" };

// Criando o objeto filha1 utilizando o objeto pai como protótipo
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo); // Resultado: preto

// Criando o objeto filha2 com dois parâmetros (pai e atributos específicos de filha2)
const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});
console.log(filha2.nome); // Resultado: Bia
filha2.nome = "Daenerys"; // Não afeta o valor devido à propriedade 'writable: false'
console.log(Object.keys(filha2)); // Resultado: ['nome']
console.log(Object.keys(filha1)); // Resultado: ['nome']

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(`${key}: Filha 2 property`)
    : console.log(`${key}: Hierárquico`);
  // hasOwnProperty -> Pertence à própria filha2?
}
```

Qual será o resultado de `console.log(filha1.corCabelo)`?
<details>
<summary>Resposta</summary>
`preto`
</details>
Qual será o resultado de `console.log(Object.keys(filha2))`?
<details>
<summary>Resposta</summary>
`['nome']`
</details>

## Funções Construtoras e Protótipos

```javascript
function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Todos objetos criados a partir de uma mesma função construtora apontam para o mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__); // Resultado: true
console.log(MeuObjeto.prototype === obj1.__proto__); // Resultado: true
// O protótipo aponta para a função.prototype. Em uma função construtora, ele aponta para o prototype da função.

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Eu sou ${this.nome}`);
};

obj1.falar(); // Resultado: Bom dia! Eu sou Anônimo

// Fazendo shadowing
obj2.nome = "André";
obj2.falar(); // Resultado: Bom dia! Eu sou André

// Criando com notação literal e mudando a referência de obj3 de Object.prototype para MeuObjeto.prototype
const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Rafael";
obj3.falar(); // Resultado: Bom dia! Eu sou Rafael

// Sumarizando:

// Quando um objeto é instanciado a partir de uma função, eles têm o mesmo protótipo
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // Resultado: true

// A função tem um protótipo e uma referência para __proto. Ele aponta para Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype); // Resultado: true

console.log(Function.prototype.__proto__ === Object.prototype); // Resultado: true

// Nulo. Object.prototype é o elemento pai máximo, não tem nada após ele
console.log(Object.prototype.__proto__); // Resultado: null
```

Qual será o resultado de `console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype)`?
<details>
<summary>Resposta</summary>
`true`
</details>
Qual será o resultado de `console.log(Function.prototype.__proto__ === Object.prototype)`?
<details>
<summary>Resposta</summary>
`true`
</details>

## Extensão de Protótipos em Tipos Nativos(String e Array)

```javascript
console.log(typeof String); // Resultado: function
console.log(typeof Array); // Resultado: function
console.log(typeof Object); // Resultado: function
// Todos eles têm um protótipo, pois toda função tem um protótipo

String.prototype.reverse = function () {
    // Usando split da String para converter em array
    // Convertido em array, pode-se utilizar a função Array .reverse()
    // Após a conversão, junta tudo com o .join('')
    return this.split('').reverse().join('');
};

console.log('1234'.reverse()); // Resultado: '4321'

Array.prototype.first = function() {
    return this[0];
};

console.log(['a', 'b'].first()); // Resultado: 'a'

// Não substitua comportamentos que já existem
String.prototype.toString = function () {
    return 'Lascou tudo';
};

console.log('1234'.reverse()); // Resultado: '4321'
```

Qual será o resultado de `console.log('1234'.reverse())`?
<details>
<summary>Resposta</summary>
`'4321'`
</details>
Qual será o resultado de `console.log(['a', 'b'].first())`?
<details>
<summary>Resposta</summary>
`'a'`
</details>

## Simulando o Comportamento do Operador 'new'

```javascript
function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até breve", 456);
console.log(aula1, aula2);

// Simulando o operador 'new'
function novo(f, ...params) {
  // Criou um objeto com notação literal
  const obj = {};
  // Associou ao prototype da função passada como parâmetro (f)
  obj.__proto__ = f.prototype;
  // Executa a função (f) passando o contexto (this) como obj e os parâmetros passados em 'params'
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
const aula4 = novo(Aula, "Até breve", 456);
console.log(aula3, aula4);
```

Qual será a saída de `console.log(aula1, aula2)`?
<details>
<summary>Resposta</summary>

```javascript
Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 }
```
</details>
Qual será a saída de `console.log(aula3, aula4)`?
<details>
<summary>Resposta</summary>

```javascript
Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Bem vindo', videoID: 456 }
```
</details>