function bubbleSort(vetor, fnComp) { // let, PI são exemplos de palavras reservadas. Swap não é uma palavra reservada
    let swap

    do {
        swap = false
        for(let i = 0; i < vetor.length - 1; i++) {
            if(fnComp(vetor[i], vetor[i+1])) {
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                swap = true
            }
        }
    }while(swap) // faça enquanto o swap for verdadeiro
}

import {objMotoristas} from './data/motoristas-obj-desord.mjs'

/*
function compara(elem1, elem2) {
    elem1.nome_motorista > elem2.nome_motorista
}
*/

/*

// Ordenação crescente
bubbleSort(objMotoristas, (elem1, elem2)=> elem1.nome_motorista > elem2.nome_motorista)

console.log(objMotoristas)

// Ordenação decrescente
bubbleSort(objMotoristas, (elem1, elem2)=> elem1.nome_motorista < elem2.nome_motorista)

console.log(objMotoristas)

// Ordenação decrescente (ignorando acentos)
bubbleSort(objMotoristas, (elem1, elem2)=> elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-BR' <=0))

console.log(objMotoristas)

*/


// Ordenação dois níveis: Primeiro por razão_social, depois por nome_motorista
bubbleSort(objMotoristas, (elem1, elem2)=> {
    if(elem1.razao_social === elem2.razao_social){
        return elem1.nome_motorista > elem2.nome_motorista
    }
        return elem1.razao_social > elem2.razao_social
})

console.log(objMotoristas);
