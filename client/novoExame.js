import React, { useState } from 'react';
import axios from 'axios';
import './ExamePage.css';
import { Link } from 'react-router-dom';

const ExamePage = () => {
  const FichaMedica = () => {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [alergias, setAlergias] = useState('');
    const [doencasCronicas, setDoencasCronicas] = useState('');
    const [medicamentosAtuais, setMedicamentosAtuais] = useState('');
    const [doencasHereditarias, setDoencasHereditarias] = useState('');
    const [condicoesMedicasFamiliares, setCondicoesMedicasFamiliares] = useState('');
    const [habitosAlimentares, setHabitosAlimentares] = useState('');
    const [atividadeFisica, setAtividadeFisica] = useState('');
    const [consumoAlcool, setConsumoAlcool] = useState('');
    const [tabagismo, setTabagismo] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [pressaoArterial, setPressaoArterial] = useState('');
    const [frequenciaCardiaca, setFrequenciaCardiaca] = useState('');
    const [respiracao, setRespiracao] = useState('');
    const [temperaturaCorporal, setTemperaturaCorporal] = useState('');
    const [hemogramaCompleto, setHemogramaCompleto] = useState(false);
    const [perfilLipidico, setPerfilLipidico] = useState(false);
    const [glicemia, setGlicemia] = useState(false);
    const [examesUrina, setExamesUrina] = useState(false);
    const [outrosExames, setOutrosExames] = useState('');
    const [sintomasAtuais, setSintomasAtuais] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [planoTratamento, setPlanoTratamento] = useState('');
    const [observacoesRecomendacoes, setObservacoesRecomendacoes] = useState('');
    const [nomeMedico, setNomeMedico] = useState('');
    const [numeroRegistroMedico, setNumeroRegistroMedico] = useState('');
    const [dataAssinatura, setDataAssinatura] = useState('');
    const [mensagem, setMensagem] = useState('');

    const EnviarFichaMedica = async () => {
      try {
        const response = await axios.post('http://localhost:3000/enviar-ficha-medica', {
          nome,
          dataNascimento,
          genero,
          estadoCivil,
          endereco,
          telefone,
          email,
          alergias,
          doencasCronicas,
          medicamentosAtuais,
          doencasHereditarias,
          condicoesMedicasFamiliares,
          habitosAlimentares,
          atividadeFisica,
          consumoAlcool,
          tabagismo,
          peso,
          altura,
          pressaoArterial,
          frequenciaCardiaca,
          respiracao,
          temperaturaCorporal,
          hemogramaCompleto,
          perfilLipidico,
          glicemia,
          examesUrina,
          outrosExames,
          sintomasAtuais,
          diagnostico,
          planoTratamento,
          observacoesRecomendacoes,
          nomeMedico,
          numeroRegistroMedico,
          dataAssinatura,
        });

        console.log('Resposta do backend:', response.data);
        setMensagem('Ficha médica enviada com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar ficha médica:', error);
        setMensagem('Erro ao enviar a ficha médica. Tente novamente.');
      }
    };

    return (
      <div className="ficha-medica-container">
        <h2>FICHA MÉDICA DO PACIENTE</h2>
        <div className="ficha-container">
          <div>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div>
            <label>Data de Nascimento:</label>
            <input type="text" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
          </div>
    
          <div>
            <label>Gênero:</label>
            <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
          </div>
    
          <div>
            <label>Estado Civil:</label>
            <input type="text" value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} />
          </div>
    
          <div>
            <label>Endereço:</label>
            <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
          </div>
    
          <div>
            <label>Número de Telefone:</label>
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </div>
    
          <div>
            <label>E-mail:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
    
          <div>
            <label>Alergias:</label>
            <input type="text" value={alergias} onChange={(e) => setAlergias(e.target.value)} />
          </div>
    
          <div>
            <label>Doenças Crônicas:</label>
            <input type="text" value={doencasCronicas} onChange={(e) => setDoencasCronicas(e.target.value)} />
          </div>
    
          <div>
            <label>Medicamentos Atuais:</label>
            <input type="text" value={medicamentosAtuais} onChange={(e) => setMedicamentosAtuais(e.target.value)} />
          </div>
    
          <div>
            <label>Doenças Hereditárias:</label>
            <input type="text" value={doencasHereditarias} onChange={(e) => setDoencasHereditarias(e.target.value)} />
          </div>
    
          <div>
            <label>Condições Médicas Familiares:</label>
            <input type="text" value={condicoesMedicasFamiliares} onChange={(e) => setCondicoesMedicasFamiliares(e.target.value)} />
          </div>
    
          <div>
            <label>Hábitos Alimentares:</label>
            <input type="text" value={habitosAlimentares} onChange={(e) => setHabitosAlimentares(e.target.value)} />
          </div>
    
          <div>
            <label>Pratica de Atividade Física:</label>
            <input type="text" value={atividadeFisica} onChange={(e) => setAtividadeFisica(e.target.value)} />
          </div>
          <div className="ficha-medica2">

          <div>
            <label>Consumo de Álcool:</label>
            <input type="text" value={consumoAlcool} onChange={(e) => setConsumoAlcool(e.target.value)} />
          </div>
    
          <div>
            <label>Tabagismo:</label>
            <input type="text" value={tabagismo} onChange={(e) => setTabagismo(e.target.value)} />
          </div>
    
          <div>
            <label>Peso:</label>
            <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
          </div>
    
          <div>
            <label>Altura:</label>
            <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
          </div>
    
          <div>
            <label>Pressão Arterial:</label>
            <input type="text" value={pressaoArterial} onChange={(e) => setPressaoArterial(e.target.value)} />
          </div>
    
          <div>
            <label>Frequência Cardíaca:</label>
            <input type="text" value={frequenciaCardiaca} onChange={(e) => setFrequenciaCardiaca(e.target.value)} />
          </div>
    
          <div>
            <label>Respiração:</label>
            <input type="text" value={respiracao} onChange={(e) => setRespiracao(e.target.value)} />
          </div>
    
          <div>
            <label>Temperatura Corporal:</label>
            <input type="text" value={temperaturaCorporal} onChange={(e) => setTemperaturaCorporal(e.target.value)} />
          </div>
    
          <div>
            <label>Hemograma Completo:</label>
            <input type="checkbox" checked={hemogramaCompleto} onChange={() => setHemogramaCompleto(!hemogramaCompleto)} />
          </div>
    
          <div>
            <label>Perfil Lipídico:</label>
            <input type="checkbox" checked={perfilLipidico} onChange={() => setPerfilLipidico(!perfilLipidico)} />
          </div>
    
          <div>
            <label>Glicemia:</label>
            <input type="checkbox" checked={glicemia} onChange={() => setGlicemia(!glicemia)} />
          </div>
    
          <div>
            <label>Exames de Urina:</label>
            <input type="checkbox" checked={examesUrina} onChange={() => setExamesUrina(!examesUrina)} />
          </div>
    
          <div>
            <label>Outros:</label>
            <input type="text" value={outrosExames} onChange={(e) => setOutrosExames(e.target.value)} />
          </div>
    
          <div>
            <label>Sintomas Atuais:</label>
            <input type="text" value={sintomasAtuais} onChange={(e) => setSintomasAtuais(e.target.value)} />
          </div>
    
          <div>
            <label>Diagnóstico:</label>
            <input type="text" value={diagnostico} onChange={(e) => setDiagnostico(e.target.value)} />
          </div>
    
          <div>
            <label>Plano de Tratamento:</label>
            <input type="text" value={planoTratamento} onChange={(e) => setPlanoTratamento(e.target.value)} />
          </div>
    
          
          <div>
            <label>Observações e Recomendações:</label>
            <input type="text" value={observacoesRecomendacoes} onChange={(e) => setObservacoesRecomendacoes(e.target.value)} />
          </div>
    
          
          <div>
            <label>Nome do Médico:</label>
            <input type="text" value={nomeMedico} onChange={(e) => setNomeMedico(e.target.value)} />
          </div>
    
          <div>
            <label>Número de Registro Médico:</label>
            <input type="text" value={numeroRegistroMedico} onChange={(e) => setNumeroRegistroMedico(e.target.value)} />
          </div>
    
          <div>
            <label>Data:</label>
            <input type="text" value={dataAssinatura} onChange={(e) => setDataAssinatura(e.target.value)} />
          </div>

        </div>
          <button onClick={EnviarFichaMedica}>Enviar Ficha Médica</button>
          {mensagem && <div className="mensagem">{mensagem}</div>}
        </div>

        <Link to="/ExamePage">
            <button>Voltar</button>
          </Link>

      </div>
    );
  };

  return (
    <div className="menu-wrapper">
      <div className="linha"></div>
      <div className="logo-container">
        <img src="schcb.png" alt="Logo" width="200" height="100" />
      </div>

      <menu>
        <div className="menu-item">Inicio</div>
        <div className="menu-item">Serviços</div>
        <div className="menu-item">Sair</div>
      </menu>
      <header></header>
      <div className="nova-barra"></div>
      <div className="page-container">
        <FichaMedica />
      </div>
      <div
        style={{ position: 'absolute', top: '2200px', backgroundColor: '#163e71', height: '12vh', left: 0, width: '100%' }}
      ></div>
    </div>
  );
};
export default ExamePage;
