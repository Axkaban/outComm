package com.example.usersapi.models;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PICTURE")
    private String picture;

    @Column(name = "NICKNAME")
    private String nickname;

    public User(String name, String picture, String nickname) {
        this.name = name;
        this.picture = picture;
        this.nickname = nickname;
    }
}