package com.poo.mo_bo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "livro")
public class Livro extends Conteudo{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
