package com.example.demo.controller;

import com.example.demo.entities.News;
import org.springframework.web.bind.annotation.*;
import com.example.demo.repos.newsrepo;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/news")
public class newsController {


    private newsrepo repo;

    public newsController(newsrepo repo){
        this.repo=repo;

    }

    @GetMapping
    public List<News> getAllNews(){
        return repo.findAll();

    }


    @PostMapping
    public News createANews(@RequestBody News news){

        return repo.save(news);
    }

    @GetMapping("/{newsId}")
    public News getANews(@PathVariable Long newsId){

        return repo.findById(newsId).orElse(null);
    }



    @PutMapping("/{newsId}")
    public News updateANews(@PathVariable Long newsId,@RequestBody News newNews){

        Optional<News> news = repo.findById(newsId);

        if (news.isPresent()){

            News foundNews = news.get();
            foundNews.setTitle(newNews.getTitle());
            foundNews.setText(newNews.getText());

            repo.save(foundNews);
            return foundNews;

        }else {
            repo.save(newNews);
            return newNews;
        }
    }

    @DeleteMapping({"/{newsId}"})
    public void deleteANews(@PathVariable Long newsId){

        repo.deleteById(newsId);

    }



}
