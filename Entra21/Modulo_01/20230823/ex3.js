/*3) Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro
 digitado pelo usuário.*/

let numeroFinal = Number(prompt("Digite um número para criação da lista: "))
let numeroAtual = 2


while(numeroAtual <= numeroFinal){
    let ehPrimo = true
    let divisor = 2

    do{
        if(numeroAtual % divisor === 0){
            ehPrimo = false
            break
        }

    divisor++
    }while(divisor <= numeroAtual / 2)

    if (ehPrimo){
        alert(`Esses números são primos: ${numeroAtual}`)
    }
    numeroAtual++

}