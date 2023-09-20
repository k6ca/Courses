/*(Arrow Functions + métodos de Array)
Crie um laço de repetição para solicitar 5 idades e armazená-las em um array, use o
método every para verificar se todos os usuários são maiores de idade.*/

let idades = []
let entrada

for(i=0; i<5; i++){
    entrada = prompt("Entre com uma idade: ")
    idades.push(entrada)
}

let maiorIdade = (age) => age >= 18;

alert(idades.every(maiorIdade));

