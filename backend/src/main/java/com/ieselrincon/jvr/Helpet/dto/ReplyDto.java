package com.ieselrincon.jvr.Helpet.dto;

import com.ieselrincon.jvr.Helpet.entities.Reply;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class ReplyDto extends Reply {
    public record  replyPayload(
            @NotNull(message = "The parent post's ID is required.")
            int idPost,
            @NotNull(message = "The reply poster's ID is required.")
            int idUser,
            @NotBlank(message = "The reply cannot be empty.")
            @Size(min = 3, message = "The reply must have a minimum of 3 characters.")
            String text
    ) {}
}