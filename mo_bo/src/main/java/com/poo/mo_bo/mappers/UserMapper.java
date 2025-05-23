package com.poo.mo_bo.mappers;

import com.poo.mo_bo.dtos.UserCreateDTO;
import com.poo.mo_bo.dtos.UserResponseDTO;
import com.poo.mo_bo.entities.User;

public class UserMapper {

    //Converter de UserCreateDTO para User
    public static User toEntity(UserCreateDTO userCreateDTO) {
        User user = new User();
        user.setNome(userCreateDTO.nome());
        user.setEmail(userCreateDTO.email());
        user.setSenha(userCreateDTO.senha());
        user.setAniv(userCreateDTO.aniv());
        return user;
    }

    //Converter de User para UserCreateDTO
    public static UserResponseDTO toDTO(User user) {
        return new UserResponseDTO(
                user.getId(),
                user.getNome(),
                user.getEmail(),
                user.getAniv());
    }
}
