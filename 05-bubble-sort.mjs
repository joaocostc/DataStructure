let trocas, comp, pass

function bubbleSort(vetor) { // não é tão eficiente, pois ele precisa passar várias vezes para realizar a ordenação
    let swap // trocou
    pass = 0, comp = 0, trocas = 0

    do {
        swap = false
        pass++

        for(let i= 0; i < vetor.length -1; i++) {
            comp++
            if(vetor[i] > vetor[i+1]){
                trocas++
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]] // descontrução do vetor (somente inverter o sinal para utilizar ele decrescente)
                swap = true
            }
        }
    }while(swap)
}

/*
let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

bubbleSort(nums) // primeiro chamo a função para ordenar o código, para depois verificar em um console.log como ficou essa ordenação

console.log("Ordenação: ", nums)
console.log({pass, comp, trocas})
*/

import {nomes} from './data/nomes-desord.mjs'

console.time("Tempo de ordenação")// iniciar o timer
bubbleSort(nomes)
console.timeEnd("Tempo de ordenação")// finalizar o timer para verificar o tempo que o algoritmo demora para executar

console.log(nomes)
cconsole.log({pass, comp, trocas})

