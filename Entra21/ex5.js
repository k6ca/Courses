/*5) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o 
IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de 
peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).*/

let altura
let peso
let IMC

altura = Number(prompt("Entre com a sua altura em cm"))
peso = Number(prompt("Entre com seu peso em kg: "))

IMC = (peso / (altura*altura)) * 100 

if(IMC < 0.18){
    alert("Você esta abaixo do peso. " + IMC)
}if(IMC >= 0.18 && IMC<= 0.25){
    alert("Você esta com o peso ideal. " + IMC)
}if(IMC > 0.25){
    alert("Você esta acima do peso. " + IMC)
}
