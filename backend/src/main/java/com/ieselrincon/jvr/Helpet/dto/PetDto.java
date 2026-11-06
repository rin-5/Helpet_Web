package com.ieselrincon.jvr.Helpet.dto;

import com.ieselrincon.jvr.Helpet.entities.Pet;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.io.Serializable;
import java.util.Objects;

public class PetDto extends Pet {
    public record PetPayload(
            @NotBlank(message = "The name is required.")
            String name,
            @NotBlank(message = "The species is required.")
            String species,
            @NotBlank(message = "The breed cannot be empty.")
            String breed,
            @NotNull(message = "The age can't be empty.")
            int age
    ) {}
}