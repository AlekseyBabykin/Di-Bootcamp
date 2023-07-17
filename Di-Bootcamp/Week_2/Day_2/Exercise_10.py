# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:


sandwich_orders = ["Tuna sandwich", "Pastrami sandwich",
                   "Avocado sandwich", "Pastrami sandwich", "Egg sandwich",
                   "Chicken sandwich", "Pastrami sandwich"]
count = 0
while count < len(sandwich_orders):
    if sandwich_orders[count] == "Pastrami sandwich":
        sandwich_orders.remove("Pastrami sandwich")
    count += 1    
  
for i in sandwich_orders:
    print(f"I made your {i}")