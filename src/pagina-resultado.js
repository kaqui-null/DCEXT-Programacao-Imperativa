import './pagina-resultado.css';
import icone_menu from '../src/imagens/icone_menu.png'
import sch from '../src/imagens/sch.png'
import { useState } from 'react';

function PaginaResultado() {
  return(
    <>
      <Cabecalho/>
      <Informacoes/>
      <Tabela_exame/>
    </>
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
        <button className='botao_menu' onClick={Info}><img className='img_botao_menu' src={icone_menu} alt = 'botão para exibir as opçoes de navegação'></img></button>
        <img className='img_logo_sch' src={sch}></img>
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



function Tabela_exame(){
  return(
    <div class="tabela">
      <table>
        <thead>
          <tr><th colspan="2">NOME DO EXAME</th></tr>
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
    <div class="informacoes">
    <p><strong>HOSPITAL: </strong><span class="hospital_exame"></span></p>
    <p><strong>DATA DE REALIZAÇÃO: </strong><span class="data_real_exame"></span></p>
    <p><strong>DATA LIBERAÇÃO: </strong><span class="data_lib_exame"></span></p>
    <p><strong>STATUS: </strong><span class="status_exame"></span></p>
    <p><strong>ARQUIVOS: </strong><span class="arquivos_exames"></span></p>
  </div>
  );
}

export default PaginaResultado;
