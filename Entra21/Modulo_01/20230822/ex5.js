/*
5) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui 
benefícios para assinantes em três categorias: 
1) Assinante Premium, ganha 20% de desconto e frete grátis
2) Assinante Gold, ganha 20% de desconto mas paga frete 
3) Assinante Silver, ganha 10% de desconto mas paga frete. 
4) Não assinante, sem benefícios. 
    -   Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). 
    -   Mostrar na tela o valor da compra de acordo com a opção escolhida.*/

let categoria
let valorCompra, total, frete = 12.50
let premium = 0.8
let gold = 0.8
let silver = 0.9


valorCompra = Number(prompt("Qual o valor total da compra?"))
categoria = Number(prompt("Qual a categoria do cliente(1-4)"))

switch(categoria){
    case 1:
        total = valorCompra * premium
        alert(`Como assinante PREMIUM, você tem o frete gratuito e um desconto de 20% e sua compra totalizou R$ ${total}.`)
        break

    case 2:
        total = valorCompra * gold + frete
        alert(`Como assinante GOLD, você paga o frete de ${frete} e tem um desconto de 20% e sua compra totalizou R$ ${total}.`)
        break

    case 3:
        total = valorCompra * silver + frete
        alert(`Como assinante Silver, você paga o frete de ${frete} e tem um desconto de 10% e sua compra totalizou R$ ${total}.`)
        break

    case 4:
        total = valorCompra + frete
        alert(`Como um MORTAL, você paga o frete de ${frete} e será TAXADO pelos correios, sua compra totalizou R$ ${total}.`)
        break
    
    default:
        alert("Fez bem, não comprou nada.")
        break

}