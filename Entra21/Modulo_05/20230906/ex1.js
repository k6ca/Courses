/*Crie uma função anônima para gerar uma mensagem de convite de casamento, que deve receber
-   nomeConvidado, data, horário, local e nomeNoivos e a partir disso
-   monte uma mensagem convidando a pessoa para o casamento. 
-   Realize pelo menos 3 chamadas para ela e valide se o retorno foi o esperado.*/

// let nomeConvidado = ''
// let nomeNoiva = ''
// let nomeNoivo = ''
// let data = ''
// let hora = ''
// let local = ''

let geraConvite = function (nomeConvidado, nomeNoiva, nomeNoivo, data, hora, local){
    let convite = `Caro ${nomeConvidado},\n ${nomeNoiva} e ${nomeNoivo} o convidam para a celebração de seu matrimônio, a ser realizado em ${data} as ${hora} horas.\n Local: ${local}.\n Confirme sua presença.`
    alert(convite)
}

geraConvite('Adalberto', 'Penny', 'Sheldon', '03/08/2015', '20:15', 'SENAI')
geraConvite('Cleston', 'Paula Toller', 'Kid Bengala', '29/02/2002', '04:20', 'Circo Voador')
geraConvite('Planet Hemp', 'Deborah Secco', 'Tony Tornado', '31/12/2023', '06:00', 'Museu do Futuro')