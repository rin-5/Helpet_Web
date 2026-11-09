package com.ieselrincon.jvr.Helpet.controller;

import com.ieselrincon.jvr.Helpet.dto.UserDto;
import com.ieselrincon.jvr.Helpet.entities.User;
import com.ieselrincon.jvr.Helpet.repository.UserRepository;
import com.ieselrincon.jvr.Helpet.service.UserAuthService;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.hc.core5.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    private final UserAuthService userAuthService;

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationConfiguration authenticationConfiguration;


    public UserController(UserAuthService userAuthService, UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationConfiguration authConfiguration) {
        this.userAuthService = userAuthService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationConfiguration = authConfiguration;
    }





    @PostMapping("/sign-in")
    ResponseEntity<?> signIn(@RequestBody UserDto.UserRegistrationRequest request, HttpServletResponse response) {
        AuthenticationManager authManager = authenticationConfiguration.getAuthenticationManager();

        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.username(), request.pwd()));

        String token = userAuthService.generateToken(auth.getName());

        ResponseCookie cookie = ResponseCookie.from("AUTH_TOKEN", token)
                .httpOnly(true)
                .secure(true)
                .sameSite("Strict")
                .maxAge(Duration.ofMinutes(90))
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return ResponseEntity.ok((User)Map.of("message", "Sign in successful!"));
    }

    @PostMapping("/register")
    ResponseEntity<?> register(@RequestBody UserDto.UserRegistrationRequest request) {
        if (userRepository.findByUsername(request.username()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "This username is already taken."));
        }

        User newUser = new User();
        newUser.setUsername(request.username());
        newUser.setNombre(request.nombre());
        newUser.setMail(request.mail());
        newUser.setPassword(passwordEncoder.encode(request.pwd()));
        userRepository.save(newUser);

        String token = userAuthService.generateToken(newUser.getUsername());

        return ResponseEntity.ok(Map.of("message","User created successfully!", "token", token));
    }

}

