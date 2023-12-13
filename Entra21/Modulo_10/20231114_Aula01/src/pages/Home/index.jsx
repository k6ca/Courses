import "./styles.css"
import Logo from "../../img/logo.png"


export function Home(){
    return(
        <>
        <main>
            <header>
                <img src={Logo} alt="Logo Projeto - Aulas React" />
            </header>

            <section >
                <h1>O seu próximo <strong>destino</strong> pode estar aqui...</h1>
                <h2 class="textoH2">Aqui você encontra uma seleção de <b><strong>pacotes completos</strong></b> para as suas férias!
                <p>No <em>ConnectFlight</em> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <b>preços arrasadores</b>!</p>
                <p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</p></h2>
            </section>

        </main>
        </>
    )
}