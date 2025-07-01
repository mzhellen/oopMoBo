import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../controllers/api';

export function Register() {
  const [form, setForm] = useState({ 
    nome: '',
    email: '',
    senha: '',
    nasci: ''
  });

  const navigate = useNavigate(); 

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function createUser() {
    api.post('/poo/users/register', form)
      .then(function (response) {
        console.log('Usuário cadastrado com sucesso!', response.data);
        navigate('/inicial'); 
      });
  }

  return (
    <div className="min-h-screen bg-[#4D2C1C] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#f5e8c7] text-[#4D2C1C] rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Criar Conta</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Nome</label>
            <input 
              name="nome" 
              type="text"
              value={form.nome}
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b67c6a]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input 
              name="email" 
              type="email" 
              value={form.email}
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b67c6a]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Data de nascimento</label>
            <input 
              name="nasci" 
              type="date" 
              value={form.nasci}
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b67c6a]"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Senha</label>
            <input
              name="senha" 
              type="password" 
              value={form.senha}
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b67c6a]"
            />
          </div>

          <button 
            type="button" 
            onClick={createUser}
            className="w-full bg-[#b67c6a] text-white py-2 rounded-full hover:bg-[#a46b5c]"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
