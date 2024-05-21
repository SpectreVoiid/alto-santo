import React from 'react';

const MoradorList = ({ moradores, updateMorador, deleteMorador }) => {
  return (
    <ul>
      {moradores.map((morador) => (
        <li key={morador.id}>
          {morador.nome} - {morador.idade} anos - {morador.endereco}
          <button onClick={() => updateMorador(morador.id, { ...morador, idade: morador.idade + 1 })}>
            Incrementar Idade
          </button>
          <button onClick={() => deleteMorador(morador.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
};

export default MoradorList;
