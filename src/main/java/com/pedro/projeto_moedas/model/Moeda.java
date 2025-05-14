package com.pedro.projeto_moedas.model;

import jakarta.persistence.*;

@Entity
@Table(name = "moedas")
public class Moeda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String pais;
    private int ano;
    private String imagemUrl;

    // Construtor vazio
    public Moeda() {
    }

    // Construtor com todos os campos
    public Moeda(Long id, String nome, String pais, int ano, String imagemUrl) {
        this.id = id;
        this.nome = nome;
        this.pais = pais;
        this.ano = ano;
        this.imagemUrl = imagemUrl;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }
}
