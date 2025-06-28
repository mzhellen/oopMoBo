package com.poo.mo_bo.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class CustomAuthFilter extends OncePerRequestFilter {

    private final AuthService authService;
    public CustomAuthFilter(AuthService authService) {
        this.authService = authService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String hash = request.getHeader("Authorization");

        String path = request.getRequestURI();
        if (path.contains("/login") || path.contains("/register") || path.contains("/auth")){
            //-->
            System.out.println("\n\n\nIgnoring authentication for path: " + path);
            filterChain.doFilter(request, response);
            return;
        }

        if (hash == null || !authService.isValid(hash)) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Acesso negado.");
            return;
        }

        filterChain.doFilter(request, response);
    }
}

