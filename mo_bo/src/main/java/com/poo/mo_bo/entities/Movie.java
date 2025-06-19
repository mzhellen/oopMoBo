package com.poo.mo_bo.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "movies")
@PrimaryKeyJoinColumn(name = "movieId")
public class Movie extends Collection {
    private String diretor;
    private int duracao;
    private Date data_assist;

    public Movie(){}

    public Movie(Long id, String nome, String genero, String descricao, Date ano_lancamento, Boolean favorito, int ranking, String resenha, String imagURL, User user, String diretor, int duracao, Date data_assist) {
        super(id, nome, genero, descricao, ano_lancamento, favorito, ranking, resenha, imagURL, user);
        this.diretor = diretor;
        this.duracao = duracao;
        this.data_assist = data_assist;
    }

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public int getDuracao() {
        return duracao;
    }

    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }

    public Date getData_assist() {
        return data_assist;
    }

    public void setData_assist(Date data_assist) {
        this.data_assist = data_assist;
    }
}
