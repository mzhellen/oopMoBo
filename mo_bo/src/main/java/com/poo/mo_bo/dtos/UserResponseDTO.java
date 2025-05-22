package com.poo.mo_bo.dtos;

import java.util.Date;

public record UserResponseDTO(
        Long id,
        String nome,
        String email,
        Date aniv){}
