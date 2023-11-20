/*1- Adicionar objetos que representam restaurantes para um Array, tais objetos devem conter pelo menos as propriedades de nome do restaurante, tipo de comida servida, cidade e a classificação da crítica gastronômica (1 a 5). (1 ponto)*/

let restaurantes = [
    {
        "nome": "mcdonalds",
        "comida": "hamburguer",
        "cidade": "florianopolis",
        "classificacao" : 2
    },
    {
        "nome": "subway",
        "comida": "sanduiche",
        "cidade": "sao jose",
        "classificacao" : 3
    },
    {
        "nome": "churrasgrill",
        "comida": "churrasco",
        "cidade": "palhoca",
        "classificacao" : 5
    }
]
console.log(restaurantes)

/*2- Remover um restaurante pelo seu nome. (1 ponto) */

// let pergRemover = prompt(`Digite o nome do restaurante que deseja remover:`).toLowerCase()
// let indice = restaurantes.findIndex((index) => index.nome == pergRemover)
// console.log(indice)

// restaurantes.splice(indice,1)
// console.log(restaurantes)




/*3- Editar a nota de um restaurante consultado pelo nome. (2 pontos) */

// let pergRestEditNota = prompt(`Digite o nome do restaurante:`).toLowerCase()
// let indiceRestNota = restaurantes.findIndex((index) => index.nome == pergRestEditNota)
// alert(`A nota de classificação do restaurante ${restaurantes[indiceRestNota].nome} era ${restaurantes[indiceRestNota].classificacao}`)

// let editarNota = Number(prompt(`Digite a nova nota de classificação:`))
// restaurantes[indiceRestNota].classificacao = editarNota
// alert(`A nova nota de classificação do restaurante ${restaurantes[indiceRestNota].nome} é ${restaurantes[indiceRestNota].classificacao}`)
// console.log(restaurantes[indiceRestNota])



/*4- Consultar a lista restaurantes que possuem determinado tipo de comida. (1 ponto) */

// let pergComida = prompt(`Digite o tipo de comida que está procurando:`).toLowerCase()
// let comidaFiltro = restaurantes.filter((a)=> a.comida == pergComida)
// console.log(comidaFiltro)



/*5- Consultar os restaurantes que possuem uma classificação atrativa (nota 4 ou mais). (1 ponto) */

// let classificacaoFiltro = restaurantes.filter((nota) => nota.classificacao >=4)
// console.log(classificacaoFiltro)



/*6- Consultar a média de classificação de todos os restaurantes (utilizando reduce e length). (2 pontos) */
// let soma = restaurantes.reduce((total, atual) => total + atual.classificacao, 0)
// let media = soma / restaurantes.length
// console.log(media)



/*7- Consultar os restaurantes que ficam em uma cidade específica. (1 ponto) */
// let pergCidade = prompt(`Digite o nome da cidade que está buscando:`).toLowerCase()
// let cidadeFiltro = restaurantes.filter((local) => local.cidade == pergCidade)
// console.log(cidadeFiltro)


/*8- Consultar a quantidade de restaurantes que possuem determinada nota. (1 ponto) */
// let pergNota = prompt(`Digite a nota de classificação:`).toLowerCase()
// let notaFiltro = restaurantes.filter((nota) => nota.classificacao == pergNota)
// console.log(notaFiltro)