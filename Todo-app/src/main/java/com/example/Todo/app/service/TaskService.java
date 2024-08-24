package com.example.Todo.app.service;

import com.example.Todo.app.model.Task;
import com.example.Todo.app.model.User;
import com.example.Todo.app.repository.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepo taskRepo;
    @Autowired
    private UserService userService;
    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    public Optional<Task> getTaskById(long id) {
        return taskRepo.findById(id);
    }
    public Task saveTask(Task task) {
        return taskRepo.save(task);
    }

    public Task updateTask(long id,Task taskDetails) {
        return taskRepo.findById(id).map(task ->{
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            task.setCompleted(taskDetails.isCompleted());
            task.setDueAt(taskDetails.getDueAt());
            task.setUpdatedAt(LocalDateTime.now());
            return taskRepo.save(task);
        }).orElseThrow(()-> new RuntimeException("Task not found with id " + id));
    }
    public void deleteTask(long id) {
        taskRepo.deleteById(id);
    }
    public Optional<User> getUserForTask(Long taskId) {
        Optional<Task> task = getTaskById(taskId);
        return task.flatMap(t -> userService.getUserById(t.getUserId()));
    }

}
