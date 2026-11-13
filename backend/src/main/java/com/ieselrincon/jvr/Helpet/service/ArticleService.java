package com.ieselrincon.jvr.Helpet.service;

import com.ieselrincon.jvr.Helpet.dto.ArticleDto;
import com.ieselrincon.jvr.Helpet.entities.Article;
import com.ieselrincon.jvr.Helpet.repository.ArticleRepository;
import jakarta.persistence.criteria.Predicate;
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

    public Article createArticle(ArticleDto.articlePayload payload) {
        var article = new Article();
        article.setId(null);
        article.setAuthor(payload.author());
        article.setCategory(payload.category());
        article.setTitle(payload.title());
        article.setText(payload.text());
        if(!payload.imageUrl().isEmpty()) {
            article.setImageUrl(payload.imageUrl());
        }

        return articleRepository.save(article);
    }

}
