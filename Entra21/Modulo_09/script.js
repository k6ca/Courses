const fs = require("fs")
const dados = fs.readFileSync("aula.txt", "utf-8")
console.log(dados)

// const dadosComCallback = fs.readFile("aula.txt", "utf-8", (erro, dados) => {
//     if(erro){
//         console.log("erro : ", erro)
//     }else{
//         console.log(dados)
//     }
// })

// fs.writeFileSync("aula2.txt", "Novo texto da aula")// sobreescreve o texto do arquivo, caso o arquivo não exista, o arquivo é criado

//console.log(fs.existsSync("aula2.txt"))//verifica a existencia do arquivo

//console.log(fs.readdir(".", (erro, dados) => {console.log(dados)})) //le os arquivos do diretorio

const nome = readLineSync.question("Qual e o nome do arquivo procurado?")
if(fs.)