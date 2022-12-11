// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

function horas (segundos) {
    let minutos = segundos / 60
    let horas = segundos / 3600
    console.log(segundos)
    console.log(minutos)
    console.log(horas)
}
horas(Number.parseInt(prompt("Digite o segundos que deseja converter: ")))