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

    public Optional<Moeda> buscarPorId(String id) { // trocado para String
        return repository.findById(id);
    }

    public Moeda salvar(Moeda moeda) {
        return repository.save(moeda);
    }

    public void deletar(String id) { // trocado para String
        repository.deleteById(id);
    }

    public Moeda atualizar(String id, Moeda novaMoeda) { // trocado para String
        return repository.findById(id).map(m -> {
            m.setNome(novaMoeda.getNome());
            m.setPais(novaMoeda.getPais());
            m.setAno(novaMoeda.getAno());
            m.setImagemUrl(novaMoeda.getImagemUrl());
            m.setPreco(novaMoeda.getPreco());
            return repository.save(m);
        }).orElseThrow(() -> new RuntimeException("Moeda não encontrada"));
    }
}
