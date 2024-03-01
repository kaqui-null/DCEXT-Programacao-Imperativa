import React from 'react'

var usuario = { // info vem do backend dps
    nome: "Fulano da Silva",
    cpf: "111.222.333-44",
    sus: "111 2222 3333 4444" 
}


function UserImg() {
    return (
      <div>
      <img src={require("../imgs/default_user_escaled.jpg")} alt='imagem do usuário'></img>
      </div>
    );
  }
  

export default function UserInfo() {
return (
    <>
    <UserImg />
    <div>
        <h3>Nome: {usuario.nome}</h3>
        <h3>CPF: {usuario.cpf}</h3>
        <h3>SUS: {usuario.sus}</h3>
    </div>
    </>
);
}

