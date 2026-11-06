package com.ieselrincon.jvr.Helpet.dto;

import com.ieselrincon.jvr.Helpet.entities.Post;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class PostDto extends Post {
    public record postPayload(
            @NotNull(message = "The original poster's ID is required.")
            int idUser,
            @NotBlank(message = "The title is required.")
            @Size(min = 3, message = "The title must have a minimum of 3 characters.")
            String title,
            @NotBlank(message = "The description of the post cannot be empty.")
            @Size(min = 3,  message = "The description of the post must have a minimum of 3  characters.")
            String description,
            String imageUrl
    ) {}
}