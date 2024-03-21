import {Link} from 'react-router-dom'
import React, { useState,useEffect} from 'react';
import styles from './LoginForm.module.css';
import Input from '../Input' 

function LoginForm(){

  const [backendData, setBackendData] = useState([{}])

  useEffect(()=> {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
        console.log(data)
      }
    )

  }, [])




  return(
    <div className={styles.form}>
     
    <h1>Resultados de Exames</h1>
    <p>Login</p>
    <form >
      <Input
      type="text"
      text="CPF:"
      name="name"
      placeholder="Insira seu CPF" 
      id = "cpf"
      />
      <Input
      type="password"
      text="Senha:"
      name="password"
      placeholder="Insira sua senha" 
      />
     
      <li className={styles.botao}>
        <Link to="/Exames">Entrar</Link>
      </li>
      <li className={styles.cadastro}>
      <Link  to= "/Cadastro">ME CADASTRAR</Link>
      </li>
    </form>
    </div>
  )
}



export default LoginForm

