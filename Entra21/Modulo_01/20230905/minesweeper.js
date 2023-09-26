/*Sortear randomicamente ou preencher, as nova poesições do tabuleiro, com os números 0 ou 1, sendo 0 um local sem bomba e 1 um local com bomba. 
-   Ao iniciar o jogo, informar ao jogador quantas bombas e quantos pontos precisa para ganhar. 
(Desafio: mostrar a cada rodada o tabuleiro atualizado)*/

let matriz = [['5','5','5'],['5','5','5'],['5','5','5']]
let matrizMascara = [['?','?','?'],['?','?','?'],['?','?','?']]
let countZero=0, countUm=0
let jogada = [5, 5]
let x, y

//Criando Matriz para o jogo
for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){

            matriz[i][j] = Math.floor(Math.random() * (2 - 0) - 0)

            if(matriz[i][j] == 0){
                countZero++
            }else{
                countUm++
            }
        }
}

alert(`Temos ${countUm} bombas e você precisa fazer ${countZero} pontos.`)

do{
    alert.table(matrizMascara)
    x = Number(prompt(Jogada coordenada X(entre 0 e 2): ))
    y = Number(prompt(Jogada coordenada Y(entre 0 e 2): ))
    if()

}while

console.table(matriz)
//console.table(matrizMascara)