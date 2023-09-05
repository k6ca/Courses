/*
5) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor.
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.
*/
let list = []
let result = []
let guess = 0

for(i=10; i>=1; i--){
    list.push(Math.floor(Math.random(0,21)))
}
guess = Number(prompt("Digite o número que quer verificar: "))

result.push(list.indexOf(guess))

console.log(list)
console.log(result)