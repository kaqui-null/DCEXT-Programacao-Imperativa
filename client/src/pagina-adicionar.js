import './App.css';
import React, { useState } from 'react';
import sch from '../src/imagens/sch.png'

function PaginaInserir() {
  return (
    <>
    <Inicio/>
    <Adicionar/>
    </>
  )
}

function Inicio(){
  return(
      <div className='inicio'>
        <img className='img_logo_sch' src={sch}></img>
        <h2>Adicionar Exame</h2>
      </div>
  );
}

function Adicionar() {
  const [nome, setNome] = useState('');
  const [data, setDate] = useState('');
  const [exame, setExame] = useState('');
  const [resultado, setResultado] = useState('');

  const mudarNome = (e) => {
    setNome(e.target.value);
  };

  const mudarData = (e) => {
    setDate(e.target.value);
  };

  const mudarExame = (e) => {
    setExame(e.target.value);
  };

  const mudarResultado = (e) => {
    setResultado(e.target.value);
  };

  const inserir = (e) => {
    e.preventDefault();
    console.log('Nome do Paciente:', nome);
    console.log('Data do Exame:', data);
    console.log('Tipo de Exame:', exame);
    console.log('Resultado do Exame:', resultado);
    setNome('');
    setDate('');
    setExame('');
    setResultado('');
  };

  const resultadoExame = exame === 'Exame de Covid-19';

  return (
    <div>

      <form onSubmit={inserir}>
        <div>
          <label>Nome do Paciente: </label>
          <input type="text" value={nome} onChange={mudarNome} />
       </div>
       <div>
          <label>Selecione a data: </label>
          <input type="date" value={data} onChange={mudarData} />
      </div>
      <div>
          <label>Tipo de Exame: </label>
          <select value={exame} onChange={mudarExame}>
            <option value="">Selecionar</option>
            <option value="Exame de Sangue">Exame de Sangue</option>
            <option value="Exame de Vista">Exame de Vista</option>
            <option value="Raio-X">Raio-X</option>
            <option value="Exame de Covid-19">Exame de Covid-19</option>
          </select>
          </div>
        {resultadoExame && (
          <div>
            <label>Resultado do Exame: </label>
            <select value={resultado} onChange={mudarResultado}>
              <option value="">Selecionar</option>
              <option value="Positivo">Positivo</option>
              <option value="Negativo">Negativo</option>
            </select>
          </div>
        )}

        <div>
          <button type="submit">Enviar Exame</button>
        </div>
        
      </form>
    </div>
  );
}
export default PaginaInserir