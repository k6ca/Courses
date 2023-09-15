/*Uma aplicação necessita de maior segurança através uma autenticação, para confirmação de cadastro de
 usuário. 
Você como programador deve desenvolver um sistema de CAPTCHA (Completely Automated Public Turing test to
 tell Computers and Humans Apart), 
que consiste em autenticação por desafio e resposta, o qual o usuário deve utilizar.

O CAPTCHA deve gerar uma sequência aleatória de 4 figuras geométricas (não repetidas), dentre 8 figuras 
geométricas possíveis, que deve ser armazenada. 
Para autenticação o usuário deve repetir o CAPTCHA gerado, digitando a sequência de 4 figuras na ordem 
correta, uma por vez.

    - Receber os dados de cadastro do usuário (nome de usuário e senha) e 
    - em seguida gerar o CAPTCHA. 
    - Solicitar ao usuário que repita o CAPTCHA gerado. 
    - Caso a sequência esteja correta, mostrar mensagem de cadastro realizado.
    - Caso a sequência esteja errada, mostrar a sequência gerada e a sequência digitada
 "A sequência gerada era X, você digitou Y" (exemplo) e perguntar ao usuário se deseja gerar um 
novo CAPTCHA ou voltar ao menu principal.

Figuras geométricas possíveis: círculo, triângulo, quadrado, retângulo, losango, pentágono, hexágono, 
trapézio.

Critérios de avaliação:

OK - (1,0) Mensagem de boas vindas explicando o sistema e a autenticação por CAPTCHA.
OK - (1,0) Criar menu funcional (loop) com opções 1) Cadastrar 2) Listar usuários e senhas 2) Sair
OK - (1,0) Para a opção 1, receber os dados do usuário (nome de usuário e senha).
OK - (2,0) Gerar um CAPTCHA aleatório (sequência de 4 figuras geométricas) não repetidos e mostrar na tela.
OK - (1,0) Receber os dados de autenticação digitados pelo do usuário (figuras geométricas).
OK - (2,0) Validar o CAPTCHA, caso esteja correto armazenar nome de usuário e senha em vetores.
OK - (1,0) Caso a validação falhe, criar opção de gerar novo CAPTCHA ou retornar ao menu.
OK - (1,0) Para a opção 2, mostrar dados dos usuários (usuários e senhas) ou "Não existem usuários cadastrados!"

Aconselhável uso de estruturas de repetição (WHILE, DO WHILE e FOR), Math functions e vetores.
Boa sorte! :D*/

let opcaoPrincipal = 0

let user = []
let pass = []
let patcha = ['c', 't', 'q', 'r', 'l', 'p', 'h', 'z']

let positivo = true
let sair = false

alert("Seja Bem-Vindo ao CAPTCHA. Você será autenticado mediante o seu acerto ao CAPTCHA gerado aleatoriamente!\n Vamos iniciar!")

do{
    opcaoPrincipal = Number(prompt("CAPTCHA\n** MENU **.\nEntre com a opcao desejada: \n1-Cadastrar, \n2-LISTAR - Usuários/Senhas, \n3-Sair"))

    switch(opcaoPrincipal){
        case 1://cadastrar
            let patchaPc = [] //['c','t','q','z'] //Retirar o comentário da matriz, para realizar o teste.
            let patchaUser = []
            let userChar = ''
            let valido = false
            let desistir = ''
            

            alert("Opção escolhida CADASTRO!")
            let userCad = ''
            let passCad = ''
            
            do{//Confere se USUÁRIO já existe
                userCad = prompt("Entre com o USUÁRIO: ")
                existe = user.includes(userCad)
                if(existe){
                    alert('USUÁRIO JÁ EXISTE!\n Entre com um NOVO USUÁRIO.')
                }
            }while(existe)

            do{//confirma 8 caracteres por SENHA - apenas para estipular um numero minimo de caracteres
                passCad = prompt("Entre com a SENHA(mínimo 8 caracteres): ")
                if(passCad.length<=7){
                    alert('A senha deve conter 8 caracteres.')
                }else{
                    positivo = false
                }
            }while(positivo)

            do{
                let identicos = 0
                do{
                    userChar = prompt("Entre com a inicial(minusculo) das figuras geometricas a seguir, Não é permitido repetições:\n c - (círculo);\nt - (triângulo);\nq - (quadrado);\nr - (retângulo);\nl - (losango);\np - (pentágono);\nh - (hexágono);\nz - (trapézio):")
                    if(patcha.includes(userChar)){
                        if(!patchaUser.includes(userChar)){
                            patchaUser.push(userChar)
                            alert(`Caractere inserido com sucesso ${patchaUser}`)
                        }else{
                            alert('ERRO: \nNão repita caracteres já inseridos.')
                        }
                    }else{
                        alert(`ERRO: \n- Selecione uma das opções descritas nas orientações;`)
                    }
                }while(patchaUser.length !== 4)
                
                //INSERIR COMENTARIO DAS LINHAS 98~106 - PARA REALIZAR O TESTE COM A VARIAVEL 'patchaPc' pre-definida
                do{// Gera o CAPTCHA do PC, para ser confrontado com o CAPTCHA do usuário
                    let temp = 0
                    temp = Math.floor(Math.random() * 10);
                    if(temp <= 6){
                        if (!patchaPc.includes(patcha[temp])) {
                            patchaPc.push(patcha[temp])
                        }
                    }
                }while(patchaPc.length !== 4)

                alert(`CAPTCHA PC: ${patchaPc}.`)//confirma o captchaPc gerado e explicita para o usuario
                identicos = 0
                for(i=0; i<patchaPc.length; i++){
                    if(patchaPc[i] !== patchaUser[i]){
                        alert(`Caracteres diferentes no index ${i}.`)
                    }else{
                        identicos++
                    }
                }

                if(identicos == 4){
                    alert('Sucesso - Os CAPTCHAS CONFEREM!')
                    user.push(userCad)
                    pass.push(passCad)
                    alert(`Cadastro Realizado com Sucesso.`)
                    valido = true
                }else{
                    desistir = prompt("CAPCTHA's não conferem, o que deseja fazer. \nDESISTIR, \nSIM(s) ou Continuar(qualquer tecla?)")
                    if(desistir === 's'){
                        valido = true
                    }else{
                        patchaUser = []
                    }
                }

            }while(!valido)   
            break
        
        case 2://LISTAR - Usuários/Senhas
            alert("Opção escolhida LISTAR - Usuários/Senhas!")
            
            let lista = ''
            if(user.length == 0){
                alert("Não existem usuários cadastrados!")
            }else{
                for(i=0; i<user.length; i++){
                    lista += `\nUSER: ${user[i]}; SENHA: ${pass[i]};`
                }
                alert(`USUÁRIOS E SENHAS:\n${lista}`)
            }
            break

        case 3://3-Sair
            opcaoSair = prompt("Você deseja SAIR do CAPTCHA?(s ou n)")
            if(opcaoSair === 's'){
                sair = true
            }
        
            break
        
        default:
            alert("Opcao inválida!")
            break
    }

}while(!sair)

alert('Muito obrigado por utilizar nosso CAPTCHA!')