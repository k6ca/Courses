/*
Avaliação III - Vetores (Listas)
Listas (vetores) são estruturas para armazenar muitos dados em um único identificado, como se fosse uma variável. 
    Criar uma lista vazia chamada "carros" e após o 
    usuário deve digitar 5 nomes de carros.
    Adicionar cada carro digitado na lista. 
    Ao final mostrar a lista completa.
Critérios de Avaliação:
    OK - (2,0) Criar a lista ou vetor corretamente.
    OK - (3,0) Fazer 5 perguntas ao usuário para digitar os nomes dos carros.
    OK - (3,0) Adicionar os carros na lista utilizando o método de vetor adequado.
    OK - (2,0) Mostrar a lista de carros completa.*/

let carros = []
let vagas = 5
let temp = ''

for(i=vagas; i>0; i--){
    temp = prompt("Entre com o carro a ser inserido: ")
    carros.push(temp)
}

alert(`Os carros inseridos, foram:\n${carros}`)