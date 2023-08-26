/*4) Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. Porém, você 
tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, repetidamente. 
Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:

a) O total gasto em reais dos vinis.
b) O valor que sobrou em dinheiro.
c) Quantos vinis foram comprados.
d) A média de preço dos vinis.
e) O vinil mais caro e o mais barato.*/

let budget = 200, custo = 0, valor = 0
let vinil, vinilMaxNome, viniMinNome
let viniQ = 0, media = 0, viniMax = 0, viniMin = 1000
let compras = "Você comprou os seguintes Vinis, "

while(valor <= 200){
    vinil = prompt("Qual o nome do vinil?")
    custo = Number(prompt("Qual o valor do vinil?"))

    if(valor<budget){
        compras = compras + `vinil ${vinil} ao valor de ${custo}, `
        viniQ++
        valor = valor + custo
        media = valor/viniQ
    
        if(custo>viniMax){
            vinilMaxNome = vinil
            viniMax = custo
        }
        if(viniMin > custo){
            viniMinNome = vinil
            viniMin = custo
        }    
    }

}


alert(`O valor total gasto em vinis foi de ${valor}.`)
alert(`Restou um saldo de ${budget - valor}.`)
alert(`Comprou ${viniQ} vinis.`)
alert(`A média de valor foi de ${media}.`)
alert(`O vinil mais caro foi ${vinilMaxNome} com o valor de ${viniMax}, e o vinil mais barato foi ${viniMinNome}, com o valor de ${viniMin}.`)

alert(compras + ".")