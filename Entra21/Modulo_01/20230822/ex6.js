/*6) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca 
caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo.
Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos 
pontos) e a classifição: 
  - 15 pontos (deus da peteca), de 
  - 14 a 10 (petequeiro profissa), de 
  - 9 a 5 (petequeiro de final de semana), de 
  - 4 a 1 (pseudo-petequeiro) e 
  - 0 pontos (nunca petequeiro). */

/* POSSUI UM ERRO!*/

let totalPontos = 0
let one = 0
let two = 0
let three = 0

one = Number(prompt("Pontuação arremesso um: "))
two = Number(prompt("Pontuação arremesso dois: "))
three = Number(prompt("Pontuação arremesso três: "))

totalPontos = one + two + three

switch(true){
  case (totalPontos == 15):
    message = `Deus da Peteca!`
    break

  case (totalPontos <= 14 && totalPontos >= 10):
    message = `Petequeiro Profissa!`
    break

  case(totalPontos <= 9 && totalPontos >= 5):
    message = `Petequeiro de Final de Semana!`
    break
    
  case(totalPontos <= 4 && totalPontos >= 1):
    message = `Pseudo Petequeiro!`
    break

  case(totalPontos < 1 ):
    message = `WTF, Petequeiro de merda!`
    break

  default:
    break
}

alert(message + `Totalizou ${totalPontos}.`)