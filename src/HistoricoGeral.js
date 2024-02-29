import './HistoricoGeral.css'
import React from 'react'
import exames from './exames.json'
import { useState } from 'react'


var usuario = { // info vem do backend dps
  nome: "Fulano da Silva",
  cpf: "111.222.333-44",
  sus: "111 2222 3333 4444" 
}

function UserInfo() {
  return (
    <div className="App" class="HCenter">
        <h3>Nome: {usuario.nome}</h3>
        <h3>CPF: {usuario.cpf}</h3>
        <h3>SUS: {usuario.sus}</h3>
    </div>
  );
}

function UserImg() {
  return (
    <div>
    <img className='avatar' src={require("./imgs/default_user_escaled.jpg")} alt='imagem usuário'></img>
    </div>
  );
}


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div id='searchTable'>
      <div class='HCenter' id='searchDiv'>
        <form>
          <label htmlFor='header-search'>
            <span>Pesquise exames: </span>
          </label>
          <input 
            type="text" 
            placeholder='Pesquisar exames' 
            id='searchBarInput' 
            name='s'
            onChange={event => {
              setSearchTerm(event.target.value);
            }}
          ></input>
          <button type='submit' id='searchButton'>Pequise</button>
        </form>
      </div>

      <div className='Results'>
        {exames.filter((val) => {
          if (searchTerm === '') {
            return val;
          }
          else if (val.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
        return <div key={key}>
          <p>{val.nome}</p>
          </div>;
        })}
      </div>
    </div>
  );
}


function HistoricoGeral() {
  return (
    <>
      <div className='fullApp'>

        <div className="BasicInfo" class="TopLeft">
          <UserImg />
          <UserInfo />
        </div>

        <div className='SearchTable' class="MainTable">
          <SearchBar />
        </div>

      </div>
    </>
  );
}

export default HistoricoGeral;