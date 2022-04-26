const nota1 = 5
const nota2 = 8

function calcularMedia() {
 const mediaFinal = (nota1 + nota2) / 2
 return mediaFinal
}

const notaFinal = calcularMedia()

console.log(notaFinal)


if (notaFinal >= 6) {
    console.log('Parabens você passou!!')
} else {
    console.log('voce não passou cara!')
}