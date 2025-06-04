import { useState } from 'react';

export default function TelaSenha({ onVoltar, onEntrar }) {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-pink-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center text-pink-600">Digite sua senha</h2>

        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          type={mostrarSenha ? 'text' : 'password'}
          value={senha}
          onChange={e => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <div className="flex items-center mb-4">
          <input
            id="mostrarSenha"
            type="checkbox"
            checked={mostrarSenha}
            onChange={() => setMostrarSenha(!mostrarSenha)}
            className="mr-2"
          />
          <label htmlFor="mostrarSenha" className="text-gray-700 cursor-pointer">
            Mostrar senha
          </label>
        </div>

        <button
          onClick={onEntrar}  
          className="w-full py-2 mb-4 text-white transition bg-pink-500 rounded-md hover:bg-pink-600"
        >
          Entrar
        </button>

        <div className="flex justify-between text-sm text-pink-600">
          <button onClick={onVoltar} className="underline">
            Voltar
          </button>
          <a href="#" className="underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  );
}
