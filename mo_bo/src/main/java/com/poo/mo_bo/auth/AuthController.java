package com.poo.mo_bo.auth;

import com.poo.mo_bo.dtos.UserCreateDTO;
import com.poo.mo_bo.entities.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/poo/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginDTO request) {
        try {
            String hash = authService.login(request);
            return ResponseEntity.ok(hash); // Front armazena essa hash
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String hash) {
        try {
            authService.logout(hash);
            return ResponseEntity.ok("Logout realizado");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/register") // Endpoint de registro
    public ResponseEntity<String> registerUser(@RequestBody UserCreateDTO request) { // Use UserCreateDTO aqui
        try {
            User registeredUser = authService.register(request);
            return ResponseEntity.ok("Usuário " + registeredUser.getEmail() + " cadastrado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao cadastrar usuário: " + e.getMessage());
        }
    }
}
