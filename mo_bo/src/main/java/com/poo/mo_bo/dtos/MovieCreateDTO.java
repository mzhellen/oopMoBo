package com.poo.mo_bo.dtos;

import java.util.Date;

public record MovieCreateDTO(
        String nome,
        String genero,
        String descricao,
        Date ano_lancamento,
        Boolean favorito,
        int ranking,
        String resenha,
        String imagURL,
        Long user_id,
        String diretor,
        int duracao,
        Date data_assist ) {
}
