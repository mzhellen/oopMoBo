package com.poo.mo_bo.controllers;

import com.poo.mo_bo.dtos.*;
import com.poo.mo_bo.entities.Collection;
import com.poo.mo_bo.entities.Movie;
import com.poo.mo_bo.repository.CollectionRepository;
import com.poo.mo_bo.services.BookService;
import com.poo.mo_bo.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/poo/collections")
public class CollectionController {
    @Autowired
    private MovieService movieService;
    @Autowired
    private CollectionRepository collectionRepository;
    @Autowired
    private BookService bookService;

    // função para adicionar um filme
    @PostMapping("/create/movie")
    public ResponseEntity<MovieResponseDTO> createMovie(@RequestBody MovieCreateDTO movieCreateDTO){
        MovieResponseDTO movieResponseDTO = movieService.create(movieCreateDTO);
        return new ResponseEntity<>(movieResponseDTO, HttpStatus.CREATED);
    }
    // função para adicionar um livro
    @PostMapping("/create/book")
    public ResponseEntity<BookResponseDTO> createBook(@RequestBody BookCreateDTO bookCreateDTO){
        System.out.println("Chegou aqui :)"+bookCreateDTO);
        BookResponseDTO bookResponseDTO = bookService.create(bookCreateDTO);
        return new ResponseEntity<>(bookResponseDTO, HttpStatus.CREATED);
    }
    // função para listagem de filme/livro
    @GetMapping
    public ResponseEntity<List<Collection>> listAll(){
        return new ResponseEntity<>(collectionRepository.findAll(), HttpStatus.OK);
    }

    // função para pegar um filme/livro pelo id
    @GetMapping("/{id_colletion}")
    public ResponseEntity<Collection> show(@PathVariable Long id_colletion){
        Collection collection = collectionRepository.findById(id_colletion).orElseThrow(
                () -> new RuntimeException("Livro ou filme não encontrado!")
        );
        if(collection instanceof Movie movie){
            try {
                return new ResponseEntity(movieService.show(id_colletion), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
            }
        }else{
            try {
                return new ResponseEntity(bookService.show(id_colletion), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
            }
        }
    }

    // função para atualizar dados de um filme
    @PatchMapping("/update/movie")
    public ResponseEntity<MovieResponseDTO> updateMovie(@RequestBody MovieUpdateDTO movieUpdateDTO){
        try{
            return new ResponseEntity<>(movieService.update(movieUpdateDTO), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    // função para atualizar dados de um livro
    @PatchMapping("/update/book")
    public ResponseEntity<BookResponseDTO> updateBook(@RequestBody BookUpdateDTO bookUpdateDTO){
        try{
            return new ResponseEntity<>(bookService.update(bookUpdateDTO), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    // função para deletar filme/livro pelo id
    @DeleteMapping("/{id_colletion}")
    public ResponseEntity<String> delete(@PathVariable Long id_colletion){
        Collection collection = collectionRepository.findById(id_colletion).orElseThrow(
                () -> new RuntimeException("Livro ou filme não encontrado!")
        );
        if(collection instanceof Movie movie){
            try {
                movieService.delete(id_colletion);
                return new ResponseEntity<>("Filme deletado com sucesso!", HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>("Não foi possível deletar o filme!", HttpStatus.NOT_FOUND);
            }
        }else{
            try {
                bookService.delete(id_colletion);
                return new ResponseEntity<>("Livro deletado com sucesso!", HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>("Não foi possível deletar o livro!", HttpStatus.NOT_FOUND);
            }
        }
    }
}
