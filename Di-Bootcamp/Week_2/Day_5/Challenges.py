# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.
# list1 = [0,2,4]
# list1[2] = 5
# list1.insert(0,7)

# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.
# string_example =input()
# count = 0
# for i in string_example:
#     if i == " ":
#         count += 1
# print(count)

# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.
# string_example =input()

# for i in string_example:
#     count_up = sum(1 for i in string_example if i.isupper())
#     count_lower = sum(1 for i in string_example if i.lower())
# print(count_up,count_lower)

# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:

# my_sum = [1,5,4,2]
# result = sum(i for i in my_sum)
# result_2 = 0
# for i in my_sum:
#  result_2 += i
# print(result)
# print(result_2)

# Exercise 5
# Instructions
# Write a function to find the max number in a list
# x = [0,1,3,50]
# def find_max(x):
#     return print(max(x))
# find_max(x)

# Exercise 6
# Instructions
# Write a function that returns factorial of a number

# x = 4
# def factorial(x):
#     result = 1
#     if x == 0:
#         return print(0)
#     elif x == 1:
#         return print(1)
#     else:
#         for i in range(1,x+1):
#             result *= i
#         return print(result)    
# factorial(0)
# factorial(1)  
# factorial(x)  

# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):    

# a = [['a','a','t','o'],'a']
# def list_count(a):
#     count = 0
#     for i in a:
#         count += 1
#     return print(count)    