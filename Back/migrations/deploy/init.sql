-- DEPLOY DATABASE PROFIL MEMBER --
-- 1 -> Connect to PSQL
-- 2 --> Create Database --> CREATE DATABASE {name};
-- 3 --> Create User with password ---> CREATE USER {name} WITH PASSWORD {password};
-- 4 --> Link DB with User ---> GRANT ALL PRIVILEGES ON DATABASE {nameDB} TO {UserName}
-- psql -U tutoprofil -d tutoprofil -f ./migrations/deploy/init.sql --

-- BEGIN;

-- DROP TABLE IF EXISTS "image_files", "user" CASCADE;

-- CREATE TABLE "image_files" (
--   "id" SERIAL NOT NULL PRIMARY KEY,
--   "filename" TEXT UNIQUE NOT NULL,
--   "filepath" TEXT NOT NULL,
--   "mimetype" TEXT NOT NULL,
--   "size" BIGINT NOT NULL
-- );

-- CREATE TABLE "user" (
--   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   "email" TEXT NOT NULL UNIQUE,
--   "password" TEXT NOT NULL,
--   "username" TEXT NOT NULL UNIQUE,
--   "blob" BYTEA
-- );

-- -- CREATE DOMAIN EMAIL_VERIFY AS TEXT CHECK(VALUE ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');

-- -- ALTER TABLE "user"
-- -- ALTER "email" TYPE EMAIL_VERIFY;

-- ALTER TABLE "image_files"
-- ADD COLUMN "user_id" INT REFERENCES "user"(id);

-- ALTER TABLE "user"
-- ADD COLUMN "image_id" INT REFERENCES "image_files"(id);

-- GRANT ALL PRIVILEGES ON "image_files", "user" TO tutoprofil;

-- COMMIT;

BEGIN;

DROP TABLE IF EXISTS "image_files", "user" CASCADE;

-- CREATE TABLE "image_files" (
--   "id" SERIAL NOT NULL PRIMARY KEY,
--   "filename" TEXT UNIQUE NOT NULL,
--   "filepath" TEXT NOT NULL,
--   "mimetype" TEXT NOT NULL,
--   "size" BIGINT NOT NULL
-- );

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "username" TEXT NOT NULL UNIQUE,
  "profilurl" TEXT
);

-- CREATE DOMAIN EMAIL_VERIFY AS TEXT CHECK(VALUE ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');

-- ALTER TABLE "user"
-- ALTER "email" TYPE EMAIL_VERIFY;

-- ALTER TABLE "image_files"
-- ADD COLUMN "user_id" INT REFERENCES "user"(id);

-- ALTER TABLE "user"
-- ADD COLUMN "image_id" INT REFERENCES "image_files"(id);

GRANT ALL PRIVILEGES ON "user" TO tutoprofil;

COMMIT;