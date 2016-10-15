-- 1. Create database
CREATE DATABASE to_do;

-- 2. Create table
CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
task varchar(80) NOT NULL
)

-- 3. Alter table to add a column (it wasn't allowing me to add it on Step 2)
ALTER TABLE tasks
ADD complete varchar(5);
