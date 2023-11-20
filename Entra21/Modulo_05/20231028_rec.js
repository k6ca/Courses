/*O site Avalia Rangos precisa de um desenvolvedor para criar seu sistema de classificação de restaurantes, que vai servir como um
classificado de restaurantes indicando o tipo de comida que é servida, a cidade e a classificação da crítica gastronômica.

Você foi contratado para desenvolver esse sistema utilizando JavaScript. Dessa forma elabore um sistema que permita:

1- Adicionar objetos que representam restaurantes para um Array, tais objetos devem conter pelo menos as propriedades de nome do restaurante, tipo de comida servida, cidade e a classificação da crítica gastronômica (1 a 5). (1 ponto)

2- Remover um restaurante pelo seu nome. (1 ponto)

3- Editar a nota de um restaurante consultado pelo nome. (2 pontos)

4- Consultar a lista restaurantes que possuem determinado tipo de comida. (1 ponto)

5- Consultar os restaurantes que possuem uma classificação atrativa (nota 4 ou mais). (1 ponto)

6- Consultar a média de classificação de todos os restaurantes (utilizando reduce e length). (2 pontos)

7- Consultar os restaurantes que ficam em uma cidade específica. (1 ponto)

8- Consultar a quantidade de restaurantes que possuem determinada nota. (1 ponto)

Para facilitar o desenvolvimento inicie a lista de restaurantes com pelos menos 3 cadastros.*/

/*1*/
let restaurantes =[
    {
        "nome": "busanello lanches",
        "comida": "podrão",
        "cidade": "floripa",
        "nota": 5
    },
    {
        "nome": "villa açoriana",
        "comida": "pizza",
        "cidade": "florianopolis",
        "nota": 3
    },
    {
        "nome": "vegano sem energia",
        "comida": "vegana",
        "cidade": "perdizes",
        "nota": 1
    },
]
console.log(restaurantes)

/*2*/
let removeRest = prompt('Entre com o nome do restaurante que deseja remover: ').toLowerCase()
let restRemoverIndice = restaurantes.findIndex((index) => index.nome == restRemoverIndice)
console.log(indice)
restaurantes.splice(restRemoverIndice,1)
console.log(restaurantes)

/*3*/
let restEditNota = prompt(`Qual o restaurante que deseja editar a nota(digite o nome):`).toLocaleLowerCase()
let restEditNotaIndice = restaurantes.findIndex((index) => index.nome == restEditNotaIndice)
let novaNotaRest = number(prompt(`A nota atual do ${restaurantes[restEditNotaIndice].nome} é ${restaurantes[restEditNotaIndice].nota}.\nEntre com a nova nota de Classificação: `))
restaurantes[restEditNotaIndice].nota = novaNotaRest
alert(`O restaurante ${restaurantes[restEditNotaIndice].nome} agora tem a classificação ${restaurantes[restEditNotaIndice].nota} estrelas.`)

/*4*/
let menuOpcoes = prompt(`O que você deseja comer: `).toLocaleLowerCase()
let menuRest = restaurantes.filter((menu) => menu.comida == menuOpcoes)

/*5*/
let notaMedia = number(prompt(`Deseja pesquisar resturantes com nota igual ou superior a qual nota: `))
let restMedia = restaurantes.filter((estrela) => estrela.nota >= notaMedia)
console.log(restMedia)

/*6*/
let totalNotas = restaurantes.reduce((soma,grade) => total + grade.nota, 0)

let mediaNotas = totalNotas / restaurantes.length
console.log(mediaNotas)

/*7*/
let cidadeTemRest = prompt(` Digite o nome da cidade que está buscando: `).toLocaleLowerCase()
let cidadeRest = restaurantes.filter((local) => local.cidade == cidadeTemRest)
console.log(cidadeRest)

/*8*/
let pesqNota = Number(prompt(`Pesquisar restaurantes com nota igual a: `))
let notaPesq = restaurantes.filter((estrela) => estrela.nota == pesqNota)
console.log(notaPesq)