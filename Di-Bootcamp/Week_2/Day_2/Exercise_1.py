# 🌟 Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


my_fav_numbers = {1,99,55,78}
my_fav_numbers.add(52)
print(my_fav_numbers)
my_fav_numbers.remove(55)
print(my_fav_numbers)
friend_fav_numbers = {284,105,93}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)