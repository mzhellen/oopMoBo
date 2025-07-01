package com.poo.mo_bo.controllers;

import com.poo.mo_bo.dtos.UserCreateDTO;
import com.poo.mo_bo.dtos.UserResponseDTO;
import com.poo.mo_bo.dtos.UserUpdateDTO;
import com.poo.mo_bo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/poo/users")
public class UserController {
    @Autowired
    private UserService userService;

    // create user
    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> create(@RequestBody UserCreateDTO userCreateDTO){
        UserResponseDTO userResponseDTO = userService.create(userCreateDTO);
        return new ResponseEntity<>(userResponseDTO, HttpStatus.CREATED);
    }

    // get user pelo id
    @GetMapping("/{id_user}")
    public ResponseEntity<Object> show(@PathVariable Long id_user){
        try {
            return new ResponseEntity<>(userService.show(id_user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    // atualizar user
    @PatchMapping("/update")
    public ResponseEntity<Object> update(@RequestBody UserUpdateDTO userUpdateDTO){
        try {
            String loggedInUserEmail = SecurityContextHolder.getContext().getAuthentication().getName();

            UserResponseDTO updatedProfile = userService.update(loggedInUserEmail, userUpdateDTO);
            return new ResponseEntity<>(updatedProfile, HttpStatus.OK);

        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Erro interno ao atualizar perfil: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // deletar user pelo id
    @DeleteMapping("/{id_user}")
    public ResponseEntity<String> delete(@PathVariable Long id_user){
        try {
            userService.delete(id_user);
            return new ResponseEntity<>("Usuário deletado com sucesso.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<UserResponseDTO> getUserProfile() {
        try {
            UserResponseDTO userProfile = userService.getLoggedInUserProfile();
            return ResponseEntity.ok(userProfile);
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}


