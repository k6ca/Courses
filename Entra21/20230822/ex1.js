/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente      D) Sair

Mostrar mensagens para cada opção!*/

let opcao

opcao = String(prompt(`Seja Bem-vindo ao nosso atendimento!\nComo podemos lhe atender? 
 \nA) Falar com a atendente\nB) Falar com o RH\nC) Falar com o gerente\nD) Sair`)).toUpperCase()

 switch(opcao)
 {
 case "A":
    alert("Falar com a atendente")
    break;
 
 case "B":
    alert("Falar com o RH")
    break;
 
 case "C":
    alert("Falar com o gerente")
    break;
 
 case "D":
    alert("Sair")
    break;
 
 default:
    alert("ERRADO")
        break;
 }

