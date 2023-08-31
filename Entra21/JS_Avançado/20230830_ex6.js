/*Crie 2 funções: 
    -   a primeira recebe 3 números como argumento, realize a soma desses
3 números e chama a segunda função, 
    -   que por sua vez recebe como argumento uma soma e uma quantidade e retorna a média.
    -   Armazene o resultado da média em uma variável e exiba por um alert.*/

let x, y, z
let saida

function primeira(x, y, z){
    resultado = x + y + z
    quantidade = resultado - 3
    return segunda(resultado, quantidade)
}

function segunda(soma, quant){
    media = (soma + quant) / 2
    return media
}

x = Number(prompt("Digite o primeiro numero: "))
y = Number(prompt("Digite o segundo numero: "))
z = Number(prompt("Digite o terceiro numero: "))

saida = primeira(x, y, z)

alert(`Funcao Um, chama funcao Dois e resulta em ${saida}.`)