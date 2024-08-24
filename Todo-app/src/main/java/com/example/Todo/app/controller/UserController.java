package com.example.Todo.app.controller;

import com.example.Todo.app.model.User;
import com.example.Todo.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")  // Define the base URL for all endpoints
public class UserController {

    @Autowired
    private UserService userService;

    // Login endpoint
    @GetMapping("/login")
    public String login(@RequestParam long id, @RequestParam String password) {
        // Retrieve the user by ID
        Optional<User> userOptional = userService.getUserById(id);

        // Check if user exists and if the password matches
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return "Login successful!";
            } else {
                return "Invalid password.";
            }
        } else {
            return "User not found.";
        }
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try{
            userService.saveUser(user);
            return new ResponseEntity<>("User saved Successfully!", HttpStatus.CREATED);
        }catch (Exception e){
            return  new ResponseEntity<>("Failed to save the user:  "+ e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

