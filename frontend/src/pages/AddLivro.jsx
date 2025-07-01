import axios from "axios";
import { useEffect, useState } from "react";
import AddB from "../components/AddB";
import api from "../controllers/api";
import AddBM from "../components/AddBM";
import { Navbar } from "../components/Navbar";

export default function AddLivro(){
    const [books, setBooks] = useState([]);
    const [bookname, setBookname] = useState('');
    const [showbutton, setShowButton] = useState(false);
    const [userid, setUserId] = useState();


    // conexão com a api tmdb para acessar um banco de livro
    const getBooks = () => {
        if(bookname != ''){
            axios({
            method: 'get',
            url: 'https://www.googleapis.com/books/v1/volumes',
            params: {
                q: bookname,
                langRestric: 'pt'
            }
            }).then (response => {
                if (!response.data.items || response.data.items.length === 0){
                    setShowButton(true);
                    console.log('deu em nada', response.data);
                }else{
                    setBooks(response.data.items); 
                    setShowButton(false);
                    console.log('deu certo', response.data.items);
                }
            });
        }else{
            setShowButton(true);
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
            <Navbar></Navbar>
            <div className="flex flex-col items-center gap-4 py-6 ">
                <input
                    type="text"
                    value={bookname}
                    onChange={(e) => setBookname(e.target.value)}
                    placeholder="Digite o nome do livro"
                    className="w-72 px-4 py-2 border border-b-red-950 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b67c6a]"
                />
                <button
                    type="button"
                    onClick={getBooks}
                    className="w-44 h-8 bg-[#f5e8c7] text-[#4D2C1C] rounded-lg hover:bg-[#b67c6a]  hover:text-[#f5e8c7] transition-colors"
                >Pesquisar
                </button>
            </div>
            <div>
                { showbutton ? (
                    <div className="flex items-center gap-4 py-6 bg-[#f5e8c7] text-[#4D2C1C] rounded-lg p-8">
                        <div>
                            <p>
                                Livro não encontrado. Adicione Manualmente: 
                            </p>
                        </div>
                        <div>
                            <AddBM user_id={userid}/>
                        </div>
                    </div>
                    
                ) : 
                (books.map((book) => 
                
                    <div key={book.id}>
                        <div className="bg-[#4D2C1C] p-1"> 
                           <AddB book={book} user_id={userid}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}