/*2) Desenvolva um programa que o usuário digite 10 números
-   , ao final  mostre o valor do resultado do somatório da primeira metade dos números
-   menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)
*/
let list = []
let num, primeiraMet=0, segundaMet=0

for(i=10; i>=1; i--){
    list.push(Number(prompt('Digite um número: ')))   
}

for(i=1; i<=5; i++){
    primeiraMet += list[i]
}

for(i=5; i<10; i++){
    num = Number(list[i])
    segundaMet += num
    console.log(segundaMet)
}

console.log(list)
console.log(primeiraMet)
console.log(segundaMet)
console.log(primeiraMet - segundaMet)
