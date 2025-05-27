package com.poo.mo_bo.entities;

import jakarta.persistence.*;

@Table(name = "filmes")
@Entity
public class Filme extends Colletion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String diretor;
}
