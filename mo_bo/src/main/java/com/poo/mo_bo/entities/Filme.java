package com.poo.mo_bo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "filmes")
public class Filme extends Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String diretor;
}
