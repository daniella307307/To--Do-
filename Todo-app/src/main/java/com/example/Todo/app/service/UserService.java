package com.example.Todo.app.service;

import com.example.Todo.app.model.User;
import com.example.Todo.app.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService  {
    @Autowired
    private UserRepo userRepo;

    // Method to get all users
    public List<User> getAll() {
        return userRepo.findAll();  // Return the list of users
    }

    // Method to save a user
    public User saveUser(User user) {
        return userRepo.save(user);  // Return the saved user
    }

    // Method to get a user by ID
    public Optional<User> getUserById(long id) {
        return userRepo.findById(id);  // Return an Optional containing the user if found
    }
    public void deleteUser(User user) {
        userRepo.delete(user);
    }
}
