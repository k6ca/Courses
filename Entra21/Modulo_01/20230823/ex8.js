/*8) Na maioria das linguagens de programação, é possível contar caracteres de uma string (palavra, 
    frase, etc). Criar um sistema no qual o usuário digite 5 palavras e ao final mostre o tamanho em 
    número de caracteres, de cada uma delas. (Pesquisar sobre o comando length, para solução).*/

let palavra, palavraS = ""
let entrada = 1
let tamanhoPalavra = 0


while(entrada !== 6){
    palavra = prompt("Entre com a palavra: ")
    alert(`A palavra ${palavra}, possui ${parseInt(palavra.length)} caracteres`)
    tamanhoPalavra = tamanhoPalavra + parseInt(palavra.length)
    palavraS = palavraS + palavra.toUpperCase() + ", "
    entrada++
}

alert(`As palavras digitadas foram ${palavraS}, e o total de caracteres digitados foi ${tamanhoPalavra}.`)
