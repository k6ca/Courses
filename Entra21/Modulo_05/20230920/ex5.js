/*(Arrow Functions + métodos de Array)
Fazer um programa no qual o usuário deve montar uma salada de frutas com uma
cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando
for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”.
Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)*/

let fruta="", salada=""
let cereja = true

alert("Vamos montar uma SALADA DE FRUTAS, pronto?")

do{
    fruta = prompt("Qual fruta deseja adicionar a sua salada?")
    salada += fruta + ', '
    
    if(fruta === "cereja"){
        cereja = false
    }

}while(cereja)

alert(`Sua salada de frutas contém as seguintes frutas: ${salada}.`)