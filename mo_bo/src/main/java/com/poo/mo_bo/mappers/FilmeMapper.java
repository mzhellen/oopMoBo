package com.poo.mo_bo.mappers;

import com.poo.mo_bo.dtos.FilmeCreateDTO;
import com.poo.mo_bo.dtos.FilmeResponseDTO;
import com.poo.mo_bo.entities.Filme;

public class FilmeMapper {

    public static Filme toEntity(FilmeCreateDTO filmeDTO) {
        Filme filme = new Filme();
        filme.setNome(filmeDTO.nome());
        filme.setGenero(filmeDTO.genero());
        filme.setDiretor(filmeDTO.diretor());
        filme.setDescricao(filmeDTO.descricao());
        filme.setDuracao(filmeDTO.duracao());
        filme.setAno_lancamento(filmeDTO.ano_lancamento());
        return filme;
    }

    public static FilmeResponseDTO toDTO(Filme filme) {
        FilmeResponseDTO filmeResponse = new FilmeResponseDTO(
                filme.getId(),
                filme.getNome(),
                filme.getGenero(),
                filme.getDiretor(),
                filme.getDescricao(),
                filme.getDuracao(),
                filme.getAno_lancamento());
        return filmeResponse;
    }
}
