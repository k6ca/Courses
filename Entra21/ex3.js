/*3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). 
Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. 
Caso contrário, mostrar mensagem "Não pode se vacinar!".*/

let nomePessoa
let idadePessoa
let comordidade

nomePessoa = String(prompt("Qual seu nome? "))
idadePessoa = Number(prompt("Qual sua idade?"))
comorbidade = String(prompt("Possui comorbidade(sim/nao)? "))

if(idadePessoa>= 60 || comorbidade == "sim"){
    alert("Pode se vacinar.")
}else{
    alert("Não pode se vacinar")
}