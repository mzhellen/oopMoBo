package com.poo.mo_bo.services;

import com.poo.mo_bo.dtos.UserCreateDTO;
import com.poo.mo_bo.dtos.UserResponseDTO;
import com.poo.mo_bo.dtos.UserUpdateDTO;
import com.poo.mo_bo.entities.User;
import com.poo.mo_bo.mappers.UserMapper;
import com.poo.mo_bo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // metodo para criação do user
    public UserResponseDTO create(UserCreateDTO userCreateDTO){
        User user = UserMapper.toEntity(userCreateDTO);
        User userResponse = userRepository.save(user);
        return UserMapper.toDTO(userResponse);
    }

    // metodo para acessar o user
    public UserResponseDTO show (Long id){
        User user = userRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado")
        );
        return UserMapper.toDTO(user);
    }

    // metodo para deletar o user
    public void delete(long id){
        User user = userRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado")
        );
        userRepository.delete(user);
    }

    public UserResponseDTO getLoggedInUserProfile() {
        // Obtém o email (ou username) do usuário autenticado do Spring Security Context
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        User user = userRepository.findByEmail(userEmail);

        if (user == null) {
            throw new UsernameNotFoundException("Usuário logado não encontrado no banco de dados.");
        }

        // Mapeia a entidade User para o DTO de resposta
        return new UserResponseDTO(user.getId(), user.getNome(), user.getEmail(), user.getAniv());
    }

    public UserResponseDTO update(String userEmail, UserUpdateDTO updateDTO) throws Exception {
        User user = userRepository.findByEmail(userEmail);
        if (user == null) {
            throw new Exception("Usuário logado não encontrado para atualização.");
        }
        //Atualização dos dados
        if (updateDTO.nome() != null && !updateDTO.nome().isEmpty()) {
            user.setNome(updateDTO.nome());
        }
        if (updateDTO.email() != null && !updateDTO.email().isEmpty()) {
            user.setEmail(updateDTO.email());
        }
        if (updateDTO.aniv() != null) {
            user.setAniv(updateDTO.aniv());
        }

        // atualização de senha
        if (updateDTO.novaSenha() != null && !updateDTO.novaSenha().isEmpty()) {
            if (updateDTO.senhaAtual() == null || updateDTO.senhaAtual().isEmpty()) {
                throw new IllegalArgumentException("A senha atual é obrigatória para redefinir a senha.");
            }
            if (!passwordEncoder.matches(updateDTO.senhaAtual(), user.getSenha())) {
                throw new IllegalArgumentException("Senha atual incorreta.");
            }
            user.setSenha(passwordEncoder.encode(updateDTO.novaSenha()));
        }
        User updatedUser = userRepository.save(user);
        return new UserResponseDTO(
                updatedUser.getId(),
                updatedUser.getNome(),
                updatedUser.getEmail(),
                updatedUser.getAniv());
    }
}