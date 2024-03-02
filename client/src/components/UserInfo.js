import React from 'react'
import { useState, useEffect } from 'react'

import "./UserInfo.css"

var usuario = { // info vem do backend dps
    nome: "Fulano da Silva",
    cpf: "111.222.333-44",
    sus: "111 2222 3333 4444" 
}


function UserImg() {
    return (
      <div>
      <img src={require("../imgs/default_user_escaled.jpg")} alt='imagem do usuário'></img>
      </div>
    );
  }
  

export default function UserInfo() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api/usersJson").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
      <>
      <UserImg />
      <div className='basicUsrInfo'>
          <h3>Nome: {backendData[0].nome}</h3>
          <h3>CPF: {backendData[0].cpf}</h3>
      </div>
      </>
  );
}

