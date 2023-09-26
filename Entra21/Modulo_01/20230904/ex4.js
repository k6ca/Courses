/*
4) Escreva um programa que leia
-    dois vetores com 3 elementos cada
-    e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.
-    Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.
*/

let list = [1,3,5]
let listA = [2,4,6]
let final = []

for(i=0; i<3; i++){
    final.push(list[i])
    final.push(listA[i])
}



console.log(list)
console.log(listA)
console.log(final)