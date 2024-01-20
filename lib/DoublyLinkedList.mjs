// Estrutura de Dados (Lista Encadeada)

class Node {

    prev
    data
    next

    constructor(val){
        this.prev = null // Ponteiro para o nó anterior
        this.data = val // Armazena a informação relevante para o usuário
        this.next = null // Ponteiro para o próximo nó
    }
}

export default class DoublyLinkedList {
    
    #head // O início da lista
    #tail // O fim da lista
    #count // Quantidade de nós da lista

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Getter que retorna se a lista está vazia
    get isEmpty() {
        return this.#count === 0
    }

    // Getter que retorna a quantidade de nós da lista
    get count() {
        return this.#count
    }

    // Método (privado) que encontra um nodo por sua posição
    #findNode(pos) {
        let node

        if (pos < this.#count / 2) {
            for (let i = 0; i < pos; i++) {
                node = node.next
            }
        } else {
            node = this.#tail
            for (let i = this.#count - 1; i > pos; i--) {
                node = node.prev
            }
        }
        return node
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {
        
        let inserted = new Node(val)
        
        // 1º Caso: Lista Vazia
        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º Caso: inserção no início
        else if (pos === 0) {
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }

        // 3º Caso: inserção no fim
        else if (pos >= this.#count) {
            inserted.prev = this.#tail
            this.#tail.next = inserted
            this.#tail = inserted   
        } 

        // 4º Caso: inserção em posição intermediária
        else {
            // Nodo que atualmente ocupa a posição de inserção
            let nodePos = this.#findNode(pos)
            // Nodo imediatamente anterior a nodePos
            let before = nodePos.prev            
            // O nodo anterior passa a apontar para frente, para o nodo inserido
            before.next = inserted
            // O nodo inserido passa a apontar, para trás, para o nodo anterior
            inserted.prev = before
            // O nodo inserido passa a apontar, para frente, para o nodo da posição
            inserted.next = nodePos
            // O nodo da posição passa a apontar, para trás, para o nodo inserido
            nodePos.prev = inserted
        }
        this.#count++
    }

    // Método de atalho para inserção na primeira posição
    insertHead(val){
        this.insert(0, val)
    }

    // Método de atalho para inserção na última posição
    insertTail(val){
        this.insert(this.#count, val)
    }

    // Método para remover um nodo de qualquer posição
    remove(pos){
        // 1º Caso: Lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }
        
        let removed

        // 2º Caso: Remoção do primeiro nodo
        if (pos === 0){
            removed = this.#head
            this.#head = removed.next
            if (this.#head){
                this.#head.prev = null
            }
            if (this.#count === 1){
                this.#tail = null
            }
        }
        // 3º Caso: Remoçao do último nodo
        else if (pos === this.#count - 1){
            removed = this.#tail
            this.#tail = removed.prev
            if (this.#tail){
                this.#tail.next = null
            }
            if (this.#count === 1){
                this.#head = null
            }
        }
        // 4º Caso: Remoção em posição intermediária
        else {
            removed = this.#findNode(pos)
            let before = removed.prev
            let after = removed.next
            
            before.next = after
            after.prev = before
        }
        this.#count--
        return removed.data
    }

    // Método de atalho para remoção da primeira posição
    removedHead(){
        return this.remove(0)
    }

    removeTail(){
        return this.remove(this.#count - 1)
    }

    // Retornar a posição do nodo cujo conteúdo foi especificado
    indexOf(val){
        const middle = Math.ceil(this.#count / 2)
        let node1 = this.#head
        let node2 = this.#tail


        for (let pos = 0; pos < middle; pos++){
            if(val === node1.data) {
                return pos
            }
            if (val === node2.data) {
                return this.#count - 1 - pos
            }
            node1 = node1.next
            node2 = node2.prev
        }
        return -1
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