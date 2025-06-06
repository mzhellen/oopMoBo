import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-mobo.png';

export function IniciarSessao() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#4D2C1D] flex flex-col items-center justify-center text-center px-4">
      <img src={logo} alt="Logo MoBo" className="w-48 mb-6" />
      <h1 className="text-4xl font-bold text-[#F6E9D0] mb-10">MoBo</h1>

      <button
        onClick={() => navigate('/TelaLogin')}
        className="bg-[#F6E0B5] text-[#1E1E1E] font-semibold px-8 py-3 rounded-full mb-4 hover:bg-[#e7d2a2] transition"
      >
        Iniciar Sessão
      </button>

      <button
        onClick={() => navigate('/SaibaMais')}
        className="text-[#F6E0B5] font-medium text-lg mt-2 hover:underline"
      >
        Saiba Mais
      </button>
    </div>
  );
}
