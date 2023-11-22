import "./styles.css"
import Logo from "../../img/logo.png"


export function Home(){
    return(
        <>
        <main>
            <header>
                <img src={Logo} alt="Logo Projeto - Aulas React" />
            </header>

            <h1>O seu próximo <strong>destino</strong> pode estar aqui...</h1>

            <h2>Aqui você encontra uma seleção de pacotes completos para as suas férias!</h2>
            
            <h2>No ConnectFlight você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com preços arrasadores!</h2>

            <h2>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</h2>

        </main>
        </>
    )
}