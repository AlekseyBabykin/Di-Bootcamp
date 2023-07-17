
# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
i = 1.5
list1 = []
while i <= 5:
    if i % 1 == 0:
        list1.append(int(i))
    else:
        list1.append(i)    
    i += 0.5
print(list1)    