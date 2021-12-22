-- DEPLOY DATABASE PROFIL MEMBER --
-- 1 -> Connect to PSQL
-- 2 --> Create Database --> CREATE DATABASE {name};
-- 3 --> Create User with password ---> CREATE USER {name} WITH PASSWORD {password};
-- 4 --> Link DB with User ---> GRANT ALL PRIVILEGES ON DATABASE {nameDB} TO {UserName}
-- psql -U tutoprofil -d tutoprofil -f ./migrations/deploy/init.sql --

BEGIN;

DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "username" TEXT NOT NULL UNIQUE,
  "profilurl" TEXT
);

GRANT ALL PRIVILEGES ON "user" TO tutoprofil;

COMMIT;