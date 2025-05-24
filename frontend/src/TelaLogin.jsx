export default function TelaLogin({ onSeguir, voltar }) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-pink-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-pink-600">Mo-Bo</h1>

        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">
          E-mail ou telefone
        </label>
        <input
          id="email"
          type="text"
          placeholder="Digite seu e-mail ou telefone"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          onClick={onSeguir}
          className="w-full py-2 text-white transition bg-pink-500 rounded-md hover:bg-pink-600"
        >
          Seguir
        </button>

        <div className="mt-4 space-y-1 text-sm text-center text-gray-600">
          <p>
            <a href="#" className="text-pink-500 hover:underline">
              Criar conta
            </a>
          </p>
          <p>
            <a href="#" className="text-pink-500 hover:underline">
              Recuperar acesso
            </a>
          </p>
          <p>
            <button onClick={voltar} className="mt-4 text-pink-400 underline">
              Voltar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
