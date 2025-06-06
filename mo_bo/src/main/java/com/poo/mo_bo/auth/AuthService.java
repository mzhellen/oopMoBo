package com.poo.mo_bo.auth;

import com.poo.mo_bo.entities.User;
import com.poo.mo_bo.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String login(UserLoginDTO request) throws Exception {
        Optional<User> optionalUser = userRepository.findAll().stream()
                .filter(user -> user.getEmail().equals(request.email()))
                .findFirst();

        if (optionalUser.isEmpty()) {
            throw new Exception("Usuário não encontrado");
        }

        User user = optionalUser.get();

        if (!encoder.matches(request.senha(), user.getSenha())) {
            throw new Exception("Senha incorreta");
        }

        String hash = gerarMd5(user.getEmail() + System.currentTimeMillis());
        user.setHash(hash);
        userRepository.save(user);

        return hash;
    }

    public void logout(String hash) throws Exception {
        Optional<User> optionalUser = userRepository.findAll().stream()
                .filter(user -> hash.equals(user.getHash()))
                .findFirst();

        if (optionalUser.isEmpty()) {
            throw new Exception("Sessão não encontrada");
        }

        User user = optionalUser.get();
        user.setHash(null);
        userRepository.save(user);
    }

    public boolean isValid(String hash) {
        return userRepository.findAll().stream()
                .anyMatch(user -> hash.equals(user.getHash()));
    }

    private String gerarMd5(String input) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] digest = md.digest(input.getBytes());
        StringBuilder sb = new StringBuilder();

        for (byte b : digest) {
            sb.append(String.format("%02x", b));
        }

        return sb.toString();
    }
}