CREATE TABLE collections(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    genero VARCHAR(255),
    descricao VARCHAR(255),
    ano_lancamento DATE,
    favorito BOOLEAN,
    ranking INT,
    resenha VARCHAR(255),
    imagURL VARCHAR(255),
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
