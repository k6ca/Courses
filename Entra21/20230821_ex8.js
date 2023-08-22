/*8) Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o 
nome da espécie e a sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são
 classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são 
 classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas 
 como "Espécie vulnerável!"*/

 let especie, individuos

 especie = prompt("Entre com o nome da especie: ")
 individuos = Number(prompt("Entre com o numero de individuos do(a) " + especie))

 if(individuos<500 || individuos>200){
    alert("Espercie criticamente em perigo")
 }if(individuos<1000 || individuos>500){
    alert("Especie em perigo")
 }if(individuos<5000 || individuos>1000){
    alert("Especie Vulneravel!")
 }
