import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import api from '../controllers/api';

export default function TelaInteresses() {
  const [interesses, setInteresses] = useState([]);
  const [mycollection, setMyCollection] = useState([]);


  useEffect(() => {
    const getCollections = async () => {
      let userId = null;
      // requição pra pegar o id que será usado como filtro
      try{
        const getId = await api.get('/poo/users/profile')
        userId = getId.data.id;
        console.log('Id encontrado', userId);
      }catch(error){
        console.log('Não pegou o id', error);
        return;
      }
      
      try {
        const response = await api.get('/poo/collections'); 
        const data = response.data; 
        setMyCollection(data); 
        console.log('coleção resgatada', data);

        // filtragem de dados
        const filteredInteresses = data.filter(item => {
          return (item.data_assist === null || (item.data_inic === null && item.data_final === null)) && item.user.id === userId;
        });
        setInteresses(filteredInteresses);
        console.log('Interesses filtrados', filteredInteresses);

      } catch (error) {
        console.error('Erro na hora de pegar sua coleção:', error);
      }
    };
    
    getCollections();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-20 overflow-y-auto">
      <Navbar />
      <div className="grid md:grid-cols-2 gap-6 p-8">
        {interesses.map((interesses) => (
          <div key={interesses.id} className="bg-[#f5e8c7] text-[#4D2C1C] rounded-2xl shadow-md p-4 flex flex-col md:flex-row items-start">
            {interesses.imagURL && (
              <img
                src={interesses.imagURL}
                alt={interesses.nome}
                className="w-28 h-40 object-cover rounded-md mr-4 mb-4 md:mb-0"
              />
            )}
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">{interesses.nome}</h2>
              <p className="text-sm mb-2">{interesses.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
