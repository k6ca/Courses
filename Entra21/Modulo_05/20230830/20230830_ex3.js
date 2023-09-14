/*Crie uma função que determine quantos números primos existem dentro de um
intervalo que o usuário informar. Utilize uma abordagem de repetição com for ou while.*/

/* SÂO números primos: 2, 3, 5, 7, 11, 13, 17, 19 */

/*Código Correto, porém não pega o número 2*/

let quant = 0, nPrimo=0, ehPrimo=0
let numInicial, numFinal
let listPrimos = []

numInicial = Number(prompt("Entre com o numero INICIAL do intervalo:"))
numFinal = Number(prompt("Entre com o numero FINAL do intervalo:")) + 1

function numeroPrimo(num) {
    for(i=2; i<num; i++) {
      if(num % i === 0) {
        nPrimo++
        break
      }else{
        ehPrimo++
        listPrimos.push(numInicial)
        break
      }
    }
  }

while(numInicial <= numFinal){
    numeroPrimo(numInicial)
    quant++
    numInicial++
    }

alert(`Foram ${quant} interações, são ${ehPrimo} numeros primos e ${nPrimo} numeros não primos./nSegue a lista ${listPrimos}`)


