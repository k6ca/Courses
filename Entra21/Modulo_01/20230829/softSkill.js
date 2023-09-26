/* Equipe
    Leandro Zuppo
    Leonardo leal
    Eduardo Vieira

    DO/WHILE
    
    Faça um pedido em uma pizzaria em dia de promoção. Escolha quantos sabores quiser,
     exceto o ATUM que não está em promoção. Estabelecer uma opção para encerrar o pedido.
*/

let pizza="", pedido=""
let promocao = true

alert("Vamos fazer seu pedido! Caso queira encerrar, digite sair")

do{
    pizza = prompt("Qual sabor promocional você deseja?")
    if(pizza === "atum" || pizza === "sair"){
        promocao = false
        alert("Você digitou SAIR ou escolheu um sabor fora da promoção")
    }else{
        pedido += pizza +', '
    }
    

}while(promocao)

alert(`O seu pedido foi: ${pedido}`)