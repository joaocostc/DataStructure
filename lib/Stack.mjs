// Estrutura de Dados (PILHA)

export default class Stack {

    #data // vetor privado

    constructor () {
        this.#data = []
    }

    //inserir
    push(val) {
        this.#data.push(val)
    }

    //retirar
    pop() {
        return this.#data.pop()
    }

    //espiadinha no último elemento da pilha (topo da pilha)
    peek(){
        return this.#data[this.#data.length - 1]
    }

    //saber se a pilha está vazia
    get isEmpty() {
        return this.#data.length === 0
    }

    //imprimir a pilha (JSON é estrutura de armazenamento de dados, só parece com objeto, porém não tem relação com objeto)
    print() {
        return JSON.stringify(this.#data) // esse método converte o que está dentro do parâmetro em JSON
    }
}