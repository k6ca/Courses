let listaPessoas = []

for(let contador = 0; contador <3; contador ++){
    let nome = prompt("Qual é o seu nome? ")
    let idade = Number(prompt("Qual é a sua idade?"))
    let objetoPessoa = {nome, idade}
    listaPessoas.push(objetoPessoa)
}

let maioresQue20 = listaPessoas.filter(objetoPessoa => objetoPessoa.idade > 20)

alert(maioresQue20)