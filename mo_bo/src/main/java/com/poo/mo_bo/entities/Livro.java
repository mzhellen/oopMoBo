package com.poo.mo_bo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "livros")
public class Livro extends Colletion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String autor;

}
