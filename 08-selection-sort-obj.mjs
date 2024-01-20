let pass, comp, trocas

function selecionSort(vetor, fnComp){

    pass = 0, comp = 0, trocas = 0

    for (let posSel = 0; posSel < vetor.length -1; posSel++){
        pass++

        let posMenor = posSel+1

        for(let i = posMenor + 1; i < vetor.length; i++){
            if(fnComp(vetor[posMenor] , vetor[i])){
                posMenor = i
                comp++
            }
        }

        if(fnComp(vetor[posSel] , vetor[posMenor])){
            [ vetor[posSel], vetor[posMenor] ]= [ vetor[posMenor], vetor[posSel] ]
            trocas++
        }
    }
}

// let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

// selecionSort(nums)
// console.log(nums)

import {objMotoristas} from './data/motoristas-obj-desord.mjs'

console.time('Tempo de ordenação')
// Ordenando por nome_motorista
selecionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024 // Somente para saber a quantidade de mémoria utilizada
console.timeEnd('Tempo de ordenação')

console.log(objMotoristas)
console.log({pass, comp, trocas, memoriaMB})

