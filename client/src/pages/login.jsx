import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './login.css';
import Cabecalho from '../../../pagina-login/client/src/componentes/Cabecalho';
import Rodape from '../../../pagina-login/client/src/componentes/Rodape';
import Container from '../../../pagina-login/client/src/componentes/Container';
import LinkBotao from '../../../pagina-login/client/src/componentes/LinkBotao';
import Medico from '../../../pagina-login/client/src/componentes/pages/Medico';
import Paciente from '../../../pagina-login/client/src/componentes/pages/Paciente';
import Cadastro from '../../../pagina-login/client/src/componentes/form/Cadastro'; 
import Redefinir from '../../../pagina-login/client/src/componentes/form/Redefinir'; 

function Login() {
  return (
    <Router>
      <>
      <Cabecalho/>
      </>
        <Container customClasse="min-height">
          <Routes>
          <Route path="/Entrar" element={<Acesso/>}></Route>
          <Route path="/Medico" element={<Medico/>}></Route>
          <Route path="/Paciente" element={<Paciente/>}></Route>
          <Route path="/Cadastro" element={<Cadastro/>}></Route>
          <Route path="/RedefinirSenha" element={<Redefinir/>}></Route>
          </Routes>
        </Container>
        <>
        <Rodape/>
        </>
    </Router>

    
    
    
  );
}

function Acesso(){
  return (
    <section className="tipoAcesso">
      <h1>Resultado de Exames</h1>
      <h2>Entrar como</h2>
      <LinkBotao to="/Medico" text="Médico"/>
      <span className = "ou">ou</span>
      <LinkBotao to="/Paciente" text="Paciente"/>
    </section>
  )
}


export default Login;
