// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

function notas (nota1, nota2, nota3, letra) {
    if (letra === "a") {
        let mediaAritmetica = (nota1 + nota2 + nota3) / 3;
        return mediaAritmetica;
    } else if (letra === "p") {
        let mediaPonderada = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / (5 + 3 + 2);
        return mediaPonderada;

    }
}


console.log(notas(5,6,7,"a"))