/*10) O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para 
as suas equipes. Criar um sistema que receba os dados dos candidatos (nome, idade, formação e cidade) 
para sinalizar se eles podem concorrer às vagas. Após receber os dados, mostrar o nome do candidato e 
mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a
 nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

    -   Vaga para Equipe de Resgate -> O candidato deve ter 
        - de 25 a 50 anos, possuir 
        - formação em "Biologia" ou "Ecologia" e 
        - residir em Florianópolis.

    -   Vaga para Equipe de Tratamento -> O candidato deve ter 
        - de 22 a 60 anos, possuir 
        - formação em "Veterinária" e 
        - residir em Florianópolis.*/

 let nome, formacao, cidade
 let idade

 nome = prompt("Entre com seu nome: ")
 idade = Number(prompt("Sua idade: "))
 formacao = prompt("Sua area de formação: ").toLowerCase()
 cidade = prompt("Sua cidade de moradia: ").toUpperCase()

 if(cidade == "FLORIANOPOLIS"){
    if(formacao == "veterinaria"){
        if(60 >= idade && idade >= 22){
            alert(`Candidato ${nome}, apto para EQUIPE DE TRATAMENTO`)
        }else{
            alert("Candidato não apto: IDADE")
        }
    }else if(formacao == "biologia" || formacao == "ecologia"){
        if(50 >= idade && idade >= 25){
            alert(`Candidato ${nome}, apto para EQUIPE DE RESGATE`)
        }else{
            alert("Candidato não apto: IDADE")
        }
    }else{
        alert("Candidato não apto: FORMACAO")
    }
 }else{
    alert("Candidato não apto: CIDADE")
 }