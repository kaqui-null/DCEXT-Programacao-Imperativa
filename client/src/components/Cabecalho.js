import React, {useState} from "react";
import "./Cabecalho.css"
import sch from "../imgs/sch.png"
import icone_menu from "../imgs/icone_menu.png"

export default function Cabecalho(){
    const [mostrarInfo, setMostrarInfo] = useState(false);
  
    const Info = () => {
      setMostrarInfo(!mostrarInfo);
    }
    return(
      <header>
        <div className='cabecalho'>
          <button className='botao_menu' onClick={Info}><img className='img_botao_menu' src={icone_menu} alt=''></img></button>
          <img className='img_logo_sch' src={sch} alt=''></img>
          {mostrarInfo && (
            <div className='opcoes_do_menu'>
              <p>
                <ul>HISTÓRICO</ul>
                <ul>RESULTADOS</ul>
                <ul>SERVIÇOS</ul>
                <ul>TERMINAR SESSÃO</ul>
              </p>
            </div>
          )}
        </div>
      </header>
    );
  }