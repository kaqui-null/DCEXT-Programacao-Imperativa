import "./cabecalho-detalhamento.css"
import React, {useState} from "react";
import icone_menu from '../../imgs/icone-menu.png'
import icone_sch from '../../imgs/sch.png'

export default function Cabecalho(){
    const [mostrarInfo, setMostrarInfo] = useState(false);

    const Info = () => {
        setMostrarInfo(!mostrarInfo);
    }

    return(
        <header>
            <div className="cabecalho">
                <button className="botao_menu" onClick={Info}>
                    <img className="img_botao_menu" src={icone_menu} alt=""></img>
                </button>
                <img className="img_logo_sch" src={icone_sch} alt=""></img>
                {mostrarInfo && (
                    <div className="opcoes_do_menu">
                        <p>
                            <ul>Histórico</ul>
                            <ul>Resultados</ul>
                            <ul>Serviços</ul>
                            <ul>Terminar sessão</ul>
                        </p>
                    </div>
                )}
            </div>
        </header>
    );
}