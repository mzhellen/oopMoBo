import axios from "axios";
import { useEffect, useState } from "react";
import AddF from "../components/AddF";
import AddFM from "../components/AddFM";
import api from "../controllers/api";
import { Navbar } from '../components/Navbar';

export default function AddFilme(){
    const [movies, setMovies] = useState([]);
    const [moviename, setMoviename] = useState('');
    const [showbutton, setShowButton] = useState(false);
    const [userid, setUserId] = useState();

    // conexão com a api tmdb para acessar um banco de filmes
    const getMovies = () => {
        if(moviename != ''){
            axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                query: moviename,
                api_key: '8781194f9a9c9d9d3f40de28e94a72d1',
                language: 'pt-BR'
            }
            }).then (response => {
                if (response.data.results.length == 0){
                    setShowButton(true);
                    console.log('deu em nada', response.data);
                }else{
                    setMovies(response.data.results);
                    setShowButton(false);
                    console.log('deu certo', response.data.results);
                }
            });
        }else{
            setShowButton(true)
        }
    }

    // função pra pegar o id assim que abre a página
    useEffect(() => {

        const getId = async () => {
        await api.get('/poo/users/profile')
        .then(function(response){
            setUserId(response.data.id);
            console.log('Id encontrado', userid);
        }).catch(function(error){
            console.log('Id não encontrado', error);
        })
        }

        getId()

    },[userid]) 

    return (
        <div className="bg-[#4D2C1C] flex flex-col items-center gap-4 py-96 w-screen h-screen">  {/*é dado um input que solicita o nome do filme a ser adicionado, esse nome é armazenado na const 'moviename' e ao apertar o botão é chamada a função 'getMovie' que faz a busca na api e armazena seu resultado no array 'movies'*/}
            <div className="flex flex-col items-center gap-4 py-6">
                <Navbar/>
                <input
                    type="text"
                    value={moviename}
                    onChange={(e) => setMoviename(e.target.value)}
                    placeholder="Digite o nome do filme"
                    className="w-72 px-4 py-2 border border-b-red-950 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b67c6a]"
                />
                <button
                    type="button"
                    onClick={getMovies}
                    className="w-44 h-8 bg-[#f5e8c7] text-[#4D2C1C] rounded-lg hover:bg-[#b67c6a]  hover:text-[#f5e8c7] transition-colors"
                >Pesquisar
                </button>
            </div>
            {/*o array 'movies' é percorrido trazendo uma listagem de resultados e uma porta para um componente 'Add' que recebe os dados referente ao filme escolhido para preencher alguns campos, acesse Add.jsx em components para mais informações*/}
            <div>
                { showbutton ? (
                    <div className="flex items-center gap-4 py-6 bg-[#f5e8c7] text-[#4D2C1C] rounded-lg p-8">
                    <div>
                        <p>
                            Filme não encontrado. Adicione Manualmente: 
                        </p>
                    </div>
                    <div>
                        <AddFM user_id={userid}/>
                    </div>
                    </div>
                ) : 
                (movies.map((movie) => 
                
                    <div key={movie.id}>
                        <div className="bg-[#4D2C1C] p-1"> 
                           <AddF movie={movie} user_id={userid}/>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
