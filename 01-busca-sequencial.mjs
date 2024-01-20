function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] === valorBusca) return i;
    }
    return -1 // caso percorra todo o for, porém não encontra o valor (não existe)
}

// const frutas = ["laranja", "maça", "uva", "pera", "jabuticaba", "limão"];
// console.log("A posição da uva é:", buscaSequencial(frutas, "uva"));

import { nomes } from './data/vetor-nomes.mjs' 

console.log("Posição de ALEXANDRE:", buscaSequencial(nomes, "ALEXANDRE"));