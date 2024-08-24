package com.example.Todo.app.service;

import com.example.Todo.app.model.Task;
import com.example.Todo.app.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    @Autowired
    private TaskService taskService;
    @Autowired
    private EmailService emailService;

    @Autowired
    private UserService userService;

    // Run every minute to check for due tasks (Cron expression)
    @Scheduled(cron = "0 * * * * *")
    public void notifyUsersAboutDueTasks() {
        List<Task> tasks = taskService.getAllTasks();
        for (Task task : tasks) {
            if(task.getDueAt() != null && task.getDueAt().isBefore(LocalDateTime.now().plusMinutes(5))){
                sendNotification(task);
            }
        }
    }
    private void sendNotification(Task task) {
        String subject = "Reminder : Task '"+task.getTitle()+"' is due soon";
        String body = "Task : " + task.getTitle() + "\nDescription :"+ task.getDescription() +"\nDue at : " + task.getDueAt();
        Optional<User> user= userService.getUserById(task.getId());
        // Send Email Notification
        String userEmail = user.get().getEmail(); ;
        emailService.sendEmail(userEmail, subject, body);

        System.out.println("Notification sent for task: " + task.getTitle());
    }
}
