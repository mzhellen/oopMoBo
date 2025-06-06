package com.poo.mo_bo.dtos;

import java.util.Date;

public record FilmeUpdateDTO(
        Long id,
        String nome,
        String genero,
        String diretor,
        String descricao,
        Integer duracao,
        Date ano_lancamento
) {
}
