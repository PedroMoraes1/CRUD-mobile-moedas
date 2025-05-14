package com.pedro.projeto_moedas.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "moedas")
public class Moeda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String pais;
    private int ano;

    @Column(name = "imagem_url") // mapeia corretamente para o campo do banco
    private String imagemUrl;

    @Column(name = "preco")
    private BigDecimal preco;

    // Construtor vazio
    public Moeda() {
    }

    // Construtor com todos os campos
    public Moeda(Long id, String nome, String pais, int ano, String imagemUrl, BigDecimal preco) {
        this.id = id;
        this.nome = nome;
        this.pais = pais;
        this.ano = ano;
        this.imagemUrl = imagemUrl;
        this.preco = preco;
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

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }
}
