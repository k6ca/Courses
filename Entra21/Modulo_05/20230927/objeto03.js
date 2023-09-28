/*Com base no objeto programador, crie um laço de repetição para exibir vários alertas
mostrando individualmente cada linguagem de programação que está no Array de
linguagens no seguinte formato:

Linguagem 1: JavaScript
Linguagem 2: HTML*/

let programador ={
    "nome" : "Eduardo Vieira",
    "idade" : 41,
    "email" : "eduardod.vieira@gmail.com",
    "linguagens" : [" C#", " Python", " Assembly", " HTML", " CSS"], 
    apresentarProgramador: function(){
         console.log(`Este é o(a) programador ${this.nome}, tem a idade de ${this.idade} anos, seu e-mail é o ${this.email}.\n Suas linguagens de programação são: ${this.linguagens}.`)
}
}

for(let i=0; i<programador.linguagens.length; i++){
    alert(`Linguagem ${programador.linguagens[i]}`)
}

programador.linguagens.forEach((lingAtual, indice)=> {
    alert(`Linguagem ${indice+1}: ${lingAtual}.`)
})