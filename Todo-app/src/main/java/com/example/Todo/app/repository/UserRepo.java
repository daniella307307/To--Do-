package com.example.Todo.app.repository;

import com.example.Todo.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    @Override
    List<User> findAllById(Iterable<Long> longs);
    List<User> findByUsername(String username);
    List<User> findByEmail(String email);
}
