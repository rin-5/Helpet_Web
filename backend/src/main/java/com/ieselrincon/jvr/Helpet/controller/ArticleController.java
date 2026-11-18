package com.ieselrincon.jvr.Helpet.controller;

import com.ieselrincon.jvr.Helpet.dto.ArticleDto;
import com.ieselrincon.jvr.Helpet.entities.Article;
import com.ieselrincon.jvr.Helpet.service.ArticleService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {
    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }


    @GetMapping
    public Page<Article> getAircraft(
            @RequestParam(required = false) String searchTerm,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        if (searchTerm != null) {System.out.println(searchTerm);}
        return articleService.getAllArticles(searchTerm, page, size);


    }


    @GetMapping("/{id}")
    ResponseEntity<Article> getAircraftById(@PathVariable Long id){
        Article aircraft = articleService.getArticleById(id);
        return ResponseEntity.ok(aircraft);
    }



    @PostMapping
    ResponseEntity<Article> createAircraft(
            @Valid @RequestBody ArticleDto.articlePayload payload){
        Article savedAircraft = articleService.createArticle(payload);

        return ResponseEntity.ok(savedAircraft);
    }



    @PutMapping("/{id}")
    ResponseEntity<Article> updateAircraft(
            @PathVariable long id,
            @Valid @RequestBody ArticleDto.articlePayload payload){
        Article updatedAircraft = articleService.updateArticle( id, payload);
        return ResponseEntity.ok(updatedAircraft);
    }

    @DeleteMapping("/{id}")
    void deleteAircraft(@PathVariable Long id){
        articleService.deleteArticle(id);
    }

}

