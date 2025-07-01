package com.poo.mo_bo.auth;

import com.poo.mo_bo.entities.User;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;


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

        String authHeader = request.getHeader("Authorization");
        String path = request.getRequestURI();

        System.out.println("\n\nCustomAuthFilter: Requisição para PATH: " + path);

        if (path.contains("/poo/auth/login") || path.contains("/poo/auth/register")) {
            System.out.println("CustomAuthFilter: Ignorando autenticação para rota pública: " + path);
            filterChain.doFilter(request, response);
            return;
        }

        // extraindo o hash do header
        String hash = null;
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            hash = authHeader.substring(7);
            System.out.println("CustomAuthFilter: Hash extraído do Header: " + hash);
        } else {
            System.out.println("CustomAuthFilter: Header Authorization não encontrado ou no formato incorreto para PATH: " + path);
        }

        if (hash != null) {
            User user = authService.findUserByHash(hash).orElse(null);

            if (user != null) {
                // Hash válido e usuário encontrado, AUTENTICAR NO SPRING SECURITY CONTEXT
                UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                        user.getEmail(),
                        user.getSenha(), // senha codificada, necessária para UserDetails
                        Collections.emptyList() // Papéis/Autoridades
                );

                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                //Essa linha é mais pra detalhar melhor no terminal
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
                filterChain.doFilter(request, response);
                return;
            } else {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Acesso negado: Hash inválido.");
                return;
            }
        } else {
            System.out.println("CustomAuthFilter: Hash não fornecido ou formato incorreto. Bloqueando acesso.");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Acesso negado: Token não fornecido ou inválido.");
            return;
        }
    }
}

/*
mesmo que o hash tivesse sendo salvo, retornava 403 porque o filtro estava validando o hash
e dando ok pra ela mas não estava informando ao Spring Security que o user tava autenticado.
já que o Spring Security ficava sem saber, ele negava o acesso e não retornava a resposta da
minha requisição de teste.

eu alterei o custom auth filter pra dizer o Spring que o usuário tá autenticado, na parte
onde eu crio o userDetails, o authetication pra ser o objeto da autenticação e usar nessa
parte do código: (linha 74)
SecurityContextHolder.getContext().setAuthentication(authentication);
essa parte é quem diz que o usuário tá logado

depois que não tava mais dando erro 403 por conta dessas mudanças, deu 401, porque eu fiz
alguns códigos na ordem errada. então mesmo que o hash tivesse certo no header, ele ia pra
a parte do else, que retornava "acesso negado". (era na linha 53 por diante esse erro)
aí foi só mudar a logica, a ordem das coisas que eu tinha escrito errado
*/

