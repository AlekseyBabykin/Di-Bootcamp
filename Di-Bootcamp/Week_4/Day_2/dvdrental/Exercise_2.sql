-- select *
-- from customer

-- select CONCAT(first_name,' ',last_name)  as full_name
-- from customer

-- select distinct create_date
-- from customer

-- select *
-- from customer
-- order by first_name desc

-- select film_id,title,description,release_year
-- from film
-- order by rental_rate

-- select address,phone
-- from address
-- where district='Texas'

-- select *
-- from film
-- where film_id BETWEEN 15 and 150

-- select film_id, title,description, length, rental_rate
-- from film
-- where title = 'Chocolate Duck'

-- select film_id, title,description, length, rental_rate
-- from film
-- where title like 'Ch%'

-- select title
-- from film
-- order by rental_rate
-- limit 10

-- select title
-- from film
-- order by rental_rate
-- fetch first 10 rows only offset 10

-- select customer.first_name,customer.last_name, payment.amount,payment.payment_date 
-- from customer inner join payment on payment.customer_id = customer.customer_id;

-- select film.title
-- from film Left join inventory on film.film_id = inventory.film_id
-- where inventory.film_id is null

-- select city.city, country.country
-- from city join country on city.country_id = country.country_id

-- select customer.customer_id,customer.first_name,customer.last_name,payment.amount,payment.payment_date,staff.staff_id
-- from payment
-- join customer on customer.customer_id = payment.customer_id
-- join staff on payment.staff_id = staff.staff_id


