/*2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua 
categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (salário
     mensal igual ou maior que o piso da categoria) ou se recebe abaixo do piso.*/

let salario
let pisoSalarial = 2500

salario = Number(prompt("Entre com o valor do seu salário: "))

if(salario >= pisoSalarial){
    prompt("Seu salario é de R$ " + salario +".E ele está R$ " + (salario - pisoSalarial) +" acima do Piso da Categoria")

}else{
    prompt("Atenção, você esta recebendo abaixo do Piso da Categoria.")
}