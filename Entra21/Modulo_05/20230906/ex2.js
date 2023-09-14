/*Crie uma calculadora de média que solicite ao usuário 
-   um conjunto de números e calcule a média deles. 
-   Use uma função autoinvocada para encapsular o código da calculadora.*/



let resultado = somarNumerosECalcularMedia(5, 8, 10)
alert(`A média é ${resultado}`)

function somarNumerosECalcularMedia(num1, num2, num3){
  let soma = num1 + num2 + num3
  let mediaCalculada = calcularMedia(soma, 3)
  return mediaCalculada
}

function calcularMedia(somaDosNumeros, quantidade){
  let media = somaDosNumeros / quantidade
  return media
}