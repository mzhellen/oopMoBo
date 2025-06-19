package com.poo.mo_bo.dtos;

import java.util.Date;

public record BookCreateDTO(
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
        Integer quantidade_paginas) {
}