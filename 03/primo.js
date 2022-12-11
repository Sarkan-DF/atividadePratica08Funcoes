// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };

let num = Number.parseInt(prompt("Digite o numero que deseja verificar se é primo: "))
let = numPrimo = 0;
numPrimo = isPrime(num)

if (numPrimo == false) {
    mensagem = "Não é primo!"
} else {
    mensagem = "É primo!"
}

console.log(mensagem)