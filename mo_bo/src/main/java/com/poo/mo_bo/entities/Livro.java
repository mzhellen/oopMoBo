package com.poo.mo_bo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "livro")
public class Livro extends Conteudo{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantidade_paginas;

    public int getQuantidade_paginas() {
        return quantidade_paginas;
    }

    public void setQuantidade_paginas(int quantidade_paginas) {
        this.quantidade_paginas = quantidade_paginas;
    }

}
