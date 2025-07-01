import { useEffect, useState } from "react"
import api from '../controllers/api';
import { ToastContainer, toast, Bounce } from 'react-toastify';



function AddF( {movie, user_id}){
    console.log("Aquiiiiiiiii o user id :)", user_id)
    const [telinha, setTelinha] = useState(false)
    const [savemovie, setSaveMovie] = useState({
        
        nome:`${movie.title}`,
        genero:'',
        descricao:'',
        ano_lancamento:`${movie.release_date}`,
        favorito: false,
        ranking: 0,
        resenha:'',
        imagURL:`http://image.tmdb.org/t/p/original${movie.poster_path}`,
        user_id: `${user_id}`,
        diretor: '',
        duracao: 0,
        data_assist: ''

    });

    // funçõe pra salvar o filme no banco
    async function saveMovie(event){

        event.preventDefault();
        console.log("SAVE MOVIE:", savemovie)

        await api.post('/poo/collections/create/movie',savemovie)
        .then(function(response){
            console.log('Filme adicionado com sucesso!', response.data);
            toast.success('Filme adicionado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            setTelinha(false);
        }).catch(function(error){
            console.log('Filme não foi adicionado!', error);
            toast.error('Filme não foi adicionado, cancele e tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
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
                    <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-96 h-60 rounded-md mb-4 md:mb-0 md:mr-6"/>
                </div>
                <div>
                    <h1 className="font-bold">{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => setTelinha(true)}
                        className="bg-[#4D2C1C] text-[#f5e8c7] rounded-lg w-28 h-10 hover:bg-[#eece9d]  hover:text-[#4D2C1C] transition-colors "
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
                                        name="nome"
                                        type="text"
                                        defaultValue={movie.title}
                                        className="border border-gray-300 rounded-md p-2"
                                        required
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
                                        defaultValue={movie.release_date}
                                        className="border border-gray-300 rounded-md p-2"
                                    />
                                </div>

                                <div>
                                    <label className="pr-2">Favorito</label>
                                    <input
                                        name="favorito"
                                        type="checkbox"
                                        checked={saveMovie.favorito}
                                        onChange={handleChange}
                                        className="ml-2"
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
                                        defaultValue={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
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
                                    className="bg-[#b67c6a] text-white px-4 py-2 rounded-md hover:bg-[#a46b5c]"
                                    >
                                    Salvar
                                    </button>
                                </div>
                                </form>
                            </div>
                            </div>
                        )}
                 <ToastContainer />
            </div>
    )
}
export default AddF