import {Link} from 'react-router-dom'
import styles from './Cadastro.module.css';
import Input from '../Input'
import React, {useState} from 'react';

function Cadastro(){

  const [nome, setnome] = useState('');
  const [cpf, setcpf] = useState('');
  const [email, setemail] = useState('');
  const [data, setdata] = useState('');
  const[telefone, settelefone] = useState('');
  const [password, setpassword] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();

    console.log(nome, cpf, email, data,telefone,password);
  }

  return(
    <div className={styles.formCadastro}>
    <h1>Cadastrar</h1>
    <p>Preencha as informações abaixo pra realizar seu cadastro</p>
    <form >
      <Input
      type="text"
      text="Nome completo:"
      name="name"
      placeholder="Insira seu nome completo" 
      required 
      handleOnChange = {(e) => setnome(e.target.value)}
      />
      <Input
      type="text"
      text="CPF:"
      name="text"
      placeholder="000.000.000-00" 
      required 
      handleOnChange = {(e) => setcpf(e.target.value)}
      />
      <Input
      type="text"
      text="Email:"
      name="name"
      placeholder="ex: abcd@email.com" 
      required 
      handleOnChange = {(e) => setemail(e.target.value)}
      />
      <Input
      type="date"
      text="Data de nascimento:"
      name="data"
      placeholder=""
      required 
      handleOnChange = {(e) => setdata(e.target.value)}
      />
      <Input
      type="tel"
      text="Telefone:"
      name="telefone"
      placeholder="(00) 00000-0000"
      required 
      handleOnChange = {(e) => settelefone(e.target.value)}
      />
      <Input
      type="password"
      text="Crie uma senha:"
      name="password"
      placeholder="Insira uma senha com no minimo 6 dígitos" 
      required 
      handleOnChange = {(e) => setpassword(e.target.value)}
      />
      
      <button type='submit' className={styles.botao} onClick={(e) => handleCadastro(e)}>
        Cadastrar
      </button>
      
    </form>
    </div>

  )
}
export default Cadastro