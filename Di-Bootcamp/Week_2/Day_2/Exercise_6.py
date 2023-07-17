# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

while True:
    c = input("write my Name\n")
    if c == "Alex" or c == "0":
        print("you win")
        break
    print("try again")