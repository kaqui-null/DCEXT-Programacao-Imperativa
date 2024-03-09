import {Link} from 'react-router-dom'
import styles from './Redefinir.module.css';
import Input from '../Input'

function Redefinir(){
  return(
    <div className={styles.formRedefinir_senha}>
    <h1>Redefinir senha</h1>
    <p>Crie uma nova senha</p>
    <form >
      <Input
      type="text"
      text="CPF:"
      name="name"
      placeholder="000.000.000-00" 
      />
      <Input
      type="password"
      text="Crie uma nova senha:"
      name="password"
      placeholder="Insira uma senha com no minimo 6 dígitos" 
      />
      <Input
      type="password"
      text="Confirme sua senha:"
      name="password"
      placeholder="Insira uma senha com no minimo 6 dígitos" 
      />
      
      <li className={styles.botao}>
        <Link to="/Entrar">Redefinir</Link>
      </li>
      
    </form>
    </div>







  )
}
export default Redefinir