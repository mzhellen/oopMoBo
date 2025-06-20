package com.poo.mo_bo.dtos;

import java.util.Date;

public record BookResponseDTO(
        Long id,
        String nome,
        String genero,
        String descricao,
        Date ano_lancamento,
        Boolean favorito,
        int ranking,
        String resenha,
        String imagURL,
        Long user_id,
        String autor,
        Integer quantidade_paginas,
        Date data_inic,
        Date data_final) {
}
