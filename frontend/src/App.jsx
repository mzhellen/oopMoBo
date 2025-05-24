import { useState } from 'react';
import TelaLogin from './TelaLogin';
import TelaSenha from './TelaSenha';
import TelaInicial from './TelaInicial'; 

export default function App() {
  const [telaAtual, setTelaAtual] = useState('inicio');

  if (telaAtual === 'inicio') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-100">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold text-pink-600">Mo-Bo</h1>
          <p className="text-lg text-gray-700">Seja bem-vindo à sua biblioteca digital!</p>
          <button
            onClick={() => setTelaAtual('login')}
            className="px-6 py-2 mt-4 text-white transition bg-pink-500 rounded-full hover:bg-pink-600"
          >
            Iniciar Sessão
          </button>
        </div>
      </div>
    );
  }

  if (telaAtual === 'login') {
    return (
      <TelaLogin
        onSeguir={() => setTelaAtual('senha')}
        voltar={() => setTelaAtual('inicio')}
      />
    );
  }

  if (telaAtual === 'senha') {
    return <TelaSenha onVoltar={() => setTelaAtual('login')} onEntrar={() => setTelaAtual('inicial')} />;
  }

  if (telaAtual === 'inicial') {
    return <TelaInicial />;
  }

  return null;
}
