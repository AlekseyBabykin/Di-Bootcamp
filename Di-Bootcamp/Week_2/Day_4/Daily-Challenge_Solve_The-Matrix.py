import string
alphabet = set(string.ascii_letters)
data = '''   7ii
    Tsx
    h%?
    i #
    sM 
    $a 
    #t%
    ^r!'''
b= data.lower()
char = []
count = 0
for i in data:
    if i in alphabet:
        if count == 1:
            count = 0
            char.append(" ")
        char.append(i)
        count += 1
    else:
        count = 0                
print(char)        