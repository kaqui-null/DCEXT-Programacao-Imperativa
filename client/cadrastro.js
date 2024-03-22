import React, { useState } from 'react';
import axios from 'axios';
import './ExamePage.css';
import { Link } from 'react-router-dom';

const NovoCadrastro = () => {
    const FichaCadrastro = () => {
      const [nomeCompleto, setNomeCompleto] = useState('');
      const [dataNascimento, setDataNascimento] = useState('');
      const [idade, setIdade] = useState('');
      const [genero, setGenero] = useState('');
      const [estadoCivil, setEstadoCivil] = useState('');
      const [nacionalidade, setNacionalidade] = useState('');
      const [naturalidade, setNaturalidade] = useState('');
      const [numeroRG, setNumeroRG] = useState('');
      const [orgaoEmissor, setOrgaoEmissor] = useState('');
      const [numeroCPF, setNumeroCPF] = useState('');
      const [endereco, setEndereco] = useState('');
      const [telefoneResidencial, setTelefoneResidencial] = useState('');
      const [telefoneCelular, setTelefoneCelular] = useState('');
      const [email, setEmail] = useState('');
      const [contatoEmergencia, setContatoEmergencia] = useState('');
      const [relacaoContato, setRelacaoContato] = useState('');
      const [telefoneEmergencia, setTelefoneEmergencia] = useState('');
      const [planoSaude, setPlanoSaude] = useState('');
      const [numeroCartaoPlanoSaude, setNumeroCartaoPlanoSaude] = useState('');
      const [alergias, setAlergias] = useState('');
      const [medicamentosEmUso, setMedicamentosEmUso] = useState('');
      const [problemasSaudeRelevantes, setProblemasSaudeRelevantes] = useState('');
      const [motivoInternacao, setMotivoInternacao] = useState('');
      const [dataAdmissao, setDataAdmissao] = useState('');
      const [horaAdmissao, setHoraAdmissao] = useState('');
      const [medicoResponsavel, setMedicoResponsavel] = useState('');
      const [setorAla, setSetorAla] = useState('');
      const [quarto, setQuarto] = useState('');
      const [leito, setLeito] = useState('');
      const [observacoesAdicionais, setObservacoesAdicionais] = useState('');
      const [mensagem, setMensagem] = useState('');
  
      const EnviarCadrastro = async () => {
        try {
          const response = await axios.post('http://localhost:3000/enviar-ficha-medica', {
            nomeCompleto,
            dataNascimento,
            idade,
            genero,
            estadoCivil,
            nacionalidade,
            naturalidade,
            numeroRG,
            orgaoEmissor,
            numeroCPF,
            endereco,
            telefoneResidencial,
            telefoneCelular,
            email,
            contatoEmergencia,
            relacaoContato,
            telefoneEmergencia,
            planoSaude,
            numeroCartaoPlanoSaude,
            alergias,
            medicamentosEmUso,
            problemasSaudeRelevantes,
            motivoInternacao,
            dataAdmissao,
            horaAdmissao,
            medicoResponsavel,
            setorAla,
            quarto,
            leito,
            observacoesAdicionais,
          });

    console.log('Resposta do backend:', response.data);

    console.log('Resposta do backend:', response.data);
    setMensagem('Ficha de Cadrastro enviada com sucesso!');

  } catch (error) {
    console.error('Erro ao enviar ficha de Cadrastro:', error);
    setMensagem('Erro ao enviar a ficha de Cadrastro. Tente novamente.');
  }
  
};

    return (
      <div className="ficha-medica-container">
         <h2>FICHA MÉDICA DO PACIENTE</h2>
        <div className="ficha-container">
    
            <div>
            <label>Nome Completo:</label>
            <input type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
            </div>

            <div>
            <label>Data de Nascimento:</label>
            <input type="text" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            </div>

            <div>
            <label>Idade:</label>
            <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
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
            <label>Nacionalidade:</label>
            <input type="text" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} />
            </div>

            <div>
            <label>Naturalidade:</label>
            <input type="text" value={naturalidade} onChange={(e) => setNaturalidade(e.target.value)} />
            </div>

            <div>
            <label>Número do RG:</label>
            <input type="text" value={numeroRG} onChange={(e) => setNumeroRG(e.target.value)} />
            </div>

            <div>
            <label>Órgão Emissor:</label>
            <input type="text" value={orgaoEmissor} onChange={(e) => setOrgaoEmissor(e.target.value)} />
            </div>

            <div>
            <label>Número do CPF:</label>
            <input type="text" value={numeroCPF} onChange={(e) => setNumeroCPF(e.target.value)} />
            </div>

            <div>
            <label>Endereço:</label>
            <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
            </div>

            <div>
            <label>Telefone Residencial:</label>
            <input type="text" value={telefoneResidencial} onChange={(e) => setTelefoneResidencial(e.target.value)} />
            </div>

            <div>
            <label>Telefone Celular:</label>
            <input type="text" value={telefoneCelular} onChange={(e) => setTelefoneCelular(e.target.value)} />
            </div>

            <div>
            <label>E-mail:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
            <label>Contato de Emergência:</label>
            <input type="text" value={contatoEmergencia} onChange={(e) => setContatoEmergencia(e.target.value)} />
            </div>

            <div>
            <label>Relação com o Paciente:</label>
            <input type="text" value={relacaoContato} onChange={(e) => setRelacaoContato(e.target.value)} />
            </div>

            <div>
            <label>Telefone de Emergência:</label>
            <input type="text" value={telefoneEmergencia} onChange={(e) => setTelefoneEmergencia(e.target.value)} />
            </div>

            <div>
            <label>Plano de Saúde:</label>
            <input type="text" value={planoSaude} onChange={(e) => setPlanoSaude(e.target.value)} />
            </div>

            <div>
            <label>Número do Cartão do Plano de Saúde:</label>
            <input type="text" value={numeroCartaoPlanoSaude} onChange={(e) => setNumeroCartaoPlanoSaude(e.target.value)} />
            </div>

            <div>
            <label>Alergias:</label>
            <input type="text" value={alergias} onChange={(e) => setAlergias(e.target.value)} />
            </div>

            <div>
            <label>Medicamentos em Uso:</label>
            <input type="text" value={medicamentosEmUso} onChange={(e) => setMedicamentosEmUso(e.target.value)} />
            </div>

            <div>
            <label>Problemas de Saúde Relevantes:</label>
            <input type="text" value={problemasSaudeRelevantes} onChange={(e) => setProblemasSaudeRelevantes(e.target.value)} />
            </div>

            <div>
            <label>Motivo da Internação:</label>
            <input type="text" value={motivoInternacao} onChange={(e) => setMotivoInternacao(e.target.value)} />
            </div>

            <div>
            <label>Data de Admissão:</label>
            <input type="text" value={dataAdmissao} onChange={(e) => setDataAdmissao(e.target.value)} />
            </div>

            <div>
            <label>Hora de Admissão:</label>
            <input type="text" value={horaAdmissao} onChange={(e) => setHoraAdmissao(e.target.value)} />
            </div>

            <div>
            <label>Médico Responsável:</label>
            <input type="text" value={medicoResponsavel} onChange={(e) => setMedicoResponsavel(e.target.value)} />
            </div>

            <div>
            <label>Setor/Ala:</label>
            <input type="text" value={setorAla} onChange={(e) => setSetorAla(e.target.value)} />
            </div>

            <div>
            <label>Quarto:</label>
            <input type="text" value={quarto} onChange={(e) => setQuarto(e.target.value)} />
            </div>

            <div>
            <label>Leito:</label>
            <input type="text" value={leito} onChange={(e) => setLeito(e.target.value)} />
            </div>

            <div>
            <label>Observações Adicionais:</label>
            <input type="text" value={observacoesAdicionais} onChange={(e) => setObservacoesAdicionais(e.target.value)} />
            </div>
          
            <button onClick={EnviarCadrastro}>Enviar Cadrastro</button>
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
      <header>
      </header>
      <div class="nova-barra">
      </div>
      <div className="page-container">
        <FichaCadrastro />
      </div>
      <div style={{ position: 'absolute', top: '2190px', backgroundColor: '#163e71', height: '15vh', left: 0 , width: '100%' }}>
      </div>
    </div>
  );
};
export default NovoCadrastro;
