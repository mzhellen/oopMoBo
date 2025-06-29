import { useState } from 'react';
import { Navbar } from '../components/Navbar';

export default function TelaInteresses() {
  const [interesses, setInteresses] = useState([
    {
      id: 1,
      tipo: 'filme',
      titulo: 'Tudo em Todo Lugar ao Mesmo Tempo',
      descricao: 'Uma mulher comum é arrastada para uma aventura épica através do multiverso.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/1/18/Everything_Everywhere_All_at_Once.jpg',
    },
    {
      id: 2,
      tipo: 'livro',
      titulo: 'A Biblioteca da Meia-Noite',
      descricao: 'Entre a vida e a morte, uma jovem encontra uma biblioteca que permite viver vidas alternativas.',
      capa: 'https://upload.wikimedia.org/wikipedia/pt/c/c6/A_Biblioteca_da_Meia_Noite.jpg',
    },
  ]);

  const removerItem = (id) => {
    setInteresses(interesses.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-4 overflow-y-auto">
      <Navbar />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Meus Interesses</h1>
        <button className="bg-[#b67c6a] px-4 py-2 rounded-full text-white hover:bg-[#a46b5c]">
          + Adicionar
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {interesses.map((item) => (
          <div key={item.id} className="bg-[#f5e8c7] text-[#4D2C1C] rounded-2xl shadow-md p-4 flex flex-col md:flex-row items-start">
            {item.capa && (
              <img
                src={item.capa}
                alt={item.titulo}
                className="w-28 h-40 object-cover rounded-md mr-4 mb-4 md:mb-0"
              />
            )}
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">{item.titulo}</h2>
              <p className="text-sm mb-2">{item.descricao}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => removerItem(item.id)}
                  className="bg-red-400 text-white px-3 py-1 rounded-full hover:bg-red-500 text-sm"
                >
                  Remover
                </button>
                {/* <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 text-sm">Adicionar à Estante</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
