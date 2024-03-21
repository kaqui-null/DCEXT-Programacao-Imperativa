import {Link} from 'react-router-dom'
import React, { useState,useEffect} from 'react';
import styles from './LoginForm.module.css';
import Input from '../Input' 
import axios from 'axios';

function LoginForm(){

  const [backendData, setBackendData] = useState([{}])
  const [password, setpassword] = useState('');
  const [cpf, setcpf] = useState('');
  const [error, seterror] = useState('');
  const [user, setuser] = useState (null);

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


  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
    
    

    const response = await axios.get('http://localhost:5000/api/usersJson', 
    JSON.stringify({cpf, password}),
    {
      headers : {'content-type' : 'application/json'}
    })
    
    setuser(response.data);

  } catch(error) {
      if (!error?.response) {
        seterror ('Erro ao acessar o servidor');
      } else if (error.response.status == 401) {
        seterror('Usuários ou senha inválidos');
      }

    } }


<<<<<<< HEAD


  return (
    
    {user == null ? (
      <div>
      <div className={styles.form}>
     {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user,i) => {
        <div>
          <p key={i}>{user}</p>
        </div>
     })
      )}
=======
  return(
    <div className={styles.form}>
     
>>>>>>> d2b931c491efe4116a416e58462ab6ead2d944de
    <h1>Resultados de Exames</h1>
    <p>Login</p>
    <form >
      <Input
      type="text"
      text="CPF:"
      name="name"
      placeholder="Insira seu CPF" 
      id = "cpf"
      required 
      handleOnChange = {(e) => setcpf(e.target.value)}
      />
      <Input
      type="password"
      text="Senha:"
      name="password"
      placeholder="Insira sua senha" 
      required 
      handleOnChange = {(e) => setpassword(e.target.value)}
      />
<<<<<<< HEAD
      
      <button type='submit' className={styles.botao} onClick={(e) => handleCadastro(e)}>
        Entrar
      </button>
      
      
=======
     
      <li className={styles.botao}>
        <Link to="/Exames">Entrar</Link>
      </li>
>>>>>>> d2b931c491efe4116a416e58462ab6ead2d944de
      <li className={styles.cadastro}>
      <Link  to= "/Cadastro">ME CADASTRAR</Link>
      </li>


    </form>
    <p>
      {error}
    </p>
    </div>
      
      </div>

    
    ) : (
      <Link  to= "/Exames">Olá,{user.nome}</Link>
    )}
    );
  }
    
  




export default LoginForm

