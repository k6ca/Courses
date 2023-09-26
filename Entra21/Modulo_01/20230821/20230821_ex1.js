/*1) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), 
faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média.
 Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média.*/

 let nota1
 let nota2
 let nota3
 let media

 nota1 = Number(prompt('Entre com 1° nota: '))
 nota2 = Number(prompt('Entre com 2° nota: '))
 nota3 = Number(prompt('Entre com 3° nota: '))

 media = (nota1 + nota2 + nota3)/3

 if(media >= 7){
    alert("Show, sua média é maior que 7. Aprovado!")
 }else{
    alert("Que pena, você está reprovado. Sua média é menor que 7.")
 }