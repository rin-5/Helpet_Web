package com.ieselrincon.jvr.Helpet.repository;

import com.ieselrincon.jvr.Helpet.entities.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet,Integer> {
}
