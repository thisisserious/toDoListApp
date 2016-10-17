-- 1. Create database
CREATE DATABASE to_do;

-- 2. Create table
CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
task varchar(80) NOT NULL,
complete varchar (5)
)
