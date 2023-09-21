/*(Arrow Functions + métodos de Array)
DESAFIO REDUCE 2: 
- Crie uma calculadora de médias solicitando as notas por meio
de um laço de repetição while,
- onde o usuário tenha a opção de digitar uma nova nota ou verificar resultado digitando “-1”. Armazene as notas em um Array e utilize
- o método reduce para obter a soma delas, 
- após ter a soma calcule a média dividindo
- a soma pelo tamanho do array (array.length).*/

let arrayNotas = []
let nota = 0 
let somaNotas = 0
let quantNotas = 0
let media = 0

do{
    nota = Number(prompt("Entre com a nota: "))
    if(nota != -1){
        quantNotas ++
        arrayNotas.push(nota)
        //somaNotas += nota
       
    }else{
        alert(`Nota digitada foi ${nota}, opção SAIR.`)
    }

}while(nota != -1)

somaNotas = arrayNotas.reduce((somaAcumulada, notaAtual) =>{
    let novaSoma = somaAcumulada + notaAtual
    return novaSoma
}, 0)

media = somaNotas / quantNotas

alert(`A sua média foi ${media}`)