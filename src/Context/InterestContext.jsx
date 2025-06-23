import React, { createContext, useState, useContext, useEffect } from 'react';

const InterestContext = createContext();

export function InterestProvider({ children }) {
  // Ler interesses salvos no localStorage (se houver)
  const [interests, setInterests] = useState(() => {
    const saved = localStorage.getItem('interests');
    return saved ? JSON.parse(saved) : [];
  });

  // Sempre que interests mudar, salvar no localStorage
  useEffect(() => {
    localStorage.setItem('interests', JSON.stringify(interests));
  }, [interests]);

  function addInterest(item) {
    const exists = interests.find(i => i.id === item.id);
    if (!exists) {
      setInterests(prev => [...prev, item]);
    }
  }

  function removeInterest(id) {
    setInterests(prev => prev.filter(item => item.id !== id));
  }

  return (
    <InterestContext.Provider value={{ interests, addInterest, removeInterest }}>
      {children}
    </InterestContext.Provider>
  );
}

export function useInterest() {
  return useContext(InterestContext);
}
