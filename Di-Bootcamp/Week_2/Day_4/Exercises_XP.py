import random
# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# def display_message():
#     print("Html, Python Blalallala")

# display_message()

# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

# def favorite_book(title):
#     print(f"One of my favorite books is {title}")

# favorite_book("Sveta")    

#  Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# def describe_city(city,country="Mexico"):
#     print(f"such as {city} is in {country}")

# describe_city("Moscow")    

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

# def random_number(number):
#     a = random.randint(1,101)
#     if number == a:
#         print(f"You win {number}")
#     else:
#         print(f"give app {number} != {a}")    
# random_number(58)        

# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

# def make_shirt(size="XL", shirt=None):
#     if size == "XL":
#         return print("I love Python")
        
#     if size == "M" or size == "L" :
#         return print(f"The size of the shirt is {size} and the text is {shirt}")    
#     print(f"The  castom size  {size} and the castom {shirt}")
# make_shirt()
# make_shirt("M", 48) 
# make_shirt("XS", 38)
    
# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.    

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(x):
#     for i in x:
#         print(i)
   

# def make_great(x):
#     for i in range(len(x)):
#         x[i] += " the Great"
#     return x
# make_great(magician_names)
# show_magicians(magician_names)

# 🌟 Exercise 7 : Temperature Advice

# def get_random_temp(season="winter"):
#     x = 0
#     if season == "winter" or season == "1" :
#         x = random.uniform(-10.0, 16.0)
#     if season == "summer" or season == "12":
#         x =  random.uniform(16.0, 40.0)   
#     return x
# # print(get_random_temp())

# def main():
    
#     a = get_random_temp(input("write seson\n"))
#     print(type(a))
#     if a < 0:
#         print("Brrr, that/s freezing! Wear some extra layers today")
#     elif 0 <= a <= 16:
#         print("Quite chilly! Don/t forget your coat")    
#     elif 16 < a <= 32:
#         print("Exelent")    
        
#     else:
#         print("Live is pain")    
    
# main() 
 
# Exercise 5 : Star Wars Quiz 

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def question():
    wrong_answer = []
    for i in range(len(data)):
        print(data[i]["question"])
        a = input()
        if data[i]["answer"] != a:
            wrong_answer.append(data[i]["question"])
            print(f'{data[i]["question"]} wriht {data[i]["answer"]}')
              
    return wrong_answer        
         
def count_question():
    writh = len(data) - len(question())
    wrong = len(data) - writh 
    print(f"writh {writh} wrong {wrong}")
    if wrong > 3:
        print("try again")
count_question()    