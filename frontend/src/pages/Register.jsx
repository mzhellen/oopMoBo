import React, { useState } from 'react';
import api from '../controllers/api'

export function Register(){

  // cria um espaço para as informações do usuário que inicia vazia
    const [form, setForm] = useState({ 
      nome: '',
      email: '',
      senha: '',
      nasci: ''
    }); 

    // capta o valor onde o evento é disparado e atualiza o form
    function haldleChange(e){
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value}));
    }

    // função para criação de usuário em comunicação com o backend 
    async function createUser() {
      try{
          const response = await api.post('/poo/users', form);
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
            <h1>Criar Conta</h1>
          </div>

          <div className='p-3 flex flex-col  text-orange-950'>
            <label>
              Nome:
            </label>
            <input 
              name="nome" 
              type="text"
              value={form.nome}
              onChange={haldleChange} 
            />
          </div>
          <div className='p-3 flex flex-col  text-orange-950' >
            <label>
              Email:
            </label>
            <input 
              name="email" 
              type="email" 
              value={form.email}
              onChange={haldleChange} 
            />
          </div>
          <div className='p-3 flex flex-col  text-orange-950' >
            <label>
              Data de nascimento:
            </label>
            <input 
              name="nasci" 
              type="date" 
              value={form.nasci}
              onChange={haldleChange} 
            />
          </div>
          
          <div className='p-3 flex flex-col  text-orange-950' >
            <label>
              Senha:
            </label>
            <input
              name="senha" 
              type="password" 
              value={form.senha}
              onChange={haldleChange} 
            />
          </div>

          <div className='text-center bg-orange-200 p-3  text-orange-950'>
            <button type="button" onClick={createUser}>Cadastrar</button>
          </div>

        </form>
      </div>
    </div>  
    );
}