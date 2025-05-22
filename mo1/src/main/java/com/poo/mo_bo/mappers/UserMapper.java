package com.poo.mo_bo.mappers;

import com.poo.mo_bo.dtos.UserCreateDTO;
import com.poo.mo_bo.dtos.UserResponseDTO;
import com.poo.mo_bo.entities.User;

public class UserMapper {

    //Converter de UserCreateDTO para User
    public static User toEntity(UserCreateDTO userDTO) {
        User user = new User();
        user.setNome(userDTO.nome());
        user.setEmail(userDTO.email());
        user.setSenha(userDTO.senha());
        return user;
    }

    //Converter de User para UserCreateDTO
    public static UserResponseDTO toDTO(User user) {
        UserResponseDTO userResponseDTO = new UserResponseDTO(
                user.getId(),
                user.getNome(),
                user.getEmail());
        return userResponseDTO;
    }
}
