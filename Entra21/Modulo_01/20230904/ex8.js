/*
8) Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos.
-   Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. 
-   Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. 
-   Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. 
-   Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”*/

let anoAlistamento = []
let semAlistamento = []
let x = 0

for(i=2000; i<=2009; i++){
    ano = prompt(`Houve alistamento em ${i}:`)
    switch(ano){
        case 's':
            anoAlistamento.push(i)
            x++
            break
        case 'n':
            semAlistamento.push(i)
            break
        default:
            alert("A resposta não é valida!")
            i--
            break
    }
    
}
ultimo = anoAlistamento[x]
console.log(ultimo)
console.log(semAlistamento)