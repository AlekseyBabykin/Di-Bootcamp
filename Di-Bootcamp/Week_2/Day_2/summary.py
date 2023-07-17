# 🌟 Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


# my_fav_numbers = {1,99,55,78}
# my_fav_numbers.add(52)
# print(my_fav_numbers)
# my_fav_numbers.remove(55)
# print(my_fav_numbers)
# friend_fav_numbers = {284,105,93}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple? impossible

# a = (1, 2 , 3 ,"c")

# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# basket.count("Apples")
# basket.clear()
# print(basket)


# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# i = 1.5
# list1 = []
# while i <= 5:
#     if i % 1 == 0:
#         list1.append(int(i))
#     else:
#         list1.append(i)    
#     i += 0.5
# print(list1)    

# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
# c = []
# for i in range(1,21):
#     c.append(i)
#     print(i)


# for i in range(len(c)):
#     print(c[i],end=" ")
# print("\n")    
# print(c[::2])

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# while True:
#     c = input("write my Name\n")
#     if c == "Alex" or c == "0":
#         print("you win")
#         break
#     print("try again")

# 🌟 Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# fructs = input("write favorite fruit(s)\n")
# fructs_list = fructs.split(" ")
# print(fructs_list)

# if input("write one fruct\n") in fructs_list:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")   

# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
# topping_list = []
# count = 0
# while True:
#     c = input("write pizza toppings\n")
#     if c == "quit":
#         break
#     topping_list.append(c)
#     print(f"add that topping {c} to their pizza")
#     count += 1

# for i in topping_list:
#     print(i,end=" ")
# print("\n")        
# print("price:", 10 + 2.5*count)

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# count = 0
# while True:
#     persone_age = int(input("write age or exit write 0\n"))
#     if persone_age < 3:
#         count += 0
#     if 3 <= persone_age <= 12:
#         count += 10
#     if persone_age > 12:
#         count += 15       
#     if persone_age == 0:
#         break
# print("cost", count)    
# name_list = []
# while True:
#     name = input("write you Name, exit write 0\n")
#     name_list.append(name)
#     if name == "0":
#         break

# for i in name_list:
#     print(i)
#     age_boys = int(input("write you age\n"))
#     if 16 <= age_boys <= 21:
#         name_list.remove(i)   

# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:


# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich",
#                    "Avocado sandwich", "Pastrami sandwich", "Egg sandwich",
#                    "Chicken sandwich", "Pastrami sandwich"]
# count = 0
# while count < len(sandwich_orders):
#     if sandwich_orders[count] == "Pastrami sandwich":
#         sandwich_orders.remove("Pastrami sandwich")
#     count += 1    
  
# for i in sandwich_orders:
#     print(f"I made your {i}")