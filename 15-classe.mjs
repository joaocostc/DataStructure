export default class FormaGeometrica {
    #base
    #altura
    #tipo

    constructor(base, altura, tipo){

        if(typeof base !== 'number' || base <= 0){
            throw new Error('ERRO: a base precisa ser numérica e maior que zero')
        }
        this.#base = base

        if(typeof altura !== 'number' || altura <= 0){
            throw new Error('ERRO: a altura precisa ser numérica e maior que zero')
        }
        this.#altura = altura

        if (! ['R', 'T', 'E'].includes(tipo)){
            throw new Error('ERRO: o tipo precisa ser R, T ou E')
        }
        this.#tipo = tipo
    }

    get base(){
        return this.#base
    }
    get altura(){
        return this.#altura
    }
    get tipo(){
        return this.#tipo
    }

    set base(valor){
        this.#base = valor
    }
    
    set altura(valor){
        this.#altura = valor
    }

    set tipo(valor){
        this.#tipo = valor
    }

    calcularArea(){
        switch(this.tipo){
            case 'R': // Retângulo
                return this.base * this.altura
            case 'T': // Triângulo
                return this.base * this.altura / 2
            case 'E': // Elipse
                return (this.base / 2) * (this.altura / 2) * Math.PI
        }
    }
}

let obj1 = new FormaGeometrica(2, 20, 'R')
let obj2 = new FormaGeometrica(2, 30, 'T')
let obj3 = new FormaGeometrica(4, 40, 'E')

console.log(obj2.calcularArea())

// Os atributos e métodos podem ser públicos e privados, para privar um atributo ou método, eu coloco o hashtag (#) na antes do nome do atributo
// setter (inserir) - somente com atribudos privados
// getter (buscar) - somente com atributos privados
// Atributos são as variáveis que eu posso colocar dentro das classes
// Métodos são são funções que eu posso colocar dentro das classes
// this é um objeto geral que tem poder de entrar dentro do valor para verificar o que tem dentro (genérico), usado para conseguir acessar o valor do objeto