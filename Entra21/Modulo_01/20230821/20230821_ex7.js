/*7) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a 
senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos,
 mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens 
    específicas para erro de username, de password ou de ambos).*/

let username, password
let user, pass

username = String(prompt("Entre com o nome do usuario: "))
password = prompt("Entre com sua senha: ")

user = prompt("Vamos fazer login? Entre com seu login: ")
pass = prompt("Entre com sua senha: ")

if(username === user){
    if(password === pass){
        alert("Login realizado com sucesso")
    }
    else{
        alert("Sua senha não confere.")
    }
}else{
    alert("Seu login não confere.")
}