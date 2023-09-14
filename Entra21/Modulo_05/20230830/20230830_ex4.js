/*Utilizando funções, fazer um sistema que receba um número e retorne se ele é par ou
ímpar.*/

/*CóDIGO CORRETO*/

let numUser = 0
let par = true

function ehPar(numUser){
    if(numUser % 2 === 0){
        alert("É PAR!")
    }
    else{
        alert("Não é par!")
    }
}

numUser = Number(prompt("Entre com um numero: "))

ehPar(numUser)
