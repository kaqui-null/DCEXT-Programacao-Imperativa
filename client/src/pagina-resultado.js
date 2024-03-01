import './pagina-resultado.css';
import icone_menu from './imagens/icone_menu.png'
import sch from './imagens/sch.png'
import React, { useState, useEffect } from 'react';

function PaginaResultado() {
  return(
    <div>
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
      </div>
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
    </header>
  );
}

function TabelaExame(){
  return(
    <div className="tabela">
      <table>
        <thead>
          <tr><th colSpan="4">NOME DO EXAME</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>exame 1</td>
            <td>LINK PARA ACESSO</td>
            <td>LINK PARA DOWNLOAD</td>
            <td>status</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Informacoes(){

  const [backendData, setBackendData] = useState(0)


  useEffect(()=> {
    fetch("http://127.0.0.1:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      } 
    )
  }, [])

  return(
    <div className="informacoes">
      {(typeof backendData.hospital === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.hospital.map((hospital,i) => (
        <div>
          <p><strong>HOSPITAL: </strong><span key={i} className="hospital_exame">{hospital}</span></p>
        </div>
        ))
      )}
      <p><strong>DATA DE REALIZAÇÃO: </strong><span className="data_real_exame"></span></p>
      <p><strong>DATA LIBERAÇÃO: </strong><span className="data_lib_exame"></span></p>
      <p><strong>STATUS: </strong><span className="status_exame"></span></p>
      <p><strong>ARQUIVOS: </strong><span className="arquivos_exames"></span></p>
    </div>
  );
}

export default PaginaResultado;
