import React, { useState } from 'react';

const MoradorForm = ({ addMorador }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMorador({ nome, idade: parseInt(idade), endereco });
    setNome('');
    setIdade('');
    setEndereco('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Idade" 
        value={idade} 
        onChange={(e) => setIdade(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Endereço" 
        value={endereco} 
        onChange={(e) => setEndereco(e.target.value)} 
      />
      <button type="submit">Adicionar Morador</button>
    </form>
  );
};

export default MoradorForm;
