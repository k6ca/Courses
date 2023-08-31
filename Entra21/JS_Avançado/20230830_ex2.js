/*A partir da função de área retangular criada aneriormente, crie uma função que calcula a área de um triângulo, 
a qual 
    -   deve receber um valor de base e altura como argumento,
    -   calcular a área pela função área e divide o resultado por 2 para ter o retorno correto.*/

let areaTriangulo
let largTriangulo, profTriangulo

/*Função copiada do exercicio 1, conforme o enunciado.*/
function terreno(largura=0, profundidade=0){
    area = largura * profundidade
    return area
}

alert("Vamos calcular a Área do TRIÂNGULO:")
largTriangulo = Number(prompt("Entre com a largura do triãngulo:"))
profTriangulo = Number(prompt("Entre com a profundidade do triãngulo:"))
areaTriangulo = terreno(largTriangulo, profTriangulo)

alert(`A area do triãngulo é de ${areaTriangulo/2} m².`)