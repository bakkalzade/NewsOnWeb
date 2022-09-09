package com.example.demo.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="news")
@Data

public class News {

    @Id
    Long id;

    String title;
    String text;

}
