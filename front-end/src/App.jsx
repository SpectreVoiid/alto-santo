import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoradorForm from './components/MoradorForm';
import MoradorList from './components/MoradorList';

const Home = () => {
  const [moradores, setMoradores] = useState([]);

  useEffect(() => {
    fetchMoradores();
  }, []);

  const fetchMoradores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/moradores');
      setMoradores(response.data.data);
    } catch (error) {
      console.error('Erro ao buscar moradores', error);
    }
  };

  const addMorador = async (morador) => {
    try {
      const response = await axios.post('http://localhost:5000/api/moradores', morador);
      setMoradores([...moradores, response.data.data]);
    } catch (error) {
      console.error('Erro ao adicionar morador', error);
    }
  };

  const updateMorador = async (id, updatedMorador) => {
    try {
      await axios.put(`http://localhost:5000/api/moradores/${id}`, updatedMorador);
      fetchMoradores();
    } catch (error) {
      console.error('Erro ao atualizar morador', error);
    }
  };

  const deleteMorador = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/moradores/${id}`);
      fetchMoradores();
    } catch (error) {
      console.error('Erro ao deletar morador', error);
    }
  };

  return (
    <div>
      <h1>Cadastro de Moradores - Alto Santo da Glória</h1>
      <MoradorForm addMorador={addMorador} />
      <MoradorList 
        moradores={moradores} 
        updateMorador={updateMorador} 
        deleteMorador={deleteMorador} 
      />
    </div>
  );
};

export default Home;
