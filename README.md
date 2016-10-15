# To Do List App
This is a 'To Do List' app I designed. It allows the user to create a new task, check it off when complete and delete it from the list.

## Set-up
Create these tables using postgresql:

1. ``CREATE DATABASE to_do;``

2. ``CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
task varchar(80) NOT NULL
)``

3. ``ALTER TABLE tasks
ADD complete varchar(5);``

# Author
- Laura Abend
