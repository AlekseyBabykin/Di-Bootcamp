-- select name distinct
-- from language

-- select title,description,name
-- from film
-- left join language on film.language_id = language.language_id

-- select title,description,name
-- from film
-- FULL OUTER join language on film.language_id = language.language_id

-- CREATE TABLE new_film(
-- id serial PRIMARY KEY,
-- name varchar(50) not null)

-- INSERT INTO new_film (name)
-- VALUES ('Indian Jons'),
-- 	  ('Titanic'),
-- 	  ('Futurama');

-- CREATE TABLE customer_review(
-- review_id serial PRIMARY KEY,
-- film_id int REFERENCES new_film (id) ,
-- language_id int REFERENCES language (language_id),
-- title varchar(50) not null,
-- score int check(score between 1 and 10) not null,
-- review_text text not null,
-- last_update DATE not null
-- );

-- truncate table customer_review restart identity

-- insert into customer_review (film_id,language_id,title,score,review_text,last_update)
-- VALUES
-- ((select id from new_film where name = 'Indian Jons'),(select language_id from language where name = 'Japanese'),
--  'I train my SQL',5,'i like programiggggg.Yo hohhohooh','2000-05-20'),
--  ((select id from new_film where name = 'Futurama'),(select language_id from language where name = 'French'),
--  'Kar kar',7,'Cooookdl? lal alllal? i like it:)','1998-09-10');

-- select *
-- from new_film

-- delete from new_film
-- where name = 'Titanic'

-- select *
-- from customer_review

-- ALTER TABLE public.customer_review
-- DROP CONSTRAINT customer_review_film_id_fkey,
-- ADD CONSTRAINT customer_review_film_id_fkey
--   FOREIGN KEY (film_id)
--   REFERENCES new_film (id)
--   ON DELETE CASCADE
--   ON UPDATE CASCADE;

-- ALTER TABLE public.customer_review
-- DROP CONSTRAINT customer_review_language_id_fkey,
-- ADD CONSTRAINT customer_review_language_id_fkey
--   FOREIGN KEY (language_id)
--   REFERENCES language (language_id)
--   ON DELETE CASCADE
--   ON UPDATE CASCADE;

-- delete from new_film
-- where name = 'Futurama'

-- Exercise 2
-- 1
-- update film
-- set language_id = (select language_id from language where name = 'Italian' )
-- where title = 'Airport Pollock' or title = 'Arizona Bang' or title = 'Apollo Teen'

-- 2
-- customer_address_id_fkey; customer_pkey
-- need to add  linked tables

-- 3
-- ok

-- 4
-- select count(*)
-- from rental
-- where return_date is null

-- 5

-- select film.title, film.replacement_cost
-- from inventory


-- join film on film.film_id = inventory.film_id
-- join rental on rental.inventory_id = inventory.inventory_id
-- where rental.return_date is null
-- order by film.replacement_cost desc
-- limit 30

-- 6.1

-- select film.title
-- from film_actor
-- join film on film.film_id = film_actor.film_id
-- join actor on actor.actor_id = film_actor.actor_id
-- where film.description ilike '%sumo wrestler%' and actor.first_name = 'Penelope' and actor.last_name = 'Monroe'


-- 6.2
-- select * 
-- from film
-- where length < 60 and rating = 'R' and description ilike '%documentary%'

-- 6.3

-- select film.title, payment.amount, customer.first_name, customer.last_name 
-- from film
-- join inventory on film.film_id = inventory.film_id
-- join rental on inventory.inventory_id = rental.inventory_id
-- join payment on rental.rental_id = payment.rental_id
-- join customer on payment.customer_id = customer.customer_id
-- where payment.amount > 4 and
-- customer.first_name = 'Matthew' and
-- customer.last_name = 'Mahan'
-- and rental.return_date between '2005-07-28' and '2005-08-01'
6.4
select film.title, film.replacement_cost, customer.first_name, customer.last_name, film.description from film
join inventory on film.film_id = inventory.film_id
join rental on inventory.inventory_id = rental.inventory_id
join payment on rental.rental_id = payment.rental_id
join customer on customer.customer_id = payment.customer_id
where film.title ilike '%boat%' or film.description ilike '%boat%' and
customer.first_name = 'Matthew' and
customer.last_name = 'Mahan'
order by film.replacement_cost desc
limit 1;