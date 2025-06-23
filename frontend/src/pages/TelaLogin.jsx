import { useNavigate } from "react-router-dom";

export default function TelaLogin() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-[#4D2C1C]">
      <div className="w-full max-w-sm p-8 bg-[#f5e8c7] shadow-lg rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-[#4D2C1C]">Mo-Bo</h1>

        <label className="block mb-1 text-sm font-medium text-[#4D2C1C]" htmlFor="email">
          E-mail ou telefone
        </label>
        <input
          id="email"
          type="text"
          placeholder="Digite seu e-mail ou telefone"
          className="w-full px-4 py-2 mb-4 border border-[#b67c6a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#aa926c]"
        />

        <button
          onClick={() => navigate('/senha')}
          className="w-full py-2 text-white transition bg-[#b67c6a] rounded-md hover:bg-[#9e5f4d]"
        >
          Seguir
        </button>

        <div className="mt-4 space-y-1 text-sm text-center text-[#4D2C1C]">
          <p>
            <button
              onClick={() => navigate("/register")}
              className="text-[#b67c6a] hover:underline"
            >
              Criar conta
            </button>
          </p>
          <p>
            <a href="#" className="text-[#b67c6a] hover:underline">
              Recuperar acesso
            </a>
          </p>
          <p>
            <button onClick={() => navigate("/")} className="mt-4 text-[#aa926c] underline">
              Voltar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}