/*Avaliação I - Estruturas Condicionais

No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve 
ou não ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando 
condicionais (IF/ELSE), que receba essas avaliações do comprador (3 notas notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar
 o índice do produto e mostrar mensagens 
 "Ganha destaque!" (índice igual ou maior que 9) ou 
 "Não ganha destaque!" (índice abaixo de 9).
Critérios de Avaliação:
    OK - (3,0) Receber as notas da avaliação.
    OK - (3,0) Calcular e mostrar o índice do produto (média).
    OK - (4,0) Mostrar mensagem na tela se ganhou destaque ou não.*/

let qualidade = 0
let custoBeneficio = 0 
let durabilidade = 0
let media = 0

alert('Vamos avaliar o produto?')
qualidade = Number(prompt('No quesito qualdiade, de 0 a 10, qual sua nota?'))
custoBeneficio = Number(prompt('Quanto ao CUSTO/BENEFÍCIO do produto adquirido, de 0 a 10?'))
durabilidade = Number(prompt('E a durabilidade do seu produto, de 0 a 10?'))

media = (qualidade + custoBeneficio + durabilidade) / 3
alert(`Sua nota média foi de ${media.toFixed(2)}!`)
if(media>=9){
    alert(`Ganha destaque! Sua avaliação teve nota ${media.toFixed(2)}`)
}else if(media < 9){
    alert(`Não ganha destaque! Sua avaliação teve nota ${media.toFixed(2)}`)
}








