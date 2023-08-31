/*Crie uma função que determine quantos números primos existem dentro de um
intervalo que o usuário informar. Utilize uma abordagem de repetição com for ou while.*/

let quant = 0, divisor = 2, nPrimo=0, ehPrimo=0
let numUser = 0
let numInicial, numFinal

numInicial = Number(prompt("Entre com o numero INICIAL do intervalo:"))
numFinal = Number(prompt("Entre com o numero FINAL do intervalo:")) + 1

while(numInicial !== numFinal){
        while(divisor < numInicial){
            divisor++

            if(numInicial % divisor === 0){
                nPrimo++
                break
            }
            else{
                ehPrimo++
                break
            }
    
        }
    quant++
    numInicial++
    }

    alert(`Foram ${quant} interações, são ${ehPrimo} numeros primos e ${nPrimo} numeros não primos.`)