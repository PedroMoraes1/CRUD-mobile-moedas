package com.pedro.projeto_moedas.repository;

import com.pedro.projeto_moedas.model.Moeda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoedaRepository extends JpaRepository<Moeda, Long> {
}
