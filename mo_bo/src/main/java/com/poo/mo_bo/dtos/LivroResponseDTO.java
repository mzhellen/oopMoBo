package com.poo.mo_bo.dtos;

public record LivroResponseDTO(
        Long id,
        String nome,
        String genero,
        String autor,
        String descricao,
        Integer ano_lancamento,
        Integer quantidade_paginas) {
}
