# Exercise 1: Concatenate Lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

# list1 = [1,2,3,4]
# list2 = [4,5,6,7,8]

# for i in list1:
#     list2.append(i)
# print(list2)    

# Exercise 2: Range Of Numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

# list1 = []
# for i in range(1500,2501):
#     if i % 5 == 0 or i % 7 == 0:
#         list1.append(i)
# print(list1)        

# Exercise 3: Check The Index
# Instructions
# Using this variable

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# name = input("write name\n")
# count = 0
# for i in names:
#     if i == name:
#         break
#     count += 1
# print("index: ", count)    

# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.
# a = int(input("Input the 1st number:\n"))
# b = int(input("Input the 2st number:\n"))
# c = int(input("Input the 3st number:\n"))
# abc = []
# abc.append(a)
# abc.append(b)
# abc.append(c)
# abc.sort()
# print(abc[-1])

# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

# all_char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
# vowels = ['a','e', 'i', 'o','u','y']
 
# for i in all_char:
#     if i in vowels:
#         print(f"vowels: {i}")
#     else:
#         print(f"consonant: {i}")
         