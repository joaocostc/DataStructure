import Deque from "./lib/Deque.mjs"

// Instanciando um novo Deque
let listaCompras = new Deque();

// Verificando se o deque está vazio
console.log(listaCompras.isEmpty)

// Imprimindo o deque
console.log(listaCompras.print())

// Produtos Alimentícios (no início da lista)
listaCompras.insertFront("Arroz")
listaCompras.insertBack("Feijão")
listaCompras.insertBack("Macarrão")
//Imprimindo o deque(após a inserção dos produtos no ínicio do vetor)
console.log(listaCompras.print())

// Produtos de Higiene e Limpeza (no final da lista)
listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("Sabonete")
listaCompras.insertBack("Pasta de dente")
// Imprimindo o deque (após a inserção dos produtos no final do vetor)
console.log(listaCompras.print())

// Produtos adicionados depois
listaCompras.insertFront("Café")
listaCompras.insertBack("Água Sanitária")
// Imprimindo o deque (após a inserção de um produto no início e outro produto no final do vetor)
console.log(listaCompras.print())

// Produtos removidos depois
let removido = listaCompras.removeBack()
listaCompras.removeFront()
console.log("Removido:", removido) // console.log({removido}) é outra maneira de mostrar essa saída

// Imprimindo o deque (após a remoção de um produto no final e outro no início do vetor)
console.log(listaCompras.print())