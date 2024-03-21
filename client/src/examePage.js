import React, { useCallback } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './examePage.css';
import ExamePage from './novoExame';
import NovoCadrastro from './cadrastro';
import TabelaExames from './TabelaExames';

function App() {

  const handleUpload = useCallback(() => {
    const pdfInput = document.getElementById('pdfInput');
    if (pdfInput) {
      pdfInput.click();
    }
  }, []);

  return (
    // <Router>
      <div>
        {/* <div className="logo-container">
          <img src="./imgs/schcb.png" alt="Logo" width="200" height="100" />
        </div>
        <div className="linha"></div>
        <menu>
          <div className="menu-item">Inicio</div>
          <div className="menu-item">Serviços</div>
          <div className="menu-item">Sair</div>
        </menu>
        <header></header> */}
      <div className="ficha-container">
        <div className="tipoAcesso">
          <h1>Área Médica</h1>
          <h3>Selecione uma opção:</h3>

          <button className="button">
            <Link to="/novoExame">Inserir Exame</Link>
          </button>

          <button className="button">
          <Link to="/TabelaExames">Lista da Pacientes</Link>  
          </button>

          <button className="button">
          <Link to="/cadrastro">Inserir Novo Paciente</Link>  
          </button>

          <button className="button" onClick={handleUpload}>
            Adicionar Novo Resultado
          </button>

           <Routes> 
          <Route path="/novoExame" component={<ExamePage />} />
          <Route path="/cadrastro" component={<NovoCadrastro />} />
          <Route path="/TabelaExames" component={<TabelaExames />} />
         </Routes> 

        </div>
        
      </div>
      </div>
    // </Router>
  );
}

export default App;