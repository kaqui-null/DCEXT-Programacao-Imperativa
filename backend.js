const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post('/enviar-ficha-medica', (req, res) => {
  const fichaMedicaData = req.body;

  console.log('Dados da ficha médica recebidos:', fichaMedicaData);

  let jsonData = [];
  try {
    const rawData = fs.readFileSync('fichasMedicas.json', 'utf8');
    jsonData = JSON.parse(rawData);
  } catch (error) {
    console.error('Erro ao ler o arquivo', error);
  }

  jsonData.push(fichaMedicaData);

  try {
    fs.writeFileSync('fichasMedicas.json', JSON.stringify(jsonData, null, 2), 'utf8');
    console.log('Dados salvos com sucesso');

    const documentDefinition = {
      content: [
        { text: 'Ficha Médica', style: 'header' },
        { text: '\n' },
        { text: `Nome: ${fichaMedicaData.nome}` },
        { text: `Data de Nascimento: ${fichaMedicaData.dataNascimento}` },
        { text: `Gênero: ${fichaMedicaData.genero}` },
        { text: `Estado Civil: ${fichaMedicaData.estadoCivil}` },
        { text: `Endereço: ${fichaMedicaData.endereco}` },
        { text: `Telefone: ${fichaMedicaData.telefone}` },
        { text: `Email: ${fichaMedicaData.email}` },
        { text: `Alergias: ${fichaMedicaData.alergias}` },
        { text: `Doenças Crônicas: ${fichaMedicaData.doencasCronicas}` },
        { text: `Medicamentos Atuais: ${fichaMedicaData.medicamentosAtuais}` },
        { text: `Doenças Hereditárias: ${fichaMedicaData.doencasHereditarias}` },
        { text: `Condições Médicas Familiares: ${fichaMedicaData.condicoesMedicasFamiliares}` },
        { text: `Hábitos Alimentares: ${fichaMedicaData.habitosAlimentares}` },
        { text: `Prática de Atividade Física: ${fichaMedicaData.atividadeFisica}` },
        { text: `Consumo de Álcool: ${fichaMedicaData.consumoAlcool}` },
        { text: `Tabagismo: ${fichaMedicaData.tabagismo ? 'Sim' : 'Não'}` },
        { text: `Peso: ${fichaMedicaData.peso}` },
        { text: `Altura: ${fichaMedicaData.altura}` },
        { text: `Pressão Arterial: ${fichaMedicaData.pressaoArterial}` },
        { text: `Frequência Cardíaca: ${fichaMedicaData.frequenciaCardiaca}` },
        { text: `Respiração: ${fichaMedicaData.respiracao}` },
        { text: `Temperatura Corporal: ${fichaMedicaData.temperaturaCorporal}` },
        { text: `Hemograma Completo: ${fichaMedicaData.hemogramaCompleto ? 'Sim' : 'Não'}` },
        { text: `Perfil Lipídico: ${fichaMedicaData.perfilLipidico ? 'Sim' : 'Não'}` },
        { text: `Glicemia: ${fichaMedicaData.glicemia ? 'Sim' : 'Não'}` },
        { text: `Exames de Urina: ${fichaMedicaData.examesUrina ? 'Sim' : 'Não'}` },
        { text: `Outros Exames: ${fichaMedicaData.outrosExames}` },
        { text: `Sintomas Atuais: ${fichaMedicaData.sintomasAtuais}` },
        { text: `Diagnóstico: ${fichaMedicaData.diagnostico}` },
        { text: `Plano de Tratamento: ${fichaMedicaData.planoTratamento}` },
        { text: `Observações e Recomendações: ${fichaMedicaData.observacoesRecomendacoes}` },
        { text: `Nome do Médico: ${fichaMedicaData.nomeMedico}` },
        { text: `Número de Registro Médico: ${fichaMedicaData.numeroRegistroMedico}` },
        { text: `Data de Assinatura: ${fichaMedicaData.dataAssinatura}` },
        
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
    res.status(500).send('Erro ao salvar a ficha médica.');
  }
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});