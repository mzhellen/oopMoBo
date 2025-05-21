package com.poo.mo_bo.dtos;

public record UserUpdateDTO(
        Long id,
        String nome,
        String email,
        String senha ){}
