
import exames from '../exames.json'
import { useState } from 'react'
import React from 'react'


export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div id='searchDiv'>
        <div id='searchTable'>
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
  
        <div>
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
  