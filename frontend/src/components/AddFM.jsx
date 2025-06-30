import { useState } from "react"
import api from '../controllers/api';


function AddFM({user_id}) {
    const [telinha, setTelinha] = useState(false)
    const [savemovie, setSaveMovie] = useState({
        
        nome:'',
        genero:'',
        descricao:'',
        ano_lancamento:'',
        favorito: false,
        ranking: 0,
        resenha:'',
        imagURL:'',
        user_id: `${user_id}`,
        diretor: '',
        duracao: 0,
        data_assist: ''

    });

    // funçõe pra salvar o filme no banco
    async function saveMovie(event){

        event.preventDefault();

        await api.post('/poo/collections/create/movie',savemovie)
        .then(function(response){
            console.log('Filme adicionado com sucesso!', response.data);
        }).catch(function(error){
            console.log('Filme não foi adicionado!', error);
        });    
    }
        
    function handleChange(e) {
    const { name, value } = e.target;
    setSaveMovie((prev) => ({ ...prev, [name]: value }));
    }

    return(
            <div>
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

                                <form onSubmit={saveMovie} className="flex flex-col gap-4">
                                <div>
                                    <label className="pr-2">Título:</label>
                                    <input
                                        name="titulo"
                                        type="text"
                                        value={saveMovie.title}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Gênero</label>
                                    <input      
                                        name="genero"
                                        type="text"
                                        value={saveMovie.genero}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <label className="pr-2">Descrição:</label>
                                    <textarea
                                        name="descricao"
                                        value={saveMovie.descricao}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2 h-28 w-80"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="pr-2">Ano de Lançamento</label>
                                    <input
                                        name="ano_lancamento"
                                        type="date"
                                        value={saveMovie.ano_lancamento}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Favorito</label>
                                    <input
                                        name="favorito"
                                        type="boolean"
                                        checked={saveMovie.favorito}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Ranking</label>
                                    <input
                                        name="ranking"
                                        type="int"
                                        value={saveMovie.ranking}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Resenha</label>
                                    <textarea
                                        name="resenha"
                                        value={saveMovie.resenha}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Imagem URL</label>
                                    <input
                                        name="imagURL"
                                        type="text"
                                        value={saveMovie.imagURL}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Diretor</label>
                                    <input
                                    name="diretor"
                                    type="text"
                                    value={saveMovie.diretor}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Duração (min)</label>
                                    <input
                                    name="duracao"
                                    type="int"
                                    value={saveMovie.duracao}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Data assistido</label>
                                    <input
                                    name="data_assist"
                                    type="date"
                                    value={saveMovie.data_assist}
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
                                    onClick={saveMovie}
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
export default AddFM