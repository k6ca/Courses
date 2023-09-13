/*9) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de 
uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados)
. Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que
     25).*/

let densidadeDem, populacao, area

populacao = Number(prompt("Entre com o valor populacional: "))
area = Number(prompt("Entre com a area: "))

densidadeDem = populacao / area

if(densidadeDem >=100){
     alert("Densidade alta")
}else if(densidadeDem < 100 && densidadeDem >= 25){
     alert("Densidade média")
}else if(densidadeDem < 25){
     alert("Densidade baixa.")
}