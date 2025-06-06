package com.poo.mo_bo.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private Date aniv;
    private String hash;

    public User(){}

    public User(Long id, String nome, String email, String senha, Date aniv) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.aniv = aniv;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome; }

    public void setNome(String nome) {
        this.nome = nome; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Date getAniv() {
        return aniv;
    }

    public void setAniv(Date aniv) {
        this.aniv = aniv;
    }

    public String getHash() {return hash; }
    public void setHash(String hash) { this.hash = hash; }
}