import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.css';
import Input from '../Input';
import axios from 'axios';
import PaginaDetalhamento from '../../pagina-detalhamento'

function LoginForm() {

  const [backendData, setBackendData] = useState([]);
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
        console.log(data);
      }
    )
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(cpf, password);

    try {
      const response = await axios.post('http://localhost:5000/api/usersJson', {
        cpf,
        password
      });
      setUser(response.data);

    } catch (error) {
      if (!error?.response) {
        setError('Erro ao acessar o servidor');
      } else if (error.response.status === 401) {
        setError('Usuários ou senha inválidos');
      }
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setUser(null)

  }

  return (
    <div className={styles.form}>
      <h1>Resultados de Exames</h1>
    
      {user== null ?(
      <div>
      <p>Login</p>
      <form>
        <Input
          type="text"
          text="CPF:"
          name="name"
          placeholder="Insira seu CPF"
          id="cpf"
          required
          handleOnChange={(e) => setCpf(e.target.value)}
        />
        <Input
          type="password"
          text="Senha:"
          name="password"
          placeholder="Insira sua senha"
          required
          handleOnChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className={styles.botao} onClick={(e) => handleLogin(e)}>
          Entrar
        </button>
        {/* <Link to="/paginaDoPaciente" className={styles.botao} onClick={(e) => handleLogin(e)}> 
  Entrar
</Link>*/}

        {/* <Link to="/Cadastro">ME CADASTRAR</Link> */}
      </form>
      <p>{error}</p>
  </div>
  ) : (
    <div>
        <PaginaDetalhamento/>
        <button type="button" 
        className={styles.botao}
        onClick={(e) => handleLogout(e)}>Sair</button>
    </div>

  )}
  </div>
)}

export default LoginForm;


// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import styles from './LoginForm.module.css';
// import Input from '../Input';
// import axios from 'axios';

// function LoginForm() {
//   const [backendData, setBackendData] = useState([]);
//   const [password, setPassword] = useState('');
//   const [cpf, setCpf] = useState('');
//   const [error, setError] = useState('');
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data);
//         console.log(data);
//       }
//     )
//   }, []);

//   const handleCadastro = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/usersJson', {
//         cpf,
//         password
//       });
//       setUser(response.data);
//     } catch (error) {
//       if (!error?.response) {
//         setError('Erro ao acessar o servidor');
//       } else if (error.response.status === 401) {
//         setError('Usuários ou senha inválidos');
//       }
//     }
//   };

//   return (
//     <div className={styles.form}>
//       <h1>Resultados de Exames</h1>
//       <p>Login</p>
//       <form>
//         <Input
//           type="text"
//           text="CPF:"
//           name="name"
//           placeholder="Insira seu CPF"
//           id="cpf"
//           required
//           handleOnChange={(e) => setCpf(e.target.value)}
//         />
//         <Input
//           type="password"
//           text="Senha:"
//           name="password"
//           placeholder="Insira sua senha"
//           required
//           handleOnChange={(e) => setPassword(e.target.value)}
//         />
//         <button type='submit' className={styles.botao} onClick={(e) => handleCadastro(e)}>
//           Entrar
//         </button>

//       </form>
//       <p>{error}</p>
//     </div>
//   );
// }

// export default LoginForm;



