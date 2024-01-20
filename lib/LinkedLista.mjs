// Estrutura de Dados (LinkeList - Lista Encadeada)

// Classe que representa a unidade de armazenamento da lista encadeada

class Node {
    data
    next
    constructor(val) {
        this.data = val // Informação relevante para o usuário (valor)
        this.next = null // Ponteiro para o próximo nodo da sequência
    }
}

// Classe que representa a estrutura de dados Lista Encadeada

export default class LinkedList {
    #head // Início da lista (cabeça)
    #tail // Fim da lista (cauda)
    #count // Quantidade de nodos da lista (nós)

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Getter que retorna se a lista encadeada está vazzia ou não
    get isEmpty(){
        return (this.#count === 0)
    }

    // Getter que retorna a quantidade de nodos da lista encadeada
    get count() {
        return this.#count
    }

    // Método para inserir em qualquer posição da lista encadeada
    insert(pos, val) { // Não existe posição dentro de listas encadeadas
        const inserted = new Node(val) // Cria um novo nodo 

         // 1º Caso: se a lista estiver vazia
         if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
         }

         // 2º Caso: se a lista não estiver vazia, inserção na primeira posição
         else if (pos === 0){
            inserted.next = this.#head
            this.#head = inserted
         }

         // 3º Caso: inserção no final da lista
         else if (pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
         }

         // 4º Caso: inserção na posição intermediária
         else {
            // Nodo da posição ANTERIOR à de inserção
            let before = this.#head // Começa pelo primeiro Nodo
            
            // Percorrer a posição ANTERIOR de inserção saltando de Nodo em Nodo, por meio do ponteiro Next (por ser somente uma contagem, não ser um vetor, não é necessário começar com 0)
            for (let i = 1; i < pos; i++) before = before.next  

            // Nodo de posição POSTERIOR à de inserção
            let after = before.next

            inserted.next = after

            before.next = inserted
         }

         this.#count++
    }

    // Método para inserir na 1ª posição (Atalho), poupa processamento e memória
    insertHead(val){
        this.insert(0, val)
    }

    // Método para inserir na última posição (Atalho), poupa processamento e memória
    insertTail(val){
        this.insert(this.#count, val)
    }

    // Método para remoção de um Nodo da lista
    remove(pos){
        // 1º Caso: se a lista está vazia ou se a posição informada está fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2º Caso: remoção no início da lista (remover a cabeça "head")
        if (pos === 0){
            removed = this.#head

            this.#head = this.#head.next

            // Atualizando o tail em caso de remoção do único Nodo restante
            if (this.#count === 1 ) this.#tail = null
        }

        // 3º Caso: remoção de Nodo intermediário ou final
        else {
            let before = this.#head

            // Percorre a lista até a posição ANTERIOR à de remoção saltando de Nodo em Nodo, por meio do ponteiro Next (por ser somente uma contagem, não ser um vetor, não é necessário começar com 0)
            for (let i = 1; i < pos; i++) before = before.next

            // O Nodo removido será o seguinte
            removed = before.next

            let after = removed.next
            before.next = after

            // Atualizar o tail em cada remoção do último Nodo
            if(pos === this.#count - 1) this.#tail = before

        }
        this.#count--
        return removed.data
    }

    removedHead(){
        return this.remove(0)
    }

    removedTail(){
        return this.remove(this.#count - 1)
    }

    indexOf(val){
        // 1º Caso: lista vazia
        if(this.isEmpty) return -1

        // 2º Caso: se o Nodo contém o valor procurado, retorna a posição do Nodo
        let node = this.#head

        for(let i = 0; i < this.#count; i++){
            if(node.data === val) return i
            node = node.next
        }

        return -1
    }

    peek(pos){
        // 1º Caso: lista vazia ou posição fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined

        // 2º Caso: busca sequencial
        let node = this.#head

        for(let i = 0; i < pos; i++) node = node.next

        return node.data
    }

    peekHead(){
        return this.peek(0)
    }

    peekTail(){
        return this.peek(this.#count - 1)
    }

    print(){
        let output = "( "
        let node = this.#head
        for(let i = 0; i < this.#count; i++){
            if(output !== "( ") {
                output += ", "
            }

            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output+= ` ), count: ${this.#count}`
        return output
    }
}   