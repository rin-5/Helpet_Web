package com.ieselrincon.jvr.Helpet.repository;

import com.ieselrincon.jvr.Helpet.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
