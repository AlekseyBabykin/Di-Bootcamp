# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

a = input("massage\n")

if len(a) == 10:
    print("perfect string")
if len(a) < 10:
    print("string not long enough") 
else:
    print("string too long")
 
 
#  Then, print the first and last characters of the given text.   

print(a[0],a[-1])           

# Using a for loop, construct the string character by character: Print the first character, then the second, 
# then the third, until the full string is printed. For example:

c = ""
for i in range(len(a)):
    c += a[i]
    print(c)
    
# 4. Bonus: Swap some characters around then print the newly
# jumbled string (hint: look into the shuffle method). For example:    

shuffle = []
# for i in g:
#     d += i
#     print(d)

for i in range(1,len(c)-1):
    shuffle.append(c[i]) 
shuffle.append(c[0])    

shuffle_string = ""    

for i in shuffle:
    shuffle_string += i
print(shuffle_string)    