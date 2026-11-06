package com.ieselrincon.jvr.Helpet.repository;

import com.ieselrincon.jvr.Helpet.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
}
