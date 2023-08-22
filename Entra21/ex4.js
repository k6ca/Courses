/*4) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, 
mostre "O número é ímpar!"*/

let numero
let saida

numero = Number(prompt("Entre com um número: "))

saida = numero % 2

if(saida == 1){
    alert("Número é impar.")
}else{
    alert("Número é par")
}