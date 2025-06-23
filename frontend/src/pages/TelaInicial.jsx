import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaInicial() {
  const navigate = useNavigate();

  const [itens, setItens] = useState([
    {
      id: 1,
      tipo: 'filme',
      titulo: 'Parasita',
      descricao:
        'A família de Ki-taek vive em um porão apertado até que surge uma oportunidade de emprego em uma casa rica, iniciando uma trama de engano e drama social.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/9/9f/Parasite_%282019%29.png',
      nota: 5,
    },
    {
      id: 2,
      tipo: 'livro',
      titulo: 'O Apanhador no Campo de Centeio',
      descricao:
        'O adolescente Holden Caulfield narra sua jornada de desilusão com o mundo adulto em Nova York após ser expulso da escola.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/7/70/The_Catcher_in_the_Rye_-_Cover.jpg',
      nota: 4,
    },
    {
      id: 3,
      tipo: 'filme',
      titulo: 'A Origem',
      descricao:
        'Um ladrão especializado em roubar segredos do subconsciente é desafiado a plantar uma ideia na mente de um CEO.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/2/2e/Inception_%282010%29.jpg',
      nota: 5,
    },
    {
      id: 4,
      tipo: 'livro',
      titulo: '1984',
      descricao:
        'Um clássico distópico de George Orwell que mostra um mundo controlado por um governo totalitário e vigilante.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/c/c3/1984_capa.jpg',
      nota: 5,
    },
    {
      id: 5,
      tipo: 'filme',
      titulo: 'Clube da Luta',
      descricao:
        'Um homem insatisfeito com a vida conhece Tyler Durden e funda um clube secreto de luta que acaba se tornando algo maior.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/8/8a/Fight_Club_poster.jpg',
      nota: 4,
    },
    {
      id: 6,
      tipo: 'livro',
      titulo: 'Dom Casmurro',
      descricao:
        'Machado de Assis retrata a história de Bentinho e Capitu, e a dúvida que assombra o protagonista até o fim.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Dom_Casmurro.jpg',
      nota: 5,
    },
    {
      id: 7,
      tipo: 'filme',
      titulo: 'O Fabuloso Destino de Amélie Poulain',
      descricao:
        'Amélie decide mudar a vida das pessoas ao seu redor enquanto vive sua própria jornada de descobertas em Paris.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/6/62/Amelie_poster.jpg',
      nota: 4,
    },
    {
      id: 8,
      tipo: 'livro',
      titulo: 'A Menina que Roubava Livros',
      descricao:
        'Durante a Segunda Guerra Mundial, uma jovem encontra refúgio nos livros enquanto o mundo desmorona ao seu redor.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/6/64/A_Menina_que_Roubava_Livros.jpg',
      nota: 5,
    },
    {
      id: 9,
      tipo: 'filme',
      titulo: 'O Grande Hotel Budapeste',
      descricao:
        'Um concierge de hotel e um mensageiro embarcam em uma aventura envolvendo um assassinato, uma herança e uma pintura renascentista.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/c/c5/The_Grand_Budapest_Hotel_Poster.jpg',
      nota: 4,
    },
    {
      id: 10,
      tipo: 'livro',
      titulo: 'Orgulho e Preconceito',
      descricao:
        'Elizabeth Bennet enfrenta questões de classe, moralidade e amor na Inglaterra do século XIX.',
      capa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/PrideAndPrejudiceTitlePage.jpg/800px-PrideAndPrejudiceTitlePage.jpg',
      nota: 4,
    },
  ]);

  const adicionarItem = () => {
    const novo = prompt("Adicionar livro ou filme? (digite 'livro' ou 'filme')");
    if (!novo) return;
    setItens([
      ...itens,
      {
        id: itens.length + 1,
        tipo: novo,
        titulo: `Novo ${novo}`,
        capa: '',
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-[#4D2C1C] text-black px-6 py-4 overflow-y-auto">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-center w-full text-[#f5e8c7]">Minha Estante</h1>
        <button
          onClick={() => navigate('/usuario')}
          className="absolute right-6 top-4 text-sm bg-[#f5e8c7] px-4 py-1 rounded-full hover:bg-[#e9d7b4]"
        >
          Usuário
        </button>
      </header>

      <div className="flex flex-col gap-6">
        {itens.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center p-4 rounded-2xl shadow-md ${
              item.tipo === 'livro' ? 'bg-blue-200' : 'bg-[#b67c6a]'
            }`}
          >
            {item.capa && (
              <img
                src={item.capa}
                alt={item.titulo}
                className="w-32 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
              />
            )}
            <div>
              <h2 className="text-xl font-bold">{item.titulo}</h2>
              {item.descricao && <p className="mt-2 text-sm">{item.descricao}</p>}
              {item.nota && (
                <div className="mt-2 text-yellow-500 text-lg">
                  {'★'.repeat(item.nota)}{'☆'.repeat(5 - item.nota)}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Blocos para adicionar novos */}
        <div className="grid grid-cols-2 gap-4">
          <div
            onClick={adicionarItem}
            className="h-48 bg-[#f8e8c3] rounded-xl flex items-center justify-center text-4xl text-[#aa926c] cursor-pointer hover:bg-[#f2deb0]"
          >
            +
          </div>
          <div
            onClick={adicionarItem}
            className="h-48 bg-[#d3bfa3] rounded-xl flex items-center justify-center text-4xl text-[#9e7f5c] cursor-pointer hover:bg-[#cdb194]"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
