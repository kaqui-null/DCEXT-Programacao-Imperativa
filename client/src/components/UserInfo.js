import React from 'react'
import { useState, useEffect } from 'react'

import "./UserInfo.css"


function UserImg() {
    return (
      <div className='UsrImg'>
      <img src={require("../imgs/default_user_escaled.jpg")} alt='imagem do usuário'></img>
      </div>
    );
  }
  

export default function UserInfo() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api/usersJson").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
      <div className='total'>
        <UserImg />
        <div className='basicUsrInfo'>
            <h3>Nome: {backendData[0].nome}</h3>
            <h3>CPF: {backendData[0].cpf}</h3>
        </div>
      </div>
  );
}

