package com.poo.mo_bo.dtos;

public record LivroUpdateDTO(
        String nome,
        String genero,
        String autor,
        String descricao,
        Integer ano_lancamento,
        Integer quantidade_paginas) {
}
