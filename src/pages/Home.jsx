import React from 'react';
import { useInterest } from '../Context/InterestContext';

export default function Home() {
  const { addInterest } = useInterest();

  // Simulando livros
  const books = [
    { id: 101, title: '1984', type: 'Livro' },
    { id: 102, title: 'O Pequeno Príncipe', type: 'Livro' },
    { id: 103, title: 'A Revolução dos Bichos', type: 'Livro' },
    { id: 104, title: 'A Menina que Roubava Livros', type: 'Livro' }
  ];

  function handleAddInterest(book) {
    console.log('Tentando adicionar livro:', book);
    addInterest(book);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Livros disponíveis</h1>
      <p>Clique em um livro para adicioná-lo aos seus interesses.</p>

      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: '10px' }}>
            {book.title}
            <button 
              onClick={() => handleAddInterest(book)} 
              style={{ marginLeft: '10px' }}>
              Adicionar aos interesses
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
