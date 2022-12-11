// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

function perfeita (valor) {
    let soma = 0;
    for (i = 1; valor > i; i++) {
        if (valor % i === 0) {
            soma = soma + i
        }
    }
    if (soma == valor) {
        console.log("Perfeito!")
    } else {
        console.log("Não Perfeito!")
    }
}

perfeita(4)