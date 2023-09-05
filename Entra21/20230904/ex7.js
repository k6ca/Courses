/*
7) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. 
(Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).
*/
let list = []
let menores = []
let resultado = 0
let maiorNum = 1
let num = 0

for(i=0; i<5; i++){
    num = Number(prompt('Digite um número: '))
    list.push(num)

    if(maiorNum>=num){
        menores.push(num)
    }else{
        maiorNum = num
    }
   
}
console.log(maiorNum)
console.log(list)

for(i=0; i<5; i++){
    resultado += maiorNum * menores[i]
}

console.log(menores)
console.log(resultado)
