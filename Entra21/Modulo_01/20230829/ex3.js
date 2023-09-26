/*3) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. 
Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. */

let media, idade, idadeMaior=0
let nome, nomeMax

alert("Digitar o Nome e Idade de 5 pessoas. Retornar a média da idade e a maior idade dentre elas.")

for(i=0; i>5; i++){
    nome = prompt("Qual o nome da pessoa?")
    idade = Number(prompt(`Entre com a idade de ${nome}:`))
    
    if(idade>idadeMaior){
        nomeMax = nome
        idadeMaior = idade
    }
    media += idade
}

media = media / 5

alert(`O ${nomeMax} é o mais velho com ${idadeMaior}. A média de idade foi de ${media}.`)