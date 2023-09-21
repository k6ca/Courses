/*(Arrow Functions + métodos de Array)
Crie um array de preços e use o método filter para criar um novo array que contenha
apenas os preços inferioriores a R$ 50.*/

let valores = []
let entrada

for(i=0; i<5; i++){
    entrada = prompt("Entre com um valor: ")
    valores.push(entrada)
}

let inferiores = valores.filter((valor) => valor < 50);

alert(inferiores)