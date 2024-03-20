import { useState , useEffect } from 'react'
import React from 'react'

import './SearchBar.css'

export default function SearchBar() {

  // status => pendente, completo, parcial e indisponível
  // backendData => json
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api/examesJson").then(
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
          <input 
            type="text" 
            placeholder='Pesquisar exames' 
            id='searchBarInput' 
            name='s'
            onChange={event => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </form>
      </div>

      <div className='tabela'>
        <table>
        <thead>
          <tr><th colSpan={6}>Nome do exame</th></tr>
        </thead>
        <tbody>
          {backendData.filter((val) => {
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
              <td className="sameValCol"> Data de Liberação: {val['data de liberação']}</td>
              <td className="sameValCol"> Data de Recebimento: {val['data de recebimento']}</td>
              <td className="sameValCol"> {val.status} </td>
              <td className='sameValCol'> {val.url} </td>
            </tr>;
          })}
        </tbody>
      </table>
        </div>

    </div>
  );
}
