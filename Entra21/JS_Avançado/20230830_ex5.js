/*Criar uma calculadora utilizando funções para cada operação.
-   O usuário deve digitar o primeiro número,
-   O segundo número e em seguida a operação que deseja realizar
(   1 - Soma 
    2 - Subtração 
    3 - Multiplicação 
    4 - Divisão). 
O resultado deve ser mostrado na tela.
Digite o primeiro número:
Digite o segundo número:
Qual operação deseja realizar? 1 – Soma 2 – Subtração 3 – Multiplicação 4 - Divisão*/

/*CóDIGO CORRETO*/

let primeiroNumero, segundoNumero, resultado, operacao

function soma(x, y){
    resultado = x + y
    return resultado
}

function subtracao(x, y){
    resultado = x - y
    return resultado
}

function multiplicacao(x, y){
    resultado = x * y
    return resultado
}

function divisao(x, y){
    resultado = x / y
    return resultado
}

primeiroNumero = Number(prompt("Digite o primeiro número:"))
segundoNumero = Number(prompt("Digite o segundo número:"))
operacao = Number(prompt("Qual operação deseja realizar? 1 – Soma 2 – Subtração 3 – Multiplicação 4 - Divisão"))

switch(operacao){
    case 1:
        soma(primeiroNumero, segundoNumero)
        break
    
    case 2:
        subtracao(primeiroNumero, segundoNumero)
        break
    
    case 3:
        multiplicacao(primeiroNumero, segundoNumero)
        break
    
    case 4:
        divisao(primeiroNumero, segundoNumero)
        break
    
    default:
        break
    
}

alert(`O resultado da operação foi ${resultado}.`)