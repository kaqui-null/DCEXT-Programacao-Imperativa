const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const app = express();
const port = 4001;

app.use(bodyParser.json());

app.post('/enviar-cadrastro', (req, res) => {
  const enviarCadrastroData = req.body;

  console.log('Dados de cadrastro recebidos:', enviarCadrastroData);

  let jsonData = [];
  try {
    const rawData = fs.readFileSync('cadrastros.json', 'utf8');
    jsonData = JSON.parse(rawData);
  } catch (error) {
    console.error('Erro ao ler o arquivo', error);
  }

  jsonData.push(enviarCadrastroData);

  try {
    fs.writeFileSync('cadrastros.json', JSON.stringify(jsonData, null, 2), 'utf8');
    console.log('Dados salvos com sucesso');

    const documentDefinition = {
      content: [
        { text: 'Cadrastro', style: 'header' },
        { text: '\n' },
        { text: `Nome Completo: ${enviarCadrastroData.nomeCompleto}` },
        { text: `Data de Nascimento: ${enviarCadrastroData.dataNascimento}` },
        { text: `Idade: ${enviarCadrastroData.idade}` },
        { text: `Gênero: ${enviarCadrastroData.genero}` },
        { text: `Estado Civil: ${enviarCadrastroData.estadoCivil}` },
        { text: `Nacionalidade: ${enviarCadrastroData.nacionalidade}` },
        { text: `Naturalidade: ${enviarCadrastroData.naturalidade}` },
        { text: `Número RG: ${enviarCadrastroData.numeroRG}` },
        { text: `Orgão Emissor: ${enviarCadrastroData.orgaoEmissor}` },
        { text: `Número CPF: ${enviarCadrastroData.numeroCPF}` },
        { text: `Endereço: ${enviarCadrastroData.endereco}` },
        { text: `Telefone Residencial: ${enviarCadrastroData.telefoneResidencial}` },
        { text: `Telefone Celular: ${enviarCadrastroData.telefoneCelular}` },
        { text: `Email: ${enviarCadrastroData.email}` },
        { text: `Contato de Emergência: ${enviarCadrastroData.contatoEmergencia}` },
        { text: `Relação de Contato: ${enviarCadrastroData.relacaoContato}` },
        { text: `Telefone de Emergência: ${enviarCadrastroData.telefoneEmergencia}` },
        { text: `Plano de Saúde: ${enviarCadrastroData.planoSaude}` },
        { text: `Número do Cartão do Plano de Saúde: ${enviarCadrastroData.numeroCartaoPlanoSaude}` },
        { text: `Alergias: ${enviarCadrastroData.alergias}` },
        { text: `Medicamentos em Uso: ${enviarCadrastroData.medicamentosEmUso}` },
        { text: `Problemas de Saúde Relevantes: ${enviarCadrastroData.problemasSaudeRelevantes}` },
        { text: `Motivo de Internação: ${enviarCadrastroData.motivoInternacao}` },
        { text: `Data de Admissão: ${enviarCadrastroData.dataAdmissao}` },
        { text: `Hora de Admissão: ${enviarCadrastroData.horaAdmissao}` },
        { text: `Médico Responsável: ${enviarCadrastroData.medicoResponsavel}` },
        { text: `Setor Ala: ${enviarCadrastroData.setorAla}` },
        { text: `Quarto: ${enviarCadrastroData.quarto}` },
        { text: `Leito: ${enviarCadrastroData.leito}` },
        { text: `Observações Adicionais: ${enviarCadrastroData.observacoesAdicionais}` },
        
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
      },
    };

    const pdfDoc = pdfMake.createPdf(documentDefinition);

    
    pdfDoc.getBuffer((buffer) => {
     
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=ficha_medica.pdf',
      });
      res.end(buffer);
    });

  } catch (error) {
    console.error('Erro ao escrever o arquivo', error);
    res.status(500).send('Erro ao salvar o paciente.');
  }
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});