CREATE TABLE movies(
    movie_id BIGINT PRIMARY KEY,
    diretor VARCHAR(255),
    duracao INT,
    data_assist DATE,
    FOREIGN KEY (movie_id) REFERENCES collections(id)
);