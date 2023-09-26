/*6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. 
Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias.
-   Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. 
-   Após calculado o número de sprints (média), arredondando o número para baixo, cadastrar para cada 
 sprint um título e um objetivo.*/

let tempoProjetoDias, diasSprint, media, count=0
let nomeSprint, objetivoSprint, saida = ""


tempoProjetoDias = Number(prompt("Qual a duração do projeto em dias: "))
diasSprint = Number(prompt("Entre com o periodo em dias de cada sprint: "))

media = Math.round(tempoProjetoDias / diasSprint)

while(count<= media){
    nomeSprint = prompt("Entre com o nome da Sprint: ")
    objetivoSprint = prompt("Entre com o objetivo desta Sprint.")
    saida += `Sprint ${nomeSprint} com o objetivo de: ${objetivoSprint};/n`
    count++
}

alert(`O projeto do time terá ${tempoProjetoDias} com ${media} Sprints, são eles:/n ${saida}`)
