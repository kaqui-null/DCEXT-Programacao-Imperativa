import React, { useCallback,useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './examePage.css';
import { Button } from 'react-bootstrap';
import ExamePage from './examePage';
import NovoCadrastro from './cadrastro';
import TabelaExames from './TabelaExames';

function PaginaExames() {
  const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };


  const handleUpload = useCallback(() => {
    const pdfInput = document.getElementById('pdfInput');
    if (pdfInput) {
      pdfInput.click();
    }
  }, []);

  return (
    
      <div>
       
      <div className="ficha-container">
        <div className="tipoAcesso">
          <h1>Área Médica</h1>
          <h3>Selecione uma opção:</h3>

          <button className="button">
            <Link className="item" to="/novoExame">Inserir Exame</Link>
          </button>

          <button className="button">
          <Link className="item" to="/TabelaExames">Lista dos Pacientes</Link>  
          </button>

          <button className="button">
          <Link className="item" to="/cadastro">Cadastrar Paciente</Link>  
          </button>

          {/* <input id="pdfInput" type="file" accept=".pdf" style={{ display: 'none' }} onChange={handleFileChange} />
            <Button className="botao" onClick={handleUpload}>
              Adicionar Novo Resultado
            </Button> */}

           

        </div>
        
      </div>
      </div>
    
  );
}

export default PaginaExames;