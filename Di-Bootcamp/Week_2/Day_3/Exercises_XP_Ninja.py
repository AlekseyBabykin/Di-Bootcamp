# Exercise 1 : Cars
# Instructions
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# Convert it into a list using Python (don’t do it by hand!).
# Print out a message saying how many manufacturers/companies are in the list.
# Print the list of manufacturers in reverse/descending order (Z-A).
# Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.
# Find out how many manufacturers’ names do not have the letter ‘i’ in them.

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).
# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

car = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
car_list = car.split(",")
car_o = []
car_not_i = []
print(len(car_list))
car_list.reverse()
print(car_list)
for i in range(len(car_list)):
    if "o" in car_list[i]:
        car_o.append(car_list[i])
           
print(car_o)            

for i in range(len(car_list)):
    if "i" not in car_list[i]:
        car_not_i.append(car_list[i])
print(car_not_i)

car_set = []     
for i in car_not_i:
    car_set.append(set(i))
print(car_set)    