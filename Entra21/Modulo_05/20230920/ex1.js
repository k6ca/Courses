/*(Arrow Functions + métodos de Array)
Crie um programa que recebe
- 10 números de inscrição para um campeonato, a partir desses números,
- crie um array para os jogadores do time de números pares e um outro
para os jogadores do time de números ímpares e 
- exiba na tela se os times estão com a mesma quantidade de jogadores.*/

let inscritos = []
let inscritosPares = []
let inscritosImpares = []
let jogo


for (i=0; i<10; i++) {
    let num = Math.floor(Math.random() * 10)
    inscritos.push(num)
}

alert(inscritos) //Simples Conferência


inscritosPares = inscritos.filter((inscrito) => inscrito % 2 == 0)
alert(inscritosPares)//Simples Conferência

inscritosImpares = inscritos.filter((inscrito) => inscrito % 2 != 0)
alert(inscritosImpares)//Simples Conferência

if(inscritosPares.length == inscritosImpares){
    alert("Possuem o mesmo numero de jogadores!")
}else{
    alert("Não possuem o mesmo número de jogadores.")
}

