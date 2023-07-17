
# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
c = []
for i in range(1,21):
    c.append(i)
    print(i)


for i in range(len(c)):
    print(c[i],end=" ")
print("\n")    
print(c[::2])