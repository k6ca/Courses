/*Uma construtora precisa de um sistema que realiza o cálculo da área de diversos terrenos retangulares por meio de uma função,
 você recebeu o relatório com as medidas dos lados dos terrenos e precisa repassar os valores das áreas. Sendo assim, crie a função
  para realizar os cálculos dos seguintes terrenos(crie uma função e faça 4 chamadas passando diferentes valores de parâmetros):
    -   Terreno padrão: largura: 50m / profundidade: 40m;
    -   Terreno sobrado: largura 30m / profundidade: 40m
    -   Terreno mansão: largura: 100m / p´rofunidade: 100m;
    -   Terreno comercial: largura: 40m / profundidade: 40m
*/

/*CÓDIGO CORRETO*/

let padrao, sobrado, mansao, comercial

function terreno(largura=0, profundidade=0){
    area = largura * profundidade
    return area
}

padrao = terreno(50, 40)
sobrado = terreno(30, 40)
mansao = terreno(100, 100)
comercial = terreno(40, 40)

alert("Vamos calcular a Área dos terrenos da construtora:")
alert(`A area do terreno PADRÃO é de ${padrao} m².`)
alert(`A area do terreno SOBRADO é de ${sobrado} m².`)
alert(`A area do terreno MANSÃO é de ${mansao} m².`)
alert(`A area do terreno COMERCIAL é de ${comercial} m².`)


