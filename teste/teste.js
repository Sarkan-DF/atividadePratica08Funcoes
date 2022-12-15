let listaNumeros = [14, 25, 38, 17, -7, 8, 5];

for (let i = 0; i < listaNumeros.length; i++) {
    if (isPrime(listaNumeros[i])) {
        console.log(`O ${listaNumeros[i]} é primo!`)
    } else {
        console.log(`O ${listaNumeros[i]} não é primo!`)
    }
};

function isPrime (num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
};