package com.poo.mo_bo.dtos;

import java.util.Date;

public record UserCreateDTO (
        String nome,
        String email,
        String senha,
        Date aniv){}
