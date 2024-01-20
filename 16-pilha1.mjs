let frase = "Socorram-me, subi no ônibus em Marrocos"

let vetor = []

for (let i = 0; i < frase.length; i++) {
    vetor.push(frase.charAt(i)) // frase[i] ou frase.split("")
}

// Essas são maneiras de descaracterizar uma pilha, não pode fazer isso

/*
vetor.unshift("x")

vetor.splice(11, 0, "W")

vetor.splice(23, 2)

console.log(vetor)
*/

// Na pilha utiliza somente push() e pop()

let reverso = ''

while (vetor.length > 0) {
    reverso += vetor.pop()
}

console.log(reverso)