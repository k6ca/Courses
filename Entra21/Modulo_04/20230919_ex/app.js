let ativUm = document.getElementById("ativUm")
let ativDois = document.getElementById("ativDois")
let ativTres = document.getElementById("ativTres")

let notaUm = document.getElementById("notaUm")
let notaDois = document.getElementById("notaDois")
let notaTres = document.getElementById("notaTres")

let pesoUm = document.getElementById("pesoUm")
let pesoDois = document.getElementById("pesoDois")
let pesoTres = document.getElementById("pesoTres")

let nota = 0
let p1 = 0
let p2 = 0
let p3 = 0

function mediaPonderada(){

    p1 = Number(pesoUm.value)*Number(notaUm.value)
    p2 = Number(pesoDois.value)*Number(notaDois.value)
    p3 = Number(pesoTres.value)*Number(notaTres.value)

    nota = (p1+p2+p3)

    mensagem = `Suas notas foram: \n ${ativUm.value}\tPeso: ${pesoUm.value}\tNota: ${notaUm.value}\tMedia Ponderada: ${p1}\n ${ativDois.value}\tPeso: ${pesoDois.value}\tNota: ${notaDois.value}\tMedia Ponderada: ${p2}\n ${ativTres.value}\tPeso: ${pesoTres.value}\tNota: ${notaTres.value}\tMedia Ponderada: ${p3}\n\n E sua nota final é ${nota}`

    alert(mensagem)

}