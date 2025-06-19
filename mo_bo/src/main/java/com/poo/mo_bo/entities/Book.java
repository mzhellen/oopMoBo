package com.poo.mo_bo.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "books")
@PrimaryKeyJoinColumn(name = "bookId")
public class Book extends Collection {
    private String autor;
    private int quantPag;
    private Date dataInic;
    private Date dataFinal;


    public Book() {}

    public Book(Long id, String nome, String genero, String descricao, Date ano_lancamento, Boolean favorito, int ranking, String resenha, String imagURL, User user, Long id1, String autor, int quantPag, Date dataInic, Date dataFinal) {
        super(id, nome, genero, descricao, ano_lancamento, favorito, ranking, resenha, imagURL, user);
        this.autor = autor;
        this.quantPag = quantPag;
        this.dataInic = dataInic;
        this.dataFinal = dataFinal;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getQuantPag() {
        return quantPag;
    }

    public void setQuantPag(int quantPag) {
        this.quantPag = quantPag;
    }

    public Date getDataInic() {
        return dataInic;
    }

    public void setDataInic(Date dataInic) {
        this.dataInic = dataInic;
    }

    public Date getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(Date dataFinal) {
        this.dataFinal = dataFinal;
    }

}
