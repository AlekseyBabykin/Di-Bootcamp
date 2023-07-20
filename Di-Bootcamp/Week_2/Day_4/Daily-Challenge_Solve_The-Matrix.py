import string
alphabet = set(string.ascii_letters)
data = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''
print(data.split("\n"))    
char = []
count = 0
for i in range(len(data.split("\n")[0])):
    for j in range(len(data.split("\n"))): 
        if data.split("\n")[j][i] in alphabet:
            if count >= 1:
                char.append(" ")
            char.append(data.split("\n")[j][i])
            count = 0
        else:
            count += 1
    if char[0] == " ":
        char.pop(0)                   
print(char)        