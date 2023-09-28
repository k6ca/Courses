/*Crie um objeto chamado programador com nome, idade e linguagens. A propriedade
linguagens deve receber um Array de strings contendo as linguagens que você já
estudou.*/

let programador ={
    "nome" : "Eduardo Vieira",
    "idade" : 41,
    "email" : "eduardod.vieira@gmail.com",
    "linguagens" : [" C#", " Python", " Assembly", " HTML", " CSS"], 
    apresentarProgramador: function(){
         console.log(`Este é o(a) programador ${this.nome}, tem a idade de ${this.idade} anos, seu e-mail é o ${this.email}.\n Suas linguagens de programação são: ${this.linguagens}.`)
}
}

programador.apresentarProgramador()