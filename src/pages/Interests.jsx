import React, {useEffect, useLocation} from 'react';
import { useInterest } from '../Context/InterestContext';

export default function Interests() {
  const { interests, addInterest, removeInterest } = useInterest();

  useEffect(() => {
    console.log('Página de Interesses foi acessada!');
    // Aqui você pode recarregar algo do localStorage, API, etc. se quiser.
  }, []); // esse array vazio significa: só roda quando o componente "monta"

    useEffect(() => {
    console.log('Interests atualizados:', interests);
  }, [interests]);

  // Simulação de "resultados da API"
  const mockData = [
    { id: 1, title: 'Dom Casmurro', type: 'Livro' },
    { id: 2, title: 'Interestelar', type: 'Filme' },
    { id: 3, title: 'O Senhor dos Anéis', type: 'Livro' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Escolha seus interesses</h1>
      <div>
<h2>Livros</h2>
{mockData
  .filter(item => item.type === 'Livro')
  .map(item => (
    <div key={item.id}>
      {item.title}
      <button onClick={() => addInterest(item)}>Adicionar</button>
    </div>
))}
<h2>Filmes</h2>
{mockData
  .filter(item => item.type === 'Filme')
  .map(item => (
    <div key={item.id}>
      {item.title}
      <button onClick={() => addInterest(item)}>Adicionar</button>
    </div>
))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Meus interesses</h2>
        {interests.length === 0 && <p>Nenhum item adicionado ainda.</p>}
        {interests.map((item) => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            {item.title}
            <button onClick={() => removeInterest(item.id)} style={{ marginLeft: '10px' }}>
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
