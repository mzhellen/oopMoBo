package com.poo.mo_bo.mappers;

import com.poo.mo_bo.dtos.MovieCreateDTO;
import com.poo.mo_bo.dtos.MovieResponseDTO;
import com.poo.mo_bo.entities.Movie;
import com.poo.mo_bo.entities.User;

public class MovieMapper {

    public static Movie toEntity(MovieCreateDTO movieCreateDTO, User user) {
        Movie movie = new Movie();
        movie.setNome(movieCreateDTO.nome());
        movie.setGenero(movieCreateDTO.genero());
        movie.setDescricao(movieCreateDTO.descricao());
        movie.setAno_lancamento(movieCreateDTO.ano_lancamento());
        movie.setFavorito(movieCreateDTO.favorito());
        movie.setRanking(movieCreateDTO.ranking());
        movie.setResenha(movieCreateDTO.resenha());
        movie.setImagURL(movieCreateDTO.imagURL());
        movie.setUser(user);
        movie.setDiretor(movieCreateDTO.diretor());
        movie.setDuracao(movieCreateDTO.duracao());
        movie.setData_assist(movieCreateDTO.data_assist());
        return movie;
    }

    public static MovieResponseDTO toDTO(Movie movie) {
        return new MovieResponseDTO(
                movie.getId(),
                movie.getNome(),
                movie.getGenero(),
                movie.getDescricao(),
                movie.getAno_lancamento(),
                movie.getFavorito(),
                movie.getRanking(),
                movie.getResenha(),
                movie.getImagURL(),
                movie.getUser().getId(),
                movie.getDiretor(),
                movie.getDuracao(),
                movie.getData_assist()
        );
    }
}