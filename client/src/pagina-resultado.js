import './pagina-resultado.css';
import icone_menu from './imagens/icone_menu.png'
import sch from './imagens/sch.png'
import React, { useState, useEffect } from 'react';

function PaginaResultado() {

  const [backendData, setBackendData] = useState(0)


  useEffect(()=> {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      } 
    )
  }, [])

  return(
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
      <Cabecalho/>
      <Informacoes/>
      <TabelaExame/>
    </div>
  );
}

function Cabecalho(){
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
              <ul>LINK 1 AQUI</ul>
              <ul>LINK 2 AQUI</ul>
            </p>
          </div>
        )}
      </div>
    </header>
  );
}

function TabelaExame(){
  return(
    <div className="tabela">
      <table>
        <thead>
          <tr><th colSpan="2">NOME DO EXAME</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>exame 1</td>
            <td>LINK PARA DOWNLOAD DO ARQUIVO (faltando)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Informacoes(){
  return(
    <div className="informacoes">
    <p><strong>HOSPITAL: </strong><span className="hospital_exame"></span></p>
    <p><strong>DATA DE REALIZAÇÃO: </strong><span className="data_real_exame"></span></p>
    <p><strong>DATA LIBERAÇÃO: </strong><span className="data_lib_exame"></span></p>
    <p><strong>STATUS: </strong><span className="status_exame"></span></p>
    <p><strong>ARQUIVOS: </strong><span className="arquivos_exames"></span></p>
  </div>
  );
}

export default PaginaResultado;
