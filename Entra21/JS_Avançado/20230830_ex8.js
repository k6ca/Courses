/*Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até ele.*/

let numUser
let quant = 0, nPrimo = 0, ehPrimo = 0
let divisor = 2;

function numPrimo(num) {
    for(num; num != 0; num--){
        for (divisor; divisor < num; divisor++) {
            if (num % divisor === 0){
                nPrimo++
            }else{
                ehPrimo++
            }
    
        }
    }

    return nPrimo, ehPrimo
}

numUser = Number(prompt("Entre com um numero: "))
numPrimo(numUser)

alert(`Numeros primos ${ehPrimo}. Não são primos ${nPrimo}.`)
//var determinadoNumero = 50;

//for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i);