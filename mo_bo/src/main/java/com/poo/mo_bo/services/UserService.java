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

    // metodo para criação do user
    public UserResponseDTO create(UserCreateDTO userCreateDTO){
        User user = UserMapper.toEntity(userCreateDTO);
        User userResponse = userRepository.save(user);
        return UserMapper.toDTO(userResponse);
    }

    // metodo para acessar o user
    public UserResponseDTO show (long id){
        User user = userRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado.")
        );
        return UserMapper.toDTO(user);
    }



    //metodo para atualizar o user
    public UserResponseDTO update(Long id_user, UserUpdateDTO dto) {
        User user = userRepository.findById(id_user)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        if (dto.nome() != null) {
            user.setNome(dto.nome());
        }
        if (dto.email() != null) {
            user.setEmail(dto.email());
        }
        if (dto.senha() != null) {
            user.setSenha(dto.senha());
        }
        if (dto.aniv() != null) {
            user.setAniv(dto.aniv());
        }

        User updatedUser = userRepository.save(user);
        return UserMapper.toDTO(updatedUser);
    }

    // metodo para deletar o user
    public void delete(long id){
        User user = userRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado.")
        );
        userRepository.delete(user);
    }
}
