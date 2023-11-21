import "./styles.css"
import Imagem from "../../img/main.png"
import Footer from "../../img/footer.png"
import Line from "../../img/line.png"

export function Home(){
    return(
        <>
            <img src={Imagem} alt="Logo Projeto - Aulas React" />
            <br/>
            <img src={Line} alt="Line Projeto - Aulas React" />
            <img src={Footer} alt="Footer Projeto - Aulas React" />
        </>
    )
}