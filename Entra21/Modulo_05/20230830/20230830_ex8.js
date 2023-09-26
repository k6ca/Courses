/*Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até ele.*/

let numUser
let quant = 0, nPrimo = 0, ehPrimo = 0
let divisor = 2;

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

numUser = Number(prompt("Entre com um numero: "))
numPrimo(numUser)

alert(`Numeros primos ${ehPrimo}. Não são primos ${nPrimo}.`)
//var determinadoNumero = 50;

//for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);