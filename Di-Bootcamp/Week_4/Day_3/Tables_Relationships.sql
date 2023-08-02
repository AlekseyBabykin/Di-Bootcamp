-- part 1:
-- 1)
-- create table Customer(
-- Customer_id serial primary key,
-- first_name varchar(50) NOT NULL,
-- last_name varchar(50) NOT NULL
-- );  

-- create table Customer_profile(
-- Customer_profile_id serial primary key,
-- isLoggedIn bool DEFAULT false,
-- Customer_id int	references Customer (Customer_id)
-- 	);

-- 2.
-- insert into  Customer (first_name,last_name)
-- values
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- 3.
-- insert into Customer_profile(isLoggedIn,Customer_id)
-- VALUES
-- ('true',(select Customer_id from Customer where first_name = 'John')),
-- ('false',(select Customer_id from Customer where first_name = 'Jerome'))

-- 4.
-- select first_name,isLoggedIn
-- from Customer
-- join Customer_profile on Customer_profile.Customer_id = Customer.Customer_id
-- where isLoggedIn = 'true'

-- select first_name,isLoggedIn
-- from Customer
-- full outer join Customer_profile on Customer_profile.Customer_id = Customer.Customer_id

-- select first_name,isLoggedIn
-- from Customer
-- left join Customer_profile on Customer_profile.Customer_id = Customer.Customer_id
-- where Customer_profile.Customer_id is null

-- part 2
-- 1
-- create table Book(
-- book_id SERIAL PRIMARY KEY,
-- title varchar NOT NULL, 
-- author varchar NOT NULL)

-- 2.

-- insert into Book (title,author)
-- values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- 3.

-- create table Student(
-- student_id SERIAL PRIMARY KEY, 
-- name varchar NOT NULL UNIQUE,
-- age int check(age < 15))

-- 4.
-- insert into Student (name,age)
-- values
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- 5.

-- create table Library (
-- book_fk_id int references Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- student_id int references Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- borrowed_date date
-- );
-- 6.
-- insert into Library (book_fk_id,student_id,borrowed_date)
-- VALUES
-- ((select book_id from Book where title = 'Alice In Wonderland'),(select student_id from Student where name = 'John'),'2022-02-15'),
-- ((select book_id from Book where title = 'To kill a mockingbird'),(select student_id from Student where name = 'Bob'),'2021-03-03'),
-- ((select book_id from Book where title = 'Alice In Wonderland'),(select student_id from Student where name = 'Lera'),'2021-05-23'),
-- ((select book_id from Book where title = 'Harry Potter'),(select student_id from Student where name = 'Bob'),'2021-08-12');

-- 7.


-- select *
-- from library


select student.name, book.title
from library
join Student on library.student_id = student.student_id
join Book on Book.book_id = library.book_fk_id

-- select avg(student.age) 
-- from library
-- join Student on library.student_id = student.student_id
-- join Book on Book.book_id = library.book_fk_id
-- where book.title = 'Alice In Wonderland'

-- DELETE from Student where name = 'Lera' 



