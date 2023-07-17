# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
topping_list = []
count = 0
while True:
    c = input("write pizza toppings\n")
    if c == "quit":
        break
    topping_list.append(c)
    print(f"add that topping {c} to their pizza")
    count += 1

for i in topping_list:
    print(i,end=" ")
print("\n")        
print("price:", 10 + 2.5*count)    