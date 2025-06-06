package com.poo.mo_bo.services;

import com.poo.mo_bo.dtos.UserCreateDTO;
import com.poo.mo_bo.dtos.UserResponseDTO;
import com.poo.mo_bo.dtos.UserUpdateDTO;
import com.poo.mo_bo.entities.User;
import com.poo.mo_bo.mappers.UserMapper;
import com.poo.mo_bo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // método para criação do user
    public UserResponseDTO create(UserCreateDTO userCreateDTO){
        User user = UserMapper.toEntity(userCreateDTO);
        User userResponse = userRepository.save(user);
        return UserMapper.toDTO(userResponse);
    }

    // método para acessar o user
    public UserResponseDTO show (long id){
        User user = userRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado")
        );
        return UserMapper.toDTO(user);
    }

    // método para atualizar o user
    public UserResponseDTO update(UserUpdateDTO userUpdateDTO){
        User user = userRepository.findById(userUpdateDTO.id()).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado")
        );
        user.setNome(userUpdateDTO.nome());
        user.setEmail(userUpdateDTO.email());
        user.setSenha(userUpdateDTO.senha());
        user.setAniv(userUpdateDTO.aniv());
        return UserMapper.toDTO(userRepository.save(user));
    }

    // método para deletar o user
    public void delete(long id){
        User user = userRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado")
        );
        userRepository.delete(user);
    }
}