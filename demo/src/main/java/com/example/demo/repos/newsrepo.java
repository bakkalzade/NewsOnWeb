package com.example.demo.repos;

import com.example.demo.entities.News;
import org.springframework.data.jpa.repository.JpaRepository;


public interface newsrepo extends JpaRepository<News, Long> {
}
