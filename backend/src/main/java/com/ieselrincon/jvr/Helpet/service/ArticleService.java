package com.ieselrincon.jvr.Helpet.service;

import com.ieselrincon.jvr.Helpet.dto.ArticleDto;
import com.ieselrincon.jvr.Helpet.entities.Article;
import com.ieselrincon.jvr.Helpet.repository.ArticleRepository;
import jakarta.persistence.criteria.Predicate;
import org.jspecify.annotations.NonNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ArticleService {
    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public Page<Article> getAllArticles(String searchTerm, int page, int size) {
        Specification<Article> spec = (root, query, cb) -> {
            if (searchTerm == null || searchTerm.trim().isEmpty()) {
                return cb.conjunction();
            }
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(cb.like(cb.lower(root.get("category")), "%" + searchTerm.toLowerCase().trim() + "%"));
            predicates.add(cb.like(cb.lower(root.get("title")), "%" + searchTerm.toLowerCase().trim() + "%"));

            return cb.or(predicates.toArray(predicates.toArray(new Predicate[0])));
        };
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());
        return articleRepository.findAll(spec, pageable);
    }

    public Article getArticleById(long id) {
        return articleRepository.findById(Math.toIntExact(id)).orElseThrow(() -> new RuntimeException("Article not found"));

    }

    //In a real app, these following functions can only be performed by users with permissions to create articles.
    public Article createArticle(ArticleDto.articlePayload payload) {
        var art = new Article();
        art.setId(null);
        return setArticleParams(payload, art);
    }

    @NonNull
    private Article setArticleParams(ArticleDto.articlePayload payload, Article art) {
        art.setAuthor(payload.author());
        art.setCategory(payload.category());
        art.setTitle(payload.title());
        art.setText(payload.text());
        if(!payload.imageUrl().isEmpty()) {
            art.setImageUrl(payload.imageUrl());
        }

        return articleRepository.save(art);
    }

    public Article updateArticle(long id, ArticleDto.articlePayload payload) {
        Article art = articleRepository.findById(Math.toIntExact(id)).orElseThrow(() -> new RuntimeException("Article not found."));
        return setArticleParams(payload, art);
    }

    public void deleteArticle(long id) {
        articleRepository.deleteById(Math.toIntExact(id));
    }
}