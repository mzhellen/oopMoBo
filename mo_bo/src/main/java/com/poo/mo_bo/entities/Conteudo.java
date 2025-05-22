package com.poo.mo_bo.entities;

import com.poo.mo_bo.enums.Tipo;
import java.util.Date;

public class Conteudo {
    //atributos
    private String nome;
    private String genero;
    private String autor;
    private String descricao;
    private Date ano_lancamento;
    private Boolean favorito;
    private String resenha;
    private Tipo tipo;
    private int ranking;

    public Conteudo(){}

    public Conteudo(String nome, String genero, String autor, String descricao, Date ano_lancamento, Boolean favorito, String resenha, Tipo tipo, int ranking){
        this.nome = nome;
        this.genero = genero;
        this.autor = autor;
        this.descricao = descricao;
        this.ano_lancamento = ano_lancamento;
        this.favorito = favorito;
        this.resenha = resenha;
        this.tipo = tipo;
        this.ranking = ranking;
    }

    // assinatura dos métodos

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    public String getResenha() {
        return resenha;
    }

    public void setResenha(String resenha) {
        this.resenha = resenha;
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

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
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
}
