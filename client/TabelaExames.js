import React from 'react';

const TabelaExames = ({ dados }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Idade</th>
            <th>Número do CPF</th>
            <th>Telefone Celular</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(dados) && dados.length > 0 ? (
            dados.map((item, index) => (
              <tr key={index}>
                <td>{item.nomeCompleto}</td>
                <td>{item.idade}</td>
                <td>{item.numeroCPF}</td>
                <td>{item.telefoneCelular}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum dado disponível</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaExames;
