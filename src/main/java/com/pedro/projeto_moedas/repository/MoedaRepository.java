package com.pedro.projeto_moedas.repository;

import com.pedro.projeto_moedas.model.Moeda;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoedaRepository extends MongoRepository<Moeda, String> {
}
