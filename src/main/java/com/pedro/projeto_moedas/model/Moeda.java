package com.pedro.projeto_moedas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document(collection = "moedas")
public class Moeda {

    @Id
    private String id; // MongoDB usa String como ID (ObjectId em formato de string)

    private String nome;
    private String pais;
    private int ano;
    private String imagemUrl;
    private BigDecimal preco;

    public Moeda() {
    }

    public Moeda(String id, String nome, String pais, int ano, String imagemUrl, BigDecimal preco) {
        this.id = id;
        this.nome = nome;
        this.pais = pais;
        this.ano = ano;
        this.imagemUrl = imagemUrl;
        this.preco = preco;
    }

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }
}
