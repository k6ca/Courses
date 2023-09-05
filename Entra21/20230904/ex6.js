/*
6) Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor.
 Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. 
 Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta).
  No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. 
  Mostrar na tela a sequência completa, incluindo preto e branco.
*/
let primaria = []
let secundaria = []
let primSecun = []

for(i=0; i<3; i++){
    primaria.push(prompt("Digite a cor primária"))
}

for(i=0; i<3; i++){
    secundaria.push(prompt("Digite a cor secundaria"))
}

for(i=0; i<3; i++){
    final.push(primaria[i])
    final.push(secundaria[i])
}
