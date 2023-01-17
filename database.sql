
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "teams" (
    "id" SERIAL PRIMARY KEY,
    "owner_name" VARCHAR (80) NOT NULL,
    "roster_size" INT,
    "profile_image" VARCHAR (2083),
    "team_salary" INT
);

CREATE TABLE "drafted_players" (
	"id" SERIAL PRIMARY KEY,
    "team_id" INT REFERENCES "teams",
    "player_id" INT,
    "player_name" VARCHAR (255),
    "player_position" VARCHAR (255),
    "player_group" VARCHAR (255),
    "player_age" INT,
    "player_height" VARCHAR (255),
    "player_weight" VARCHAR (255),
    "player_image" VARCHAR (2083)
);
