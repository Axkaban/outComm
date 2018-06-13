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

    @Column(name = "EMAIL")
    private String email;

    public User(String name, String picture, String email) {
        this.name = name;
        this.picture = picture;
        this.email = email;
    }
}