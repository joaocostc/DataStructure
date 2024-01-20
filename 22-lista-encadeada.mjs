import LinkedList from "./lib/LinkedLista.mjs"

const lista  = new LinkedList()

// Verificar se a lista está vazia
console.log(lista.isEmpty)

// Adiciona elementos na lista

// 1º Caso: lista vazia
lista.insert(0, "Fusca")

// 2º Caso: inserção na primeira posição
lista.insert(0, "Brasília")

// 3º Caso: inserção     no final da lista
lista.insert(2, "Chevette")
lista.insert(3, "Opala")
lista.insert(4, "Monza")

console.log(lista.print())

// 4º Caso: inserir em uma posição intemediária
lista.insert(3, "Corcel")

console.log(lista.print())

let removido = lista.removedTail()

console.log({removido})

console.log()