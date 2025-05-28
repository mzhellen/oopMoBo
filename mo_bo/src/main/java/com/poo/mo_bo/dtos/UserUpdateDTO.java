package com.poo.mo_bo.dtos;

import java.util.Date;

public record UserUpdateDTO(
        Long id,
        String nome,
        String email,
        String senha,
        Date aniv ){}
