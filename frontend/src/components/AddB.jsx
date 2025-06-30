import { useEffect, useState } from "react"
import api from '../controllers/api';

function AddB( {book, user_id}){
    console.log("Aquiiiiiiiii o user id :)", user_id)
    const [telinha, setTelinha] = useState(false)
    const [savebook, setSaveBook] = useState({
        
        nome:`${book.volumeInfo.title}`,
        genero:`${book.volumeInfo.categories[0]}`,
        descricao:'',
        ano_lancamento:'',
        favorito: false,
        ranking: 0,
        resenha:'',
        imagURL:`${book.volumeInfo.imageLinks.thumbnail}`,
        user_id: `${user_id}`,
        autor: `${book.volumeInfo.authors[0]}`,
        quantidade_paginas: 0,
        data_inic: '',
        data_final: ''

    });

    // funçõe pra salvar o livro no banco
    async function saveBook(event){

        event.preventDefault();
        console.log("SAVE BOOK:", savebook)

        await api.post('/poo/collections/create/book',savebook)
        .then(function(response){
            console.log('Livro adicionado com sucesso!', response.data);
        }).catch(function(error){
            console.log('Livro não foi adicionado!', error);
        });    
    }
        
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        const nvalue = type === 'checkbox' ? checked : value;
        setSaveMovie((prev) => ({ ...prev, [name]: nvalue }));
    }

    return(
            <div className="grid grid-cols-3 place-items-center gap-5 m-10 bg-[#f5e8c7] p-5 rounded-lg">
                <div className="rounded-lg">
                    <img src={`${book.volumeInfo.imageLinks.thumbnail}`} alt={book.volumeInfo.title} className="w-96 h-60 rounded-md mb-4 md:mb-0 md:mr-6"/>
                </div>
                <div>
                    <h1 className="font-bold">{book.volumeInfo.title}</h1>
                    <p>{book.volumeInfo.description}</p>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => setTelinha(true)}
                        className="bg-[#4D2C1C] text-[#f5e8c7] rounded-lg w-28 h-10 hover:bg-[#eece9d]  hover:text-[#4D2C1C] transition-colors"
                        >Adicionar
                    </button>
                </div>
                {telinha && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl shadow-lg p-6 w-10/12 relative">
                                <h2 className="text-lg font-bold mb-4">Preencha os dados</h2>

                                <form onSubmit={saveBook} className="flex flex-col gap-4">
                                <div>
                                    <label className="pr-2">Título:</label>
                                    <input
                                        name="nome"
                                        type="text"
                                        defaultValue={book.volumeInfo.title}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Gênero</label>
                                    <input      
                                        name="genero"
                                        type="text"
                                        defaultValue={book.volumeInfo.categories[0]}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <label className="pr-2">Descrição:</label>
                                    <textarea
                                        name="descricao"
                                        value={saveBook.descricao}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2 h-28 w-80"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="pr-2">Ano de Lançamento</label>
                                    <input
                                        name="ano_lancamento"
                                        type="date"
                                        value={saveBook.ano_lancamento}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Favorito</label>
                                    <input
                                        name="favorito"
                                        type="checkbox"
                                        checked={saveBook.favorito}
                                        onChange={handleChange}
                                        className="ml-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Ranking</label>
                                    <input
                                        name="ranking"
                                        type="int"
                                        value={saveBook.ranking}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Resenha</label>
                                    <textarea
                                        name="resenha"
                                        value={saveBook.resenha}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Imagem URL</label>
                                    <input
                                        name="imagURL"
                                        type="text"
                                        defaultValue={book.volumeInfo.imageLinks.thumbnail}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Autor</label>
                                    <input
                                    name="autor"
                                    type="text"
                                    defaultValue={book.volumeInfo.authors[0]}
                                    className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Quantidade de páginas</label>
                                    <input
                                    name="quantidade_paginas"
                                    type="int"
                                    value={saveBook.quantidade_paginas}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Início da leitura</label>
                                    <input
                                    name="data_inic"
                                    type="date"
                                    value={saveBook.data_inic}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Final da leitura</label>
                                    <input
                                    name="data_f"
                                    type="date"
                                    value={saveBook.data_final}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button
                                    type="button"
                                    onClick={() => setTelinha(false)}
                                    className="text-gray-500 hover:text-red-600"
                                    >
                                    Cancelar
                                    </button>
                                    <button
                                    type="submit"
                                    className="bg-[#b67c6a] text-white px-4 py-2 rounded-md hover:bg-[#a46b5c]"
                                    >
                                    Salvar
                                    </button>
                                </div>
                                </form>
                            </div>
                            </div>
                        )}
            </div>
    )
}
export default AddB