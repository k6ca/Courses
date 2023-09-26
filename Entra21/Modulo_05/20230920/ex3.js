/*(Arrow Functions + métodos de Array)
DESAFIO REDUCE 1: Crie um laço de repetição para solicitar 5 números, armazene-os em
um array e use o método reduce para encontrar e mostrar o maior valor no array.*/


let numeros = []
let entrada

for(i=0; i<5; i++){
    entrada = prompt("Entre com um número: ")
    numeros.push(entrada)
}

let verificaMaior = numeros.reduce((maior, atual) => {
    if(atual> maior){
        return atual
    }else{
        return maior
    }
})

alert(verificaMaior)