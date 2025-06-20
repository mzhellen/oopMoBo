CREATE TABLE books(
    book_id BIGINT PRIMARY KEY,
    autor VARCHAR(255),
    quant_pag INT,
    data_inic DATE,
    data_final DATE,
    FOREIGN KEY (book_id) REFERENCES collections(id)
);