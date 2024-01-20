import Stack from "./lib/Stack.mjs" // por ser uma classe, não há a necessidade de colocar entre chaves. Se for importar mais de uma classe, poderia colocar as chaves e separar por vírgulas, dessa forma: {Stack, OutraClasse}

let pilha = new Stack()

console.log ("Está vazia?\nR:", pilha.isEmpty)

pilha.push(35)
pilha.push(80)
pilha.push(7)
pilha.push(15)

console.log ("Está vazia?\nR:", pilha.isEmpty)

console.log(pilha.print())

let removido = pilha.pop()

console.log("O elemento removido:", removido)

pilha.push(20)

console.log(pilha.print())

console.log("O último elemento é:\nR:",pilha.peak())
