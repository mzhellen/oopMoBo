package com.poo.mo_bo.mappers;

import com.poo.mo_bo.dtos.LivroCreateDTO;
import com.poo.mo_bo.entities.Livro;

public class LivroMapper {

    public static Livro toEntity(LivroCreateDTO livroDTO) {
        Livro livro= new Livro();
        livro.setNome(livroDTO.nome());
        livro.setGenero(livroDTO.genero());
        livro.setAutor(livroDTO.autor());
        livro.setDescricao(livroDTO.descricao());
        livro.setAno_lancamento(livroDTO.ano_lancamento());
        livro.setQuantidade_paginas(livroDTO.quantidade_paginas());
        return livro;
    }
}
