import exames from '../exames.json'
import { useState , useEffect } from 'react'
import React from 'react'

import './SearchBar.css'

export default function SearchBar() {

  // status => pendente, completo, parcial e indisponível
  // backendData => json
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

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
          <button type='submit' id='searchButton'><img className="ImageSearch" src={require("../imgs/search_icon.webp")} alt='Pesquise'/></button>
        </form>
      </div>

      <table>
        <thead>
          <tr><th colSpan={5}>Nome do exame</th></tr>
        </thead>
        <tbody>
          {exames.filter((val) => {
            if (searchTerm === '') {
              return val;
            }
            else if (val.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map((val, key) => {
          return <tr key={key}>
              <td className="sameValCol"> {val.nome} </td>
              <td className="sameValCol"> {val.hospital}</td>
              <td className="sameValCol"> {val['data de liberação']}</td>
              <td className="sameValCol"> {val['data de recebimento']}</td>
              <td className="sameValCol"> {val.status} </td>
            </tr>;
          
          })}
        </tbody>
      </table>
    </div>
  );
}
