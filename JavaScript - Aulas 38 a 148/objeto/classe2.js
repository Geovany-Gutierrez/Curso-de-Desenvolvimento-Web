class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//Herança - Declarando pai como prototipo do Avo
class Pai extends Avo {
    constructor(sobrenome, profissao='Professor') {
        //Chamando a funçao construtora da super classe(Avo)
        super(sobrenome)
        this.profissao = profissao
    }
}

//herda pai que herda avo
class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)