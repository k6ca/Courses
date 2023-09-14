/*Crie um Array numérico com 10 elementos e a partir dele utilize os métodos mostrados para verificar se todos são ímpares. Além disso 
-   crie outro Array a partir dele onde os novos elementos devem ser os antigos ao quadrado.*/

let num1 = Number(prompt("Qual é o primeiro numero?"))

verificaPar(num1)
  
function verificaPar(numero) {
  if(numero % 2 == 0){
    alert("O numero é par")
  } else {
    alert("O numero é impar")
  }
}