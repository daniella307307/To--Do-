package com.example.Todo.app.controller;

import com.example.Todo.app.model.Task;
import com.example.Todo.app.model.User;
import com.example.Todo.app.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getAllTasks();
    }
    @GetMapping("/{id}")
    public Optional<Task> getTask(@PathVariable long id) {
        return taskService.getTaskById(id);
    }
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }
    @PutMapping("{id}")
    public Task updateTask(@PathVariable long id, @RequestBody Task task) {
        taskService.updateTask(id, task);
        return task;
    }

    @DeleteMapping("{id}")
    public String deleteTask(@PathVariable long id) {
        taskService.deleteTask(id);
        return "Task deleted Successfully";
    }
    @GetMapping("/task/user")
    public User getUserForTask(@RequestParam Long taskId) {
        Optional<User> user = taskService.getUserForTask(taskId);
        return user.orElse(null);  // Return null if user not found
    }
}
