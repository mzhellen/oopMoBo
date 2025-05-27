package com.poo.mo_bo.controllers;

import com.poo.mo_bo.dtos.UserCreateDTO;
import com.poo.mo_bo.dtos.UserResponseDTO;
import com.poo.mo_bo.dtos.UserUpdateDTO;
import com.poo.mo_bo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/poo/users")
public class UserController {
    @Autowired
    private UserService userService;

    // create user
    @PostMapping
    public ResponseEntity<UserResponseDTO> create(@RequestBody UserCreateDTO userCreateDTO){
        UserResponseDTO userResponseDTO = userService.create(userCreateDTO);
        return new ResponseEntity<>(userResponseDTO, HttpStatus.CREATED);
    }

    // get user pelo id
    @GetMapping("/{id_user}")
    public ResponseEntity<Object> show(@PathVariable long id_user){
        try {
            return new ResponseEntity<>(userService.show(id_user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    // atualizar user
    @PatchMapping("/{id_user}")//adicionei o "("/{id_user}")"
    public ResponseEntity<Object> update(@PathVariable Long id_user, //linha adicionada
                                         @RequestBody UserUpdateDTO userUpdateDTO){
        System.out.println("ID recebido: " + id_user);
        try {
            return new ResponseEntity<>(userService.update(id_user, userUpdateDTO), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    // deletar user pelo id
    @DeleteMapping("/{id_user}") // alterei para @DeleteMapping
    public ResponseEntity<String> delete(@PathVariable long id_user){
        try {
            userService.delete(id_user);
            return new ResponseEntity<>("Usuário deletado com sucesso.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}


