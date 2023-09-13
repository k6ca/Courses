/*1) Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de
 crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. 
 Faça um programa que calcule e escreva o número de anos necessários para que a população do país A
  ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/

    let popA = 80000, popB = 200000
    let taxaA = 1.03, taxaB = 1.015
    let anos = 0

    while (popB >= popA) {

        popA = popA * taxaA
        popB = popB * taxaB
        anos++
    }

    alert(`O pais A irá se igualar ou ultrapassar o país B, em ${anos.toFixed(0)} anos./n População A é ${popA.toFixed(0)}, população B é ${popB}.`)



