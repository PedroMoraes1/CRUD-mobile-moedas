package com.pedro.projeto_moedas.controller;

import com.pedro.projeto_moedas.model.Moeda;
import com.pedro.projeto_moedas.repository.MoedaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/moedas")
@CrossOrigin(origins = "*")
public class MoedaController {

    @Autowired
    private MoedaRepository moedaRepository;

    // GET todas as moedas
    @GetMapping
    public List<Moeda> listarTodas() {
        return moedaRepository.findAll();
    }

    // GET moeda por ID
    @GetMapping("/{id}")
    public ResponseEntity<Moeda> buscarPorId(@PathVariable String id) {
        Optional<Moeda> moeda = moedaRepository.findById(id);
        return moeda.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // POST nova moeda
    @PostMapping
    public Moeda adicionar(@RequestBody Moeda moeda) {
        return moedaRepository.save(moeda);
    }

    // PUT atualizar moeda
    @PutMapping("/{id}")
    public ResponseEntity<Moeda> atualizar(@PathVariable String id, @RequestBody Moeda novaMoeda) {
        return moedaRepository.findById(id)
                .map(moeda -> {
                    moeda.setNome(novaMoeda.getNome());
                    moeda.setPais(novaMoeda.getPais());
                    moeda.setAno(novaMoeda.getAno());
                    moeda.setImagemUrl(novaMoeda.getImagemUrl());
                    moeda.setPreco(novaMoeda.getPreco());
                    return ResponseEntity.ok(moedaRepository.save(moeda));
                }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE moeda
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable String id) {
        if (moedaRepository.existsById(id)) {
            moedaRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
