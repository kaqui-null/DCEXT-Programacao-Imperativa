import './tabela.css'
import React, { useState, useEffect } from 'react';

export default function TabelaDetalhamentoExame(){
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/examesJSON").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

    return(
        <div className="tabela">
        <table>
          <thead>
            <tr><th colSpan="4">NOME DO EXAME</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>exame 1</td>
              <td>LINK PARA ACESSO: {backendData.a.url}</td>
              <td>LINK PARA DOWNLOAD: </td>
              <td>status</td>
            </tr>
            <tr>
            <td>exame 2</td>
              <td>LINK PARA ACESSO:</td>
              <td>LINK PARA DOWNLOAD: </td>
              <td>status</td>
            </tr>
            <tr>
            <td>exame 3</td>
              <td>LINK PARA ACESSO: </td>
              <td>LINK PARA DOWNLOAD: </td>
              <td>status</td>
            </tr>
            <tr>
            <td>exame 4</td>
              <td>LINK PARA ACESSO: </td>
              <td>LINK PARA DOWNLOAD: </td>
              <td>status</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
}