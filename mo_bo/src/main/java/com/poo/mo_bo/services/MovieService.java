package com.poo.mo_bo.services;

import com.poo.mo_bo.dtos.MovieCreateDTO;
import com.poo.mo_bo.dtos.MovieResponseDTO;
import com.poo.mo_bo.dtos.MovieUpdateDTO;
import com.poo.mo_bo.entities.Movie;
import com.poo.mo_bo.entities.User;
import com.poo.mo_bo.mappers.MovieMapper;
import com.poo.mo_bo.repository.MovieRepository;
import com.poo.mo_bo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private UserRepository userRepository;

    public MovieResponseDTO create(MovieCreateDTO movieCreateDTO){
        User user = userRepository.findById(movieCreateDTO.user_id()).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado! Não será possível adicionar o filme à estante")
        );
        Movie movie = MovieMapper.toEntity(movieCreateDTO, user);
        Movie movieResponse = movieRepository.save(movie);
        return MovieMapper.toDTO(movieResponse);
    }

    public MovieResponseDTO show(Long id){
        Movie movie = movieRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Filme não encontrado!")
        );
        return MovieMapper.toDTO(movie);
    }

    public List<MovieResponseDTO> list(){
        return movieRepository.findAll().stream().map(MovieMapper::toDTO).toList();
    }

    public MovieResponseDTO update(MovieUpdateDTO movieUpdateDTO){
        Movie movie = movieRepository.findById(movieUpdateDTO.id()).orElseThrow(
                () -> new RuntimeException("Filme não encontrado!")
        );
        movie.setNome(movieUpdateDTO.nome());
        movie.setGenero(movieUpdateDTO.genero());
        movie.setDescricao(movieUpdateDTO.descricao());
        movie.setAno_lancamento(movieUpdateDTO.ano_lancamento());
        movie.setFavorito(movieUpdateDTO.favorito());
        movie.setRanking(movieUpdateDTO.ranking());
        movie.setResenha(movieUpdateDTO.resenha());
        movie.setImagURL(movieUpdateDTO.imagURL());
        movie.setDiretor(movieUpdateDTO.diretor());
        movie.setDuracao(movieUpdateDTO.duracao());
        movie.setData_assist(movieUpdateDTO.data_assist());
        return MovieMapper.toDTO(movieRepository.save(movie));
    }

    public void delete(Long id){
        Movie movie = movieRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Filme não encontrado para deleção!")
        );
        movieRepository.delete(movie);
    }
}
