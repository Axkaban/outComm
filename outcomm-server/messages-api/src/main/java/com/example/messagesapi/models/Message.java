package com.example.messagesapi.models;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "MESSAGES")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TEXT")
    private String text;

    @Column(name = "USER_ID")
    private Integer userId;

    @Column(name = "FAVORITE")
    private String favorite;

    public Message(String text, Integer userId, String favorite) {
        this.text = text;
        this.userId = userId;
        this.favorite = favorite;
    }

}