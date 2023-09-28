/*Crie um objeto chamado pessoa com as seguintes propriedades:
Nome, idade, email e apresentarPessoa (método que exiba um alerta trazendo as
informações da pessoa)

Execute um console.log para exibir o nome, idade e email e também execute o método
apresentarPessoa para esse objeto*/

let pessoa ={
    "nome" : "Teste",
    "idade" : 69,
    "email" : "arroba@arroba.com",
    apresentarPessoa: function(){
         console.log(`Este é ${this.nome}, tem a idade de ${this.idade} anos, seu e-mail é o ${this.email}.`)
}
}

pessoa.apresentarPessoa()