-- CREATE TABLE students(
-- students_id SERIAL PRIMARY KEY,
-- last_name VARCHAR,
-- first_name VARCHAR,
-- birth_date DATE)

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES ('Marc','Benichou','02/11/1998'),
-- ('Yoan','Cohen','03/12/2010'),
-- ('Lea','Benichou','27/07/1987'),
-- ('Amelia','Dux','07/04/1996'),
-- ('David','Grez','14/06/2003'),
-- ('Omer','Simpson','03/10/1980');

-- SELECT *
-- FROM students

-- SELECT first_name, last_name
-- FROM students

-- SELECT first_name, last_name
-- FROM students
-- WHERE students_id = 2

-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name = 'Marc' AND first_name = 'Benichou'

-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name LIKE '%a%'

-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name LIKE 'a%'

-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name LIKE '%a_'

-- SELECT *
-- FROM students
-- WHERE students_id = 1 OR students_id = 3

SELECT *
FROM students
WHERE birth_date < '01/01/2000'
