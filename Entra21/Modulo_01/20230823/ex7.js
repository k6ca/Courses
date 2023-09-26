/*7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado
 possui 20 faces ou "lados" 
 - Com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é 
 solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um 
 D20.
 - A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores 
 da segunda e terceira jogadas.
 - Ao final mostrar a soma de cada jogador e suas posições.
 (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos 
   valores do dado, repetir a pergunta)*/

let dado1, dado2, dado3, dado4, pontoReal, pontoTotal
let jogadores = 0, jogador = 0
let pontos, pontoMax = 0, vitorioso = 1
let resultado = "", empate = ""
let tide = false

jogadores = Number(prompt("Entre com o número de jogadores: "))

while(jogadores !== jogador){

      dado1 = Math.floor(Math.random() * 20)
      dado2 = Math.floor(Math.random() * 20)
      dado3 = Math.floor(Math.random() * 20)
      dado4 = Math.floor(Math.random() * 20)
      pontoTotal = dado1 + dado2 + dado3 +dado4
      pontoReal = dado2 + dado3

      if(pontoReal == pontoMax){
         tide = true
      }

      if(pontoReal > pontoMax){
         pontoMax = pontoReal
         vitorioso = jogador
      }


      resultado = resultado + ` Jogador ${jogador} fez ${pontoReal} pontos,`



   jogador++
}
if(tide){
   alert('Houve um empate!')
   alert(`O resultado do jogo foi: ${resultado}.`)
   alert(`O campeão do jogo foi o jogador ${vitorioso}, com a pontuação ${pontoMax}.`)
}else{
   alert(`O resultado do jogo foi: ${resultado}.`)
   alert(`O campeão do jogo foi o jogador ${vitorioso}, com a pontuação ${pontoMax}.`)
}
