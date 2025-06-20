package com.poo.mo_bo.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "books")
@PrimaryKeyJoinColumn(name = "book_id")
public class Book extends Collection {
    private String autor;
    private int quant_pag;
    private Date data_inic;
    private Date data_final;


    public Book() {}

    public Book(Long id, String nome, String genero, String descricao, Date ano_lancamento, Boolean favorito, int ranking, String resenha, String imagURL, User user, String autor, int quant_pag, Date data_inic, Date data_final) {
        super(id, nome, genero, descricao, ano_lancamento, favorito, ranking, resenha, imagURL, user);
        this.autor = autor;
        this.quant_pag = quant_pag;
        this.data_inic = data_inic;
        this.data_final = data_final;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getQuant_pag() {
        return quant_pag;
    }

    public void setQuant_pag(int quant_pag) {
        this.quant_pag = quant_pag;
    }

    public Date getData_inic() {
        return data_inic;
    }

    public void setData_inic(Date data_inic) {
        this.data_inic = data_inic;
    }

    public Date getData_final() {
        return data_final;
    }

    public void setData_final(Date data_final) {
        this.data_final = data_final;
    }

}
