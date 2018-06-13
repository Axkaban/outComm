package com.example.messagesapi.controllers;

import com.example.messagesapi.models.Message;
import com.example.messagesapi.repositories.MessageRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@CrossOrigin(origins = "*")
@RestController
public class MessagesController {

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/")
    public Iterable<Message> findAllMessages() {
        return messageRepository.findAll();
    }

    @GetMapping("/{messageId}")
    public Message findMessageById(@PathVariable Long messageId) throws NotFoundException {

        Message foundMessage = messageRepository.findOne(messageId);

        if (foundMessage == null) {
            throw new NotFoundException("Message with ID of " + messageId + " was not found!");
        }


        return foundMessage;
    }

    @DeleteMapping("/{messageId}")
    public HttpStatus deleteMessageById(@PathVariable Long messageId) throws EmptyResultDataAccessException {
        messageRepository.delete(messageId);
        return HttpStatus.OK;
    }



    @PostMapping("/")
    public Message createNewMessage(@RequestBody Message newMessage) {
        return messageRepository.save(newMessage);
    }

    @PatchMapping("/{messageId}")
    public Message updateMessageById(@PathVariable Long messageId, @RequestBody Message messageRequest) throws NotFoundException {
        Message messageFromDb = messageRepository.findOne(messageId);

        if (messageFromDb == null) {
            throw new NotFoundException("Message with ID of " + messageId + " was not found!");
        }

        messageFromDb.setText(messageRequest.getText());
        messageFromDb.setUserId(messageRequest.getUserId());
        messageFromDb.setFavorite(messageRequest.getFavorite());

        return messageRepository.save(messageFromDb);
    }

    @ExceptionHandler
    void handleMessageNotFound(
            NotFoundException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value(), exception.getMessage());
    }

    @ExceptionHandler
    void handleDeleteNotFoundException(
            EmptyResultDataAccessException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value());
    }
}