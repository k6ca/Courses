/*4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação
a ser realizada:
    1) Saldo
    2) Depósito
    3) Saque. 
    -   Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo 
    atualizado na tela. 
    -   Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado
    caso haja saldo suficiente. 
    -   Criar uma variável com um valor que represente o saldo inicial.*/

let operacao
let contaBancaria
let saldo = 1000.00
let deposito, saque

contaBancaria = Number(prompt("Qual o número da sua conta bancária?"))
operacao = prompt("Qual opereacao deseja realizar hj?(Saldo, Saque, Deposito)").toLowerCase()

switch(true){
    case operacao == "saldo":
        alert(`O Saldo da conta bancária ${contaBancaria}, é de R$ ${saldo}.`)
        break
    
    case operacao == "deposito":
        deposito = Number(prompt("Qual o valor do deposito?"))
        saldo += deposito
        alert(`O Saldo da conta bancária ${contaBancaria} atualizado, é de R$ ${saldo}.`)
        break

    case operacao == "saque":
        saque = Number(prompt("Qual o valor do saque?"))
        if(saque > saldo){
            alert("Saldo insuficiente.")
        }else{
            saldo =- saque
            alert(`O Saldo da conta bancária ${contaBancaria} atualizado, é de R$ ${saldo}.`)
        }
        break

    default:
        break
}