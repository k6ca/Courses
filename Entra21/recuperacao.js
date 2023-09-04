/*1) Criar um sistema utilizando Estruturas Condicionais IF / ELSE para o menu principal (tipo de conversão) e para os menus secundários (especificação da conversão), que simule conversões de tempo e tamanho, de acordo com as unidades de medidas. O programa deverá possuir uma mensagem inicial explicando sua funcionalidade e em seguida mostrar um menu com as seguintes opções:

1 - Conversões de tempo
2 - Conversões de tamanho
3 - Sair

Após escolher uma das alternativas (tipo de conversão), para cada escolha devem surgir as seguintes opções:

Conversões de tempo

A - Converter tempo de horas para minutos.
B - Converter tempo de minutos para segundos.
C - Cancelar e Sair

Após escolher uma das opções, solicitar ao usuário que digite o valor para converter e mostrar na tela o resultado da conversão. Caso sejam escolhidas as opções de SAIR ou CANCELAR e SAIR, encerrar o programa.


Conversões de tamanho

A - Converter tamanho de quilômetros para metros.
B - Converter tamanho de metros para centímetros.
C - Cancelar e Sair

Após escolher uma das opções, solicitar ao usuário que digite o valor para converter e mostrar na tela o resultado da conversão. Caso sejam escolhidas as opções de SAIR ou CANCELAR e SAIR, encerrar o programa.


Critérios de avaliação:

(1,0) Criar uma tela (janela) inicial, explicando o programa.
(1,0) Validar opções do menu principal e dos menus secundários.
(1,0) Validar respostas também para letras minúsculas (a, b, c) nos menus secundários.
(1,0) Realizar os cálculos de conversão corretamente para os tipos de medidas.
(1,0) Mostrar mensagens com os resultados para os tipos de medidas.*/


let conversaoTempo
let conversãoTamanho
let tipoConversao
let valorTempo
let valorTempoMinutos
let valorTempoSegundos 
let valorTamanho
let valorTamanhoMetros
let valorTamanhoCentimetros

alert ('Welcome!\n\nVocê está no Conversão!\n\nConversão é o programa que veio para facilitar seu dia a dia, permitindo realizar conversões de tempo e tamanho!')

tipoConversao = prompt ('Digite o tipo de conversão desejada:\n\n1 - Conversões de tempo\n2 - Conversões de tamanho\n3 - Sair')

if (tipoConversao == 1) {

    conversaoTempo = prompt (`Você escolheu a conversão de tempo.\n\nQual tipo de conversão de tempo você deseja realizar?\n\nA - Converter tempo de horas para minutos.\nB - Converter tempo de minutos para segundos.\nC - Cancelar e Sair`).toUpperCase()


    if (conversaoTempo == 'A') {

    valorTempo = prompt ('Digite o valor que deseja converter de horas para minutos')    

    valorTempoMinutos = valorTempo * 60    

    alert (`Como resultado da conversão, informamos que ${valorTempo} h = ${valorTempoMinutos} min`)

    }else if (conversaoTempo == 'B') {
        
    valorTempo = prompt ('Digite o valor que deseja converter de minutos para segundos') 
    
    valorTempoSegundos = valorTempo * 60
    
    alert (`Como resultado da conversão, informamos que ${valorTempo} min = ${valorTempoSegundos} seg`)

    }else if (conversaoTempo == 'C') {

    alert ('Você escolheu cancelar e sair do programa. Obrigado por utilizar o Conversão!')

    }
}
        

if (tipoConversao == 2) {

    conversaoTamanho = prompt (`Você escolheu a conversão de tamanho.\n\nQual tipo de conversão de tamanho você deseja?\n\nA - Converter tamanho de quilômetros para metros.\nB - Converter tamanho de metros para centímetros.\nC - Cancelar e Sair`).toUpperCase()

    

    if (conversaoTamanho =='A') {

        valorTamanho = prompt ('Digite o valor que deseja converter de quilômetros para metros')

        valorTamanhoMetros = valorTamanho * 1000

        alert (`Como resultado da conversão, informamos que ${valorTamanho} km = ${valorTamanhoMetros} mt`)

    }else if (conversaoTamanho == 'B') {

        valorTamanho = prompt ('Digite o valor que deseja converter de metros para centímetros')
        
        valorTamanhoCentimetros = valorTamanho * 100
            
        alert (`Como resultado da conversão, informamos que ${valorTamanho} mt = ${valorTamanhoCentimetros} cm`)
        
        }else if (conversaoTamanho == 'C'){
        
        alert ('Você escolheu cancelar e sair do programa. Obrigado por utilizar o Conversão!')
        
        }
    }

if (tipoConversao == 3) {
    
    alert (`Você escolheu sair do programa. Obrigado por utilizar o Conversão!`)

}