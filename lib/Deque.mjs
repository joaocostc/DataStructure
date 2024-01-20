// Estrutura de dados (DEQUE) - "Fila de duas pontas"

export default class Deque {

    #data // #data é um atributo privado

    constructor () {
        this.#data = [] // vetor vazio
    }

    // Inserção no início
    insertFront(val) {
        this.#data.unshift(val)
    }

    // Inserção no final
    insertBack(val) {
        this.#data.push(val)
    }

    // Remoção no início
    removeFront() {
        return this.#data.shift()
    }

    // Remoção no final
    removeBack() {
        return this.#data.pop()
    }

    // Espiar no início
    peekFront() {
        return this.#data[0]
    }

    // Espiar no final
    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    // Verificar se o Deque está vazio
    get isEmpty() {
        return this.#data.length === 0
    }

    // Imprimir o deque na tela
    print() {
        let output = "[ "
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") output += ", "
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }
}
