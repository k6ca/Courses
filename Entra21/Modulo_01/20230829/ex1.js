/*1) Desenvolver um programa no qual o usuário 
-   digite o número de multas que deseja cadastrar e 
-   para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação.
-   Ao final, mostrar o somatório das multas e dos pontos, 
    -   caso os pontos alcancem 21 ou mais, exibir a mensagem 
        -   “Você está irregular”, senão, exibir “Você está regular”.*/

let multas, pontos, valor, totalPontos=0, valorTotal=0
let pontuacao = 20

multas = Number(prompt("Quantas multas deseja cadastrar?"))

for(i=0; i < multas; i++){
    valor = Number(prompt("Entre com o VALOR da multa?"))
    pontos = Number(prompt("Quantos PONTOS é a multa?"))
    valorTotal += valor
    totalPontos += pontos
}

alert(`Você tem um total de ${multas} multas, que somam R$ ${valorTotal} reais e tem um total de ${totalPontos} pontos.`)

if(totalPontos>pontuacao){
    alert("Você está IRREGULAR.")
}else{
    alert("Você está REGULAR.")
}
