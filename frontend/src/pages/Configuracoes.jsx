import { useNavigate } from 'react-router-dom';

export default function Configuracoes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Configurações</h1>

      <div className="bg-[#f5e8c7] text-[#4D2C1C] rounded-2xl p-6 max-w-md mx-auto shadow-md flex flex-col gap-4">
        <button className="w-full bg-[#4D2C1C] text-white py-2 rounded-full hover:bg-[#27150c]">
          Redefinir nome
        </button>
        <button className="w-full bg-[#4D2C1C] text-white py-2 rounded-full hover:bg--[#27150c]">
          Redefinir e-mail
        </button>
                <button className="w-full bg--[#4D2C1C] text-white py-2 rounded-full hover:bg-[#27150c]">
          Redefinir senha
        </button>

        <button
          onClick={() => navigate('/usuario')}
          className="mt-6 w-full bg-[#b67c6a] text-white py-2 rounded-full hover:bg-[#a46b5c]"
        >
          Voltar ao perfil
        </button>
      </div>
    </div>
  );
}