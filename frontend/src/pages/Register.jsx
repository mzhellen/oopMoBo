import React, { useState } from 'react';
import api from '../controllers/api';

export function Register() {
  const [form, setForm] = useState({ 
    nome: '',
    email: '',
    senha: '',
    nasci: ''
  }); 

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function createUser() {
    try {
      const response = await api.post('/poo/users', form);
      console.log('Usuário cadastrado com sucesso!', response.data);
    } catch (error) {
      console.log('Erro ao cadastrar: ', error);
    }
  }

    // função para criação de usuário em comunicação com o backend 
    async function createUser() {
      try{
          const response = await api.post('/poo/users/register', form);
          console.log('Usuário cadastrado com sucesso!', response.data);
      } catch (error){
          console.log('Erro ao cadastrar: ', error);
      }
    }

    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5 bg-orange-300">
        <form>
          <div className="text-center p-5 text-orange-950"> 
            <h1 className="text-2xl font-bold">Criar Conta</h1>
          </div>

          {['nome', 'email', 'nasci', 'senha'].map((field, i) => (
            <div className='p-3 flex flex-col text-orange-950' key={i}>
              <label>
                {field === 'nasci' ? 'Data de nascimento' : field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                name={field}
                type={field === 'nasci' ? 'date' : field === 'senha' ? 'password' : field === 'email' ? 'email' : 'text'}
                value={form[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className='text-center bg-orange-200 p-3 text-orange-950'>
            <button type="button" onClick={createUser}>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>  
  );
}
