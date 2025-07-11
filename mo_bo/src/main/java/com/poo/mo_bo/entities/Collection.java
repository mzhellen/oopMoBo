package com.poo.mo_bo.entities;

import jakarta.persistence.*;

import java.util.Date;

@Inheritance(strategy = InheritanceType.JOINED)
@Entity
@Table(name = "collections")
public class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String genero;
    private String descricao;
    private Date ano_lancamento;
    private Boolean favorito;
    private int ranking;
    private String resenha;
    private String imagURL;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    public Collection(){}

    public Collection(Long id, String nome, String genero, String descricao, Date ano_lancamento, Boolean favorito, int ranking, String resenha, String imagURL, User user){
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.descricao = descricao;
        this.ano_lancamento = ano_lancamento;
        this.favorito = favorito;
        this.ranking = ranking;
        this.resenha = resenha;
        this.imagURL = imagURL;
        this.user = user;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImagURL() {
        return imagURL;
    }

    public void setImagURL(String imagURL) {
        this.imagURL = imagURL;
    }

    public String getResenha() {
        return resenha;
    }

    public void setResenha(String resenha) {
        this.resenha = resenha;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    public Boolean getFavorito() {
        return favorito;
    }

    public void setFavorito(Boolean favorito) {
        this.favorito = favorito;
    }

    public Date getAno_lancamento() {
        return ano_lancamento;
    }

    public void setAno_lancamento(Date ano_lancamento) {
        this.ano_lancamento = ano_lancamento;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
