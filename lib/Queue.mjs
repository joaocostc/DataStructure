// Estrutura de Dados (FILA)

export default class Queue {
    #data // vetor privado

    constructor() {
     this.#data = []
    }

    // Inserir dados na fila
    enqueue(val) {
     this.#data.push(val)
    }
    
    // Remover dados da fila
   dequeue() {
    return this.#data.shift()
   } 

   // Espiadinha no início da fila
   peek() {
    return this.#data[0]
   }

   // Fila está vazia?
   get isEmpty() {
    return this.#data.length === 0
   }

   // Imprimir a fila
   print() {
    let output = "[ "
    for (let i = 0; i < this.#data.length; i++) {
        if (output !== "[ ") output += ", "
        output += `(${i+1}º da fila): ${this.#data[i]}`
    }
    return output + " ]"
   }
}