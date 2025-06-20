package com.poo.mo_bo.services;

import com.poo.mo_bo.dtos.BookCreateDTO;
import com.poo.mo_bo.dtos.BookResponseDTO;
import com.poo.mo_bo.dtos.BookUpdateDTO;
import com.poo.mo_bo.entities.Book;
import com.poo.mo_bo.entities.User;
import com.poo.mo_bo.mappers.BookMapper;
import com.poo.mo_bo.repository.BookRepository;
import com.poo.mo_bo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private UserRepository userRepository;

    public BookResponseDTO create(BookCreateDTO bookCreateDTO){
        User user = userRepository.findById(bookCreateDTO.user_id()).orElseThrow(
                () -> new RuntimeException("Usuário não encontrado! ão será possível adicionar o filme à estante")
        );
        Book book = BookMapper.toEntity(bookCreateDTO, user);
        Book bookResponse = bookRepository.save(book);
        return BookMapper.toDTO(bookResponse);
    }

    public BookResponseDTO show(Long id){
        Book book = bookRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Livro não encontrado!")
                );
                return BookMapper.toDTO(book);
    }

    public List<BookResponseDTO> list(){
        return bookRepository.findAll().stream().map(BookMapper::toDTO).toList();
    }

    public BookResponseDTO update(BookUpdateDTO bookUpdateDTO){
        Book book = bookRepository.findById(bookUpdateDTO.id()).orElseThrow(
                () -> new RuntimeException("Livro não encontrado!")
        );
        book.setNome(bookUpdateDTO.nome());
        book.setGenero(bookUpdateDTO.genero());
        book.setDescricao(bookUpdateDTO.descricao());
        book.setAno_lancamento(bookUpdateDTO.ano_lancamento());
        book.setFavorito(bookUpdateDTO.favorito());
        book.setRanking(bookUpdateDTO.ranking());
        book.setResenha(bookUpdateDTO.resenha());
        book.setImagURL(bookUpdateDTO.imagURL());
        book.setAutor(bookUpdateDTO.autor());
        book.setQuant_pag(bookUpdateDTO.quantidade_paginas());
        book.setData_inic(bookUpdateDTO.data_inic());
        book.setData_final(bookUpdateDTO.data_final());
        return BookMapper.toDTO(bookRepository.save(book));
    }

    public void delete(Long id){
        Book book = bookRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Livro não encontrado para deleção!")
        );
        bookRepository.delete(book);
    }
}
