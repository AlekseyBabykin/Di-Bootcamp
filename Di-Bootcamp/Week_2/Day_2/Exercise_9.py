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

count = 0
while True:
    persone_age = int(input("write age or exit write 0\n"))
    if persone_age < 3:
        count += 0
    if 3 <= persone_age <= 12:
        count += 10
    if persone_age > 12:
        count += 15       
    if persone_age == 0:
        break
print("cost", count)    
name_list = []
while True:
    name = input("write you Name, exit write 0\n")
    name_list.append(name)
    if name == "0":
        break

for i in name_list:
    print(i)
    age_boys = int(input("write you age\n"))
    if 16 <= age_boys <= 21:
        name_list.remove(i)   