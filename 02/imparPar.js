// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.


function imparPar (num) {
    if (num / 2 == 0) {
        console.log(`${num} é par.`)
    } else {
        console.log(`${num} é impar.`)
    }
}

let num = Number.parseInt(prompt("Digite o numero que deseja saber se é impar ou par: "));

imparPar(num)