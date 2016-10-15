# To Do List App
This is a 'To Do List' app I designed. It allows the user to create a new task, check it off when complete and delete it from the list.

## Set-up
Create these tables using postgresql:

``Create database
CREATE DATABASE to_do;``

``Create table
CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
task varchar(80) NOT NULL
)``

``Alter table to add a column (it wasn't allowing me to add it on Step 2)
ALTER TABLE tasks
ADD complete varchar(5);``

# Author
- Laura Abend
