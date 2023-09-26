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
OK - (1,0) Mostrar a lista organizada com as marcas, nomes e valores de todos produtos
OK - (1,0) Criar mensagens de feedback para o usuário após as ações.
OK - (1,0) Validar para não permitir cadastro de um produto com mesmo NOME.
OK - (1,0) Validar para não permitir valores negativos ou zero.*/

let opcaoPrincipal = 0
let opcaoDeletar = 0
let opcaoEditar = 0
let opcaoCad = 0

let opcaoSair = ''
let deletar = ''
let editar = ''

let sair = false
let existe = true
let positivo = true

let marcaProd = ['A','B','C']
let nomeProd = ['D','E','F']
let valorProd = ['0.1','0.2','0.3']


alert("Seja Bem-Vindo ao ERP de vendas das lojas Mazanza Corp.")
do{
    opcaoPrincipal = Number(prompt("Desenvolvimento de CRUD de Produto.Entre com a opcao desejada: \n1-Cadastrar, \n2-Deletar, \n3-Editar, \n4-Listar, \n5-Sair"))

    switch(opcaoPrincipal){
        case 1://cadastrar

            alert("Opção escolhida CADASTRO!")
            let marcaCad = ''
            let nomeCad = ''
            let valorCad = 0

            do{//Confere se NOME do produto já existe
                marcaCad = prompt("Entre com a MARCA do produto: ")
                nomeCad = prompt("Entre com o NOME do produto: ")
                existe = nomeProd.includes(nomeCad)
                if(existe){
                    alert('NOME do produto, JÁ EXISTE!\n Entre com um NOME diferente/NOVO.')
                }
            }while(existe)

            do{//confirma valor Positivo e diferente de zero
                valorCad = prompt("Entre com o VALOR do produto: ")
                if(valorCad<=0){
                    alert('Apenas números positivos e diferente de ZERO!')
                }else{
                    positivo = false
                }
            }while(positivo)

            marcaProd.push(marcaCad)
            nomeProd.push(nomeCad)
            valorProd.push(valorCad)
            alert(`Cadastro Realizado.\nMarca: ${marcaCad};\nNome: ${nomeCad};\nValor: ${valorCad}.\n\n COM SUCESSO!`)
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
            let listaAposDel = ''//Gera uma lista atualizada dos produtos cadastrados, simples conferência.
            for(i=0; i<marcaProd.length; i++){
                listaAposDel += `\nMarca: ${marcaProd[i]}; Nome: ${nomeProd[i]}; Valor: ${valorProd[i]};`
            }            
            alert(`PRODUTOS EXISTENTES NO CADASTRADOS após o DELETE:\n${listaAposDel}`)
            
            break

        case 3://editar
            alert("Opção escolhida EDITAR!")
            marcaTemp = prompt("Qual MARCA deseja EDITAR? ")
            opcaoEditar = marcaProd.indexOf(marcaTemp)
            editar = prompt(`Certeza que deseja EDITAR? (s ou n):\n\nMarca: ${marcaProd[opcaoEditar]}; Nome: ${nomeProd[opcaoEditar]}; Valor: ${valorProd[opcaoEditar]};`)
            if(editar === 's'){
                let marcaEd = prompt("Entre com a MARCA do produto: ")
                marcaProd[opcaoEditar] = marcaEd
                let nomeEd = prompt("Entre com o NOME do produto: ")
                nomeProd[opcaoEditar] = nomeEd
                let valorEd = prompt("Entre com o VALOR do produto: ")
                valorProd[opcaoEditar] = valorEd
            }else{
                alert("Não foi EDITADO nenhum produto.")
            }

            let listaEd = ''
            for(i=0; i<marcaProd.length; i++){
                listaEd += `\nMarca: ${marcaProd[i]}; Nome: ${nomeProd[i]}; Valor: ${valorProd[i]};`
            }            
            alert(`PRODUTOS CADASTRADOS após a EDIÇÃO:\n${listaEd}`)

            break
        case 4://listar
            alert("Opção escolhida LISTAR!")
            
            let lista = ''
            for(i=0; i<marcaProd.length; i++){
               lista += `\nMarca: ${marcaProd[i]}; Nome: ${nomeProd[i]}; Valor: ${valorProd[i]};`
            }
            alert(`PRODUTOS LISTADOS:\n${lista}`)
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

alert("Programa encerrado com sucesso!\n VOLTE SEMPRE!")
