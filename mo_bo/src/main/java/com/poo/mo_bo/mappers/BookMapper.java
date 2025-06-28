package com.poo.mo_bo.mappers;


import com.poo.mo_bo.dtos.BookCreateDTO;
import com.poo.mo_bo.dtos.BookResponseDTO;
import com.poo.mo_bo.entities.Book;
import com.poo.mo_bo.entities.User;

public class BookMapper {

    public static Book toEntity(BookCreateDTO bookCreateDTO, User user){
        Book book = new Book();
        book.setNome(bookCreateDTO.nome());
        book.setGenero(bookCreateDTO.genero());
        book.setDescricao(bookCreateDTO.descricao());
        book.setAno_lancamento(bookCreateDTO.ano_lancamento());
        book.setFavorito(bookCreateDTO.favorito());
        book.setRanking(bookCreateDTO.ranking());
        book.setResenha(bookCreateDTO.resenha());
        book.setImagURL(bookCreateDTO.imagURL());
        book.setUser(user);
        book.setAutor(bookCreateDTO.autor());
        book.setQuant_pag(bookCreateDTO.quantidade_paginas());
        book.setData_inic(bookCreateDTO.data_inic());
        book.setData_final(bookCreateDTO.data_final());

        return book;
    }

    public static BookResponseDTO toDTO(Book book){
        return new BookResponseDTO(
                book.getId(),
                book.getNome(),
                book.getGenero(),
                book.getDescricao(),
                book.getAno_lancamento(),
                book.getFavorito(),
                book.getRanking(),
                book.getResenha(),
                book.getImagURL(),
                book.getUser().getId(),
                book.getAutor(),
                book.getQuant_pag(),
                book.getData_inic(),
                book.getData_final()
        );
    }
}
