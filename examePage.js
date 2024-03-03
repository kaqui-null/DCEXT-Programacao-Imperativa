import React from 'react';
import './examePage.css';

function App() {
  return (
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
      <header>
      </header>
      <div class="nova-barra">
      </div>
    <div className="center-container">
      <div className="tipoAcesso">
        <h1>Área Médica</h1>
        <h2>Selecione uma opção:</h2>

        <button className="botao" onClick={() => alert("Inserir Exame")}>
          Inserir Exame
        </button>

        <div className="ou">OU</div>

        <button className="botao" onClick={() => alert("Inserir Novo Paciente")}>
          Inserir Novo Paciente
        </button>
      </div>
      
    </div>
    <div className="bottom-texts">
        <p>SCH - Suplerintendência de Complexo Hospitalar de UPE</p>
        <p>2024</p>
      </div>
    </div>
  );
}

export default App;