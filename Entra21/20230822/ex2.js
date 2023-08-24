/*2) Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele
 pertence:
    -   Sem Geração (até 1945)
    -   Baby Boomers (nascidos entre 1946 e 1964)
    -   Geração X (1965-1980)
    -   Geração Y ou Millennials (1981-1996)
    -   Geração Z (1997-2010)
    -   Geração Alfa (a partir de 2011)*/

    let anoNascimento
    let message = " "
    
    anoNascimento = Number(prompt("Entre com sua data de nascimento, com 4 digitos: "))

    switch(anoNascimento)
    {
        case (1945 <= anoNascimento):
            message = ("Sem geração")
            break

        case (anoNascimento > 1945 && anoNascimento <= 1964):
            geracao = "Baby Boomers Rocks!"
            break

        case (anoNascimento > 1964 && anoNascimento <= 1980):
            geracao = "Geração X"
            break

        case (anoNascimento > 1980 && anoNascimento <= 1996):
            geracao = "Millennials"
            break

        case (anoNascimento > 1996 && anoNascimento <= 2010):
            geracao = "Geração Z"
            break
        
        case (anoNascimento > 2010):
            geracao = "Geração Alfa"
            break
        
        default:
            break
   }

   alert("A sua geração é " + message)