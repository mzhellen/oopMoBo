import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#f5e8c7] text-[#4D2C1C] flex justify-between items-center h-14 z-50 p-0 m-0">
      <h1 className="ml-4 text-lg font-bold">Mo-Bo</h1>
      <div className="flex gap-4 mr-4">
        <button
          onClick={() => navigate('/inicial')}
          className="hover:text-[#b67c6a] transition-colors"
        >
          Estante
        </button>
        <button
          onClick={() => navigate('/interesses')}
          className="hover:text-[#b67c6a] transition-colors"
        >
          Interesses
        </button>
        <button
          onClick={() => navigate('/addfilme')}
          className="hover:text-[#b67c6a] transition-colors"
        >
          Adicionar Filme
        </button>
        <button
          onClick={() => navigate('/addlivro')}
          className="hover:text-[#b67c6a] transition-colors"
        >
          Adicionar Livro
        </button>
        <button
          onClick={() => navigate('/usuario')}
          className="hover:text-[#b67c6a] transition-colors"
        >
          Perfil
        </button>
      </div>
    </nav>
  );
}
