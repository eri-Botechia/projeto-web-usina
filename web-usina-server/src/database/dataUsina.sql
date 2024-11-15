CREATE TABLE ROLES (
    id VARCHAR(100) NOT NULL PRIMARY KEY UNIQUE,
    role VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO ROLES VALUES
    ('ROLE_1', 'idealizador'),
    ( 'ROLE_2', 'admin'),
    ('ROLE_3', 'voluntario_geral'),
    ('ROLE_4','voluntario_especifico'),
    ('ROLE_5', 'cadastrado')
;

SELECT * FROM ROLES;