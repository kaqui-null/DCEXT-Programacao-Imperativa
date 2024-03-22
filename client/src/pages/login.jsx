import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './login.css';
import Cabecalho from './components/Cabecalho.jsx';
import Rodape from './components/Rodape.jsx';
import Container from './components/Container.jsx';
import LinkBotao from './components/LinkBotao.jsx';
import Medico from './components/pages/Medico.jsx';
import Paciente from './components/pages/Paciente.jsx';
import Cadastro from './components/form/Cadastro.jsx'; 
import PaginaMedico from '../PaginaMedico';
import PaginaDetalhamento from './pagina-detalhamento'
import HistoricoGeral from './HistoricoGeral';
import ExamePage from '../examePage';
import NovoCadastro from '../cadrastro';
import TabelaExames from '../TabelaExames';


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
          <Route path="/paginaDoPaciente" element={<PaginaDetalhamento/>}></Route>
          <Route path="/Cadastro" element={<Cadastro/>}></Route>
          <Route path='/Exames' element={<HistoricoGeral/>}></Route>
          <Route path='/ExamesMe' element={<PaginaMedico/>}></Route>
          <Route path='/novoExame' element={<ExamePage/>}></Route>
          <Route path='/cadastro' element={<NovoCadastro/>}></Route>
          <Route path='/TabelaExames' element={<TabelaExames/>}></Route>
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
