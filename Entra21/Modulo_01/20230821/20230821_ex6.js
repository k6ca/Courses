/*6) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. 
Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.*/

let nome1, nome2, nome3, nome4, nome5
let idade1, idade2, idade3, idade4, idade5
let media

nome1 = String(prompt("Entre com o nome da 1° pessoa: "))
idade1 = String(prompt("Entre com a idada da 1° pessoa: "))
nome2 = String(prompt("Entre com o nome da 2° pessoa: "))
idade1 = String(prompt("Entre com a idada da 2° pessoa: "))
nome3 = String(prompt("Entre com o nome da 3° pessoa: "))
idade1 = String(prompt("Entre com a idada da 3° pessoa: "))
nome4 = String(prompt("Entre com o nome da 4° pessoa: "))
idade1 = String(prompt("Entre com a idada da 4° pessoa: "))
nome5 = String(prompt("Entre com o nome da 5° pessoa: "))
idade1 = String(prompt("Entre com a idada da 5° pessoa: "))

media = (idade1 = idade2 + idade3 + idade4 + idade5)/5

if(idade1>idade2){
    if(idade1>idade3){
        if(idade1>idade4){
            if(idade1>idade5){
                alert("Idade da primeira pessoa é a maior")
            }if(idade5>idade2){
                alert("Idade 5 é maior.")
        }
    }
}
