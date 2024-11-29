-- Active: 1731540077295@@127.0.0.1@3306


CREATE TABLE roles (
    id VARCHAR(80) NOT NULL UNIQUE PRIMARY KEY,
    role VARCHAR(80) NOT NULL UNIQUE,
)


CREATE TABLE users (
    id VARCHAR(80) NOT NULL PRIMARY KEY UNIQUE,
    username VARCHAR(80) NOT NULL UNIQUE,
    password VARCHAR(12) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    created_at VARCHAR(30) NOT NULL DEFAULT DATETIME('now') -- aqui entra como varchar porque apesar de default dados vem da api em iso string
    avatar_url INTEGER NOT NULL, DEFAULT 1, 
    role_id VARCHAR(80) NOT NULL ,
    FOREIGN KEY (role_id) REFERENCE roles(id)
    ON UPDATE CASCADE ON DELETE CASCADE
)



