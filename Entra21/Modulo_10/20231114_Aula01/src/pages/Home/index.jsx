import "./styles.css"
import Logo from "../../img/logo.png"


export function Home(){
    return(
        <>
        <main>
            <header>
                <img src={Logo} alt="Logo Projeto - Aulas React" />
            </header>

            <section class="base1">
                <h1>O seu próximo <strong class="h1">destino</strong> pode estar aqui...</h1>
                <h2 class="textoH2">Aqui você encontra uma seleção de <strong class="txt1">pacotes completos</strong> para as suas férias!
                <p>No <strong class="txt2">ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <strong class="txt1">preços arrasadores</strong>!</p></h2>
            </section>
            <section class="base2">
                <h3><p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</p></h3>
            </section>

        </main>
        </>
    )
}