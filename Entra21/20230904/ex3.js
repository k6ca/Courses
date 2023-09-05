/*
3) Cria um programa onde o usuário digite 5 números. 
-   Ao terminar de digitar os números, 
-   mostrar uma lista somente com números ímpares digitados
-   e a soma desses números.
*/
let list = []
let num = 0

for(i=1; i<6; i++){
    list.push(Number(prompt('Digite um número: ')))   
}
console.log(list)

for(i=0; i<5; i++){
    if(i%2==0){
        console.log(list[i])
        num += list[i]
    }
    
}

console.log(num)