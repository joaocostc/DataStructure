function mergeSort(vetor) {
    // para ser dividido, um vetor precisa ter pelo menos 2 elementos 
    if(vetor.length < 2) {
        return vetor
    }

    // calcula o meio do vetor
    let meio = Math.floor(vetor.length / 2)
    
    // divide o vetor em duas partes utilizando o slice() da primeira posição(inclusive) até a última posição informada(exclusive)
    let vetEsq = vetor.slice(0, meio)

    // quando o segundo parâmetro não é informado, o slice() vai até o final do vetor
    let vetDir = vetor.slice(meio)

    // chama a função recursivamente para as duas partes
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    // junta as duas partes ordenadas vetEsq com vetDir
    // cria um vetor vazio para receber os elementos ordenados

    let posEsq = 0, posDir = 0, vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        // o menor elemento é o vetor esquerdo
        if (vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        } else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }

    // determinar qual vetor ainda tem sobra
    let sobra
    
    // minha sobre no vetor esquerdo
    if (posEsq < posDir) {
        sobra = vetEsq.slice(posEsq)
    } else {
        sobra = vetDir.slice(posDir)
    }

    return [...vetRes, ...sobra] // notação spread
}


let nums = [54, 10, 5, 60, 80, 10, 20]

let numsOrdenados = mergeSort(nums)

console.log(numsOrdenados)

import { nomes } from './data/nomes-desord.mjs'

let nomesOrdenados = mergeSort(nomes)

console.log(nomesOrdenados)




