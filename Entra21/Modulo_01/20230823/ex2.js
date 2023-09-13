/*2) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. 
Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao 
usuário para digitar um número e informe se ele é primo. Depois implemente um laço de repetição para 
solicitar cinco números inteiros e mostre na tela se são primos ou não.*/

let rep = 0, divisor = 2
let numUser = 0

while(rep !== 5){
    numUser = Number(prompt("Entre com um número inteiro: "))
        while(divisor < numUser){
            divisor++

            if(numUser % divisor === 0){
                alert("não é primo")
                break
            }
            else{
                alert("É primo!")
                break
            }
    
        }
    rep++
    }
