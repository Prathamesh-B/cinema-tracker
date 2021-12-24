CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(60)
);
INSERT INTO users (name, email, password)
    VALUES ('Jerry', 'jerry@example.com', 'Tom&Jerry@1346');

CREATE TABLE watchlist (
    ID SERIAL PRIMARY KEY,
    title VARCHAR(30),
    user_name VARCHAR(30),
    vote NUMERIC(2,0)
);