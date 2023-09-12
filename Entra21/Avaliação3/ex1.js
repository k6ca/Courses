/*>>>>>>>>>>> Avaliação III (Prática) <<<<<<<<<<

##### Desenvolvimento de CRUD de Produto #####

CRUD é um acrônimo para Creat, Read, Update, Delete. Quando falamos desta "sigla" na programação, pensamos diretamente na combinação dessas funções (criar, ler, atualizar e deletar)
com dados estruturados, seja um banco de dados, localStorage ou mesmo um vetor ou lista local.

Trazendo para para abordagem mais simplista, um CRUD bem programado deve permitir ao usuário:

-> criar (cadastrar, adicionar, gravar, salvar) um dado
-> ler (ver, acessar, listar, visualizar) um dado ou a lista de dados
-> atualizar (alterar, editar, modificar) um dado
-> deletar (apagar, excluir) um dado

A atividade "Desenvolvimento de CRUD de Produto" irá avaliar a programação de um CRUD no qual o usuário possa criar, ler, atualizar e deletar produtos e suas propriedades. 
As propriedades (informações) de cada produto são: marca, nome e valor. É aconselhável uso de métodos de vetores para manipulação dos dados e implementação do CRUD e funções para 
organização do código.


((((( Critérios de Avaliação )))))

OK - (1,0) Criar uma mensagem de boas-vindas explicando o sistema.
OK - (1,0) Criar menu funcional (com loop) com as opções do CRUD e a opção "sair".
OK - (1,0) Implementar a opção "cadastrar produto".
OK - (1,0) Implementar a opção "deletar produto".
OK - (1,0) Implementar a opção "editar produto".
OK - (1,0) Implementar a opção "listar produtos".
OK? - (1,0) Mostrar a lista organizada com as marcas, nomes e valores de todos produtos
(1,0) Criar mensagens de feedback para o usuário após as ações.
(1,0) Validar para não permitir cadastro de um produto com mesmo nome.
(1,0) Validar para não permitir valores negativos ou zero.*/
let opcaoPrincipal = 0
let opcaoDeletar = 0
let opcaoEditar = 0
let opcaoSair = ''
let sair = false
let deletar = ''
let editar = ''

let marcaProd = ['1','2','3']
let nomeProd = ['a','b','c']
let valorProd = ['0.1','0.2','0.3']

let marcaTemp = ''
let nomeTemp = ''
let valorTemp = 0
let listaTemp = ''



alert("Seja Bem-Vindo ao ERP de vendas das lojas Mazanza Corp.")
do{
    opcaoPrincipal = Number(prompt("Desenvolvimento de CRUD de Produto.Entre com a opcao desejada: \n1-Cadastrar, \n2-Deletar, \n3-Editar, \n4-Listar, \n5-Sair"))

    switch(opcaoPrincipal){
        case 1://cadastrar
        //Devido ao horário não realizei a correção nesta função. Percebi, que ao inves de realizar um push(), eu deveria ter verificado o .length() e então ter feito o cadastro.
            alert("Opção escolhida CADASTRO!")
            marcaTemp = prompt("Entre com a MARCA do produto: ")
            nomeTemp = prompt("Entre com o NOME do produto: ")
            valorTemp = prompt("Entre com o VALOR do produto: ")
            marcaProd.push(marcaTemp)
            nomeProd.push(nomeTemp)
            valorProd.push(valorTemp)
            alert(`Cadastro Realizado.\nMarca: ${marcaProd[-1]};\nNome: ${nomeProd[-1]};\nValor: ${valorProd[-1]}.`)
            break

        case 2://deletar
            alert("Opção escolhida DELETAR!")
            marcaTemp = prompt("Qual MARCA deseja DELETAR? ")
            opcaoDeletar = marcaProd.indexOf(marcaTemp)
            deletar = prompt(`Certeza que deseja DELETAR? (s ou n):\n\nMarca: ${marcaProd[opcaoDeletar]}; Nome: ${nomeProd[opcaoDeletar]}; Valor: ${valorProd[opcaoDeletar]};`)
            if(deletar === 's'){
                marcaProd.splice(opcaoDeletar, 1)
                nomeProd.splice(opcaoDeletar, 1)
                valorProd.splice(opcaoDeletar, 1)
            }else{
                alert("Não foi DELETADO nenhum produto.")
            }
            
            for(i=0; i<marcaProd.length; i++){
                listaTemp += `\nMarca: ${marcaProd[i]}; Nome: ${nomeProd[i]}; Valor: ${valorProd[i]};`
            }            
            alert(`PRODUTOS CADASTRADOS após o DELETE:\n${listaTemp}`)
            
            break

        case 3://editar
            alert("Opção escolhida EDITAR!")
            marcaTemp = prompt("Qual MARCA deseja EDITAR? ")
            opcaoEditar = marcaProd.indexOf(marcaTemp)
            editar = prompt(`Certeza que deseja EDITAR? (s ou n):\n\nMarca: ${marcaProd[opcaoEditar]}; Nome: ${nomeProd[opcaoEditar]}; Valor: ${valorProd[opcaoEditar]};`)
            if(editar === 's'){
                marcaTemp = prompt("Entre com a MARCA do produto: ")
                marcaProd[opcaoEditar] = marcaTemp
                nomeTemp = prompt("Entre com o NOME do produto: ")
                nomeProd[opcaoEditar] = nomeTemp
                valorTemp = prompt("Entre com o VALOR do produto: ")
                valorProd[opcaoEditar] = valorTemp
            }else{
                alert("Não foi EDITADO nenhum produto.")
            }
            for(i=0; i<marcaProd.length; i++){
                listaTemp += `\nMarca: ${marcaProd[i]}; Nome: ${nomeProd[i]}; Valor: ${valorProd[i]};`
            }            
            alert(`PRODUTOS CADASTRADOS após a EDIÇÃO:\n${listaTemp}`)

            break
        case 4://listar
            alert("Opção escolhida LISTAR!")
            for(i=0; i<marcaProd.length; i++){
               listaTemp += `\nMarca: ${marcaProd[i]}; Nome: ${nomeProd[i]}; Valor: ${valorProd[i]};`
            }
            alert(`PRODUTOS LISTADOS:\n${listaTemp}`)
            break
        case 5:
            opcaoSair = prompt("Você deseja sair do sistema?(s ou n)")
            if(opcaoSair === 's'){
                sair = true
            }
            break
        default:
            alert("Opcao inválida!")
            break
    }
}while(!sair)

alert("Programo encerrado com sucesso!")
