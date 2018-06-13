package com.example.messagesapi.repositories;

import com.example.messagesapi.models.Message;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public interface MessageRepository extends CrudRepository<Message, Long>{

}
