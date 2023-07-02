SHOW DATABASES;
CREATE DATABASE sistemaDeCadastro;

USE sistemaDeCadastro;

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

SHOW TABLES;

DESCRIBE usuarios;

INSERT INTO usuarios(nome, email, idade) VALUES(
    "João Vicente",
    "joao_soares@gmail.com",
    18
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 18;

DELETE FROM usuarios WHERE nome = "Victor";

UPDATE usuarios SET nome = "nome de teste" WHERE nome = "Victor"