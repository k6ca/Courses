/*Faça um programa que recebe três números do usuário
-   , e identifica o maior através de uma função
-    e o menor número através de outra função e depois os exibe por um alert.*/

/*CóDIGO CORRETO*/

let x, y, z
let maior, menor, maiorNum, menorNum

function numMaior(x, y, z){
    maior = x
    
    if(y > maior){
        maior = y
    }
    if(z > maior){
        maior = z
    }

    return maior
}

function numMenor(x, y, z){
    menor = x
    
    if(y < menor){
        menor = y
    }
    if(z < menor){
        menor = z
    }

    return menor
}

x = Number(prompt("Digite o primeiro numero: "))
y = Number(prompt("Digite o segundo numero: "))
z = Number(prompt("Digite o terceiro numero: "))

maiorNum = numMaior(x, y, z)
menorNum = numMenor(x, y, z)

alert(`Dentre os número digitados, o maior é ${maiorNum} e o menor é ${menorNum}.`)
