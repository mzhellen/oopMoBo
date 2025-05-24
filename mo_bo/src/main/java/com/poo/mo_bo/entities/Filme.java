package com.poo.mo_bo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "filmes")
public class Filme extends Colletion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String diretor;
}
