-- Active: 1681749097173@@127.0.0.1@3306

CREATE TABLE videos (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOT NULL,
    duration REAL UNIQUE NOT NULL,
    upload_at TEXT DEFAULT (DATETIME()) NOT NULL
);

SELECT * FROM videos;

INSERT INTO videos (id, title, duration)
VALUES("v001","Video 2",250);