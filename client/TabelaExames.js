import React, { useState } from 'react';
import './tabelapaciente.css';

function TabelaPaciente() {
  const [paciente, setPaciente] = useState([
    { nome: 'João', dataNascimento: '01/01/1990', cpf: '111.222.333-44' },
    { nome: 'Maria', dataNascimento: '15/05/1985', cpf: '222.333.444-55' },
    { nome: 'Pedro', dataNascimento: '20/10/2000', cpf: '333.444.555-66' }
  ]);
  
  const [novoPaciente, setNovoPaciente] = useState({ nome: '', dataNascimento: '', cpf: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovoPaciente({ ...novoPaciente, [name]: value });
  };

  const adicionarPaciente = () => {
    if (novoPaciente.nome && novoPaciente.dataNascimento && novoPaciente.cpf) {
      setPaciente([...paciente, novoPaciente]);
      setNovoPaciente({ nome: '', dataNascimento: '', cpf: '' });
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <div>
      <h2>Tabela de Paciente</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {paciente.map((paciente, index) => (
            <tr key={index}>
              <td>{paciente.nome}</td>
              <td>{paciente.dataNascimento}</td>
              <td>{paciente.cpf}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
      <div>
        <h2>Adicionar Paciente</h2>
        <input type="text" name="nome" placeholder="Nome" value={novoPaciente.nome} onChange={handleChange} />
        <input type="text" name="dataNascimento" placeholder="Data de Nascimento" value={novoPaciente.dataNascimento} onChange={handleChange} />
        <input type="text" name="cpf" placeholder="CPF" value={novoPaciente.cpf} onChange={handleChange} />
        <button onClick={adicionarPaciente}>Adicionar</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TabelaPaciente />
    </div>
  );
}

export default App;
