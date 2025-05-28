package com.poo.mo_bo.dtos;

import com.poo.mo_bo.entities.User;
import com.poo.mo_bo.mappers.UserMapper;

import java.util.Date;

public record UserResponseDTO(
        Long id,
        String nome,
        String email,
        Date aniv){}


