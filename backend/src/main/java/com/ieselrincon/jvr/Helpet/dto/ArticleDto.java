package com.ieselrincon.jvr.Helpet.dto;

import com.ieselrincon.jvr.Helpet.entities.Article;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ArticleDto extends Article {
    public record articlePayload(
            @NotBlank(message = "The author is required.")
            String author,
            @NotBlank(message = "The title is required.")
            @Size(min = 3, message = "The title must have at least three characters.")
            String title,
            @NotBlank(message = "The category is required.")
            String category,
            @NotBlank(message = "Username cannot be empty.")
            @Size(min = 3, message = "The article must have at least three characters.")
            String text,
            String imageUrl
    ) {
    }
}
