import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import api from '../controllers/api';

export default function TelaInicial() {
  const [itens, setItens] = useState([]);
  

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
        setItens(data); 
        console.log('coleção resgatada', data);

        // filtragem de dados
        const filter = data.filter(item => {
          return item.user.id === userId;
        });
        setItens(filter);
        console.log('Coleção filtrada', filter);

      } catch (error) {
        console.error('Erro na hora de pegar sua coleção:', error);
      }
    };
    
    getCollections();
  }, []);

  return (
    <div className="h-screen w-screen bg-[#4D2C1C] px-6 py-20 overflow-y-auto">
      <Navbar />

      <div className="flex flex-col gap-6 p-8">
        {itens.map((item) => (
          <div
            key={item.id}
            className={'flex flex-col md:flex-row items-center p-4 rounded-2xl shadow-md bg-[#f5e8c7]'}
          >
            {item.imagURL && (
              <img
                src={item.imagURL}
                alt={item.titulo}
                className="w-32 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
              />
            )}
            <div className='text-[#4D2C1C]'>
              <h2 className="text-xl font-bold">{item.nome}</h2>
              {item.descricao && <p className="mt-2 text-sm">{item.descricao}</p>}
              <div className="mt-2 text-yellow-500 text-lg">
                {'★'.repeat(item.ranking)}{'☆'.repeat(5 - item.ranking)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
