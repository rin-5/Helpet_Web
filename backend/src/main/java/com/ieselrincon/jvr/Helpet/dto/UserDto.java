package com.ieselrincon.jvr.Helpet.dto;

import com.ieselrincon.jvr.Helpet.entities.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class UserDto extends User {
    public record UserPayload(
            @NotBlank(message = "The name is required.")
            String name,
            @NotBlank(message = "The e-mail address is required.")
            String mail,
            @NotBlank(message = "Username cannot be empty.")
            @Size(min = 3, max = 50, message = "The username must have between 3 and 50 characters.")
            String username,

            @NotBlank(message = "Password cannot be empty")
            @Size(min=8, max = 50, message = "The password must be at least 8 characters long.")
            String pwd
    ) {}
}
