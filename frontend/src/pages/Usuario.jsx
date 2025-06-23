import { useNavigate } from 'react-router-dom';

export default function Usuario() {
  const navigate = useNavigate();

  const usuario = {
    nome: 'Izandra Abilio',
    email: 'iza@email.com',
    inscritoDesde: 'março de 2024',
  };

  return (
    <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Perfil do Usuário</h1>

      <div className="bg-[#f5e8c7] text-[#4D2C1C] rounded-2xl p-6 max-w-md mx-auto shadow-md">
        <p className="mb-2"><span className="font-semibold">Nome:</span> {usuario.nome}</p>
        <p className="mb-2"><span className="font-semibold">E-mail:</span> {usuario.email}</p>
        <p className="mb-4"><span className="font-semibold">Inscrito desde:</span> {usuario.inscritoDesde}</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/configuracoes')}
            className="w-full bg-[#b67c6a] text-white py-2 rounded-full hover:bg-[#a46b5c]"
          >
            Configurações
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-blue-400 text-white py-2 rounded-full hover:bg-blue-500"
          >
            Logout
          </button>
          <button
            onClick={() => navigate('/inicial')}
            className="w-full bg-[#f5e8c7] text-[#4D2C1C] py-2 rounded-full border border-[#4D2C1C] hover:bg-[#ebd8ae]"
          >
            Voltar para estante
          </button>
        </div>
      </div>
    </div>
  );
}
