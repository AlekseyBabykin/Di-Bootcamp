# Exercise 1: Birthday Look-Up
# Instructions
# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.

# Exercise 2: Birthdays Advanced
# Instructions
# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

# Exercise 3: Add Your Own Birthday
# Instructions
# Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
# Ask the user for a person’s name – store it in a variable.
# Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# Now add this new data into your dictionary.
# Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

# birthdays = {}
# birthdays["Alex"] = "1988/05/24"
# birthdays["Anton"] = "1922/05/14"
# birthdays["Alexander"] = "2000/09/04"
# birthdays["Hana"] = "1978/08/22"
# birthdays["Den"] = "1958/02/28"
# my_name = input("write you name\n")
# my_age = input("write you age YYYY/MM/DD\n")
# birthdays[my_name] = my_age
# print(f'You can look up the birthdays of the people in the list! {birthdays.keys()}')
# a = input("write you choose\n")
# if birthdays.get(a) == None:
#     print(f"Eroror not data {a}")
# else:
#     print(f"here birthday {birthdays[a]}")

# Exercise 4: Fruit Shop

# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }
# print(items.items())

# items = {
#     "banana": {"price": 4 , "stock":10},
#     "apple": {"price": 2, "stock":5},
#     "orange": {"price": 1.5 , "stock":24},
#     "pear": {"price": 3 , "stock":1}
# }
# a = list(items.keys())
# cost = 0
# for i in range(len(a)):
#     cost += items[a[i]]["price"] * items[a[i]]["stock"]  
# print(cost)    