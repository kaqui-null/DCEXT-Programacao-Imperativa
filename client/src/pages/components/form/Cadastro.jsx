import {Link} from 'react-router-dom'
import styles from './Cadastro.module.css';
import Input from '../Input'

function Cadastro(){
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
      />
      <Input
      type="text"
      text="CPF:"
      name="text"
      placeholder="000.000.000-00" 
      />
      <Input
      type="text"
      text="Email:"
      name="name"
      placeholder="ex: abcd@email.com" 
      />
      <Input
      type="date"
      text="Data de nascimento:"
      name="data"
      placeholder="" 
      />
      <Input
      type="tel"
      text="Telefone:"
      name="telefone"
      placeholder="(00) 00000-0000" 
      />
      <Input
      type="password"
      text="Crie uma senha:"
      name="password"
      placeholder="Insira uma senha com no minimo 6 dígitos" 
      />
      
      <li className={styles.botao}>
        <Link to="/Entrar">Cadastrar</Link>
      </li>
      
    </form>
    </div>







  )
}
export default Cadastro