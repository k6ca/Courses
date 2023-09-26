/*
Avaliação II - Estruturas de Repetição
Jogos de adivinhação são comuns na programação. Utilizando uma das estruturas de repetição (WHILE, DO WHILE), criar um pequeno jogo, onde um número deve ser definido e armazenado
inicialmente em uma variável e ao iniciar, o sistema deve ficar perguntando ao usuário para digitar um número até que ele acerte o número que foi definido. Caso não acerte, a
pergunta fica repetindo. Quando acertar, o programa se encerra e mostra uma mensagem "Acertou o número, parabéns".
Critérios de Avaliação:
    OK - (2,0) Definir um número secreto.
    OK - (5,0) Criar o sistema de repetição que pergunta ao usuário números.
    OK - (3,0) Mostrar mensagem na tela ao final, quando acertar.*/

let numUser = 0
let numRandom = 0
let tentativas = 0
alert('Vamos iniciar o jogo de adivinhação.\nTente acertar o número SURPRESA, entre 1 e 10!')

numRandom = Math.floor(Math.random() * 10)
alert(numRandom)
numUser = Number(prompt('Vamos a sua primeira tentativa, digite um numero entre 1 e 10: '))

if(numRandom !== numUser){
    while(numRandom !== numUser){
        alert(`O número digitado por você foi ${numUser}, enquanto o número supresa é diferente!`)
        numUser = Number(prompt('Vamos tentar de novo, digite um numero entre 1 e 10: '))
        tentativas++
    }
}else{
    alert(`O número digitado por você foi ${numUser}, e o número surpresa é ${numRandom}!\n Parabéns, você acertou de primeira!`)
}

alert(`O número digitado por você foi ${numUser}, e o número surpresa é ${numRandom}!\n Parabéns, você acertou na  ${tentativas + 1} tentativa.`)