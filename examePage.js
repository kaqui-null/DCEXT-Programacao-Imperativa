import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css';
import ExamePage from './novoExame';
import NovoCadrastro from './cadrastro';
import TabelaExames from './TabelaExames';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = useCallback(() => {
    const pdfInput = document.getElementById('pdfInput');
    if (pdfInput) {
      pdfInput.click();
    }
  }, []);

  return (
    <Router>
      <div>
        <div className="logo-container">
          <img src="schcb.png" alt="Logo" width="200" height="100" />
        </div>
        <div className="linha"></div>
        <menu>
          <div className="menu-item">Inicio</div>
          <div className="menu-item">Serviços</div>
          <div className="menu-item">Sair</div>
        </menu>
        <header></header>
        <div className="center-container">
          <div className="tipoAcesso">
            <h1>Área Médica</h1>
            <h3>Selecione uma opção:</h3>

            <Button className="botao">
              <Link to="/novoExame">Inserir Exame</Link>
            </Button>

            <Button className="botao">
              <Link to="/TabelaExames">Lista da Pacientes</Link>  
            </Button>

            <Button className="botao">
              <Link to="/cadrastro">Inserir Novo Paciente</Link>  
            </Button>

            <input id="pdfInput" type="file" accept=".pdf" style={{ display: 'none' }} onChange={handleFileChange} />
            <Button className="botao" onClick={handleUpload}>
              Adicionar Novo Resultado
            </Button>

            <Routes>
              <Route path="/novoExame" element={<ExamePage selectedFile={selectedFile} />} />
              <Route path="/cadrastro" element={<NovoCadrastro />} />
              <Route path="/TabelaExames" element={<TabelaExames />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
