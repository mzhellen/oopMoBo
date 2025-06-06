package com.poo.mo_bo.dtos;

import java.util.Date;

public record LivroCreateDTO(
        String nome,
        String genero,
        String autor,
        String descricao,
        Date ano_lancamento,
        Integer quantidade_paginas) {
}
