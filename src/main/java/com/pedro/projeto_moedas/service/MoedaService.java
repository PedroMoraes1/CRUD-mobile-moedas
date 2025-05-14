package com.pedro.projeto_moedas.service;

import com.pedro.projeto_moedas.model.Moeda;
import com.pedro.projeto_moedas.repository.MoedaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MoedaService {

    private final MoedaRepository repository;

    public MoedaService(MoedaRepository repository) {
        this.repository = repository;
    }

    public List<Moeda> listar() {
        return repository.findAll();
    }

    public Optional<Moeda> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Moeda salvar(Moeda moeda) {
        return repository.save(moeda);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public Moeda atualizar(Long id, Moeda novaMoeda) {
        return repository.findById(id).map(m -> {
            m.setNome(novaMoeda.getNome());
            m.setPais(novaMoeda.getPais());
            m.setAno(novaMoeda.getAno());
            m.setImagemUrl(novaMoeda.getImagemUrl());
            m.setPreco(novaMoeda.getPreco()); // Atualização do campo preco
            return repository.save(m);
        }).orElseThrow(() -> new RuntimeException("Moeda não encontrada"));
    }
}
