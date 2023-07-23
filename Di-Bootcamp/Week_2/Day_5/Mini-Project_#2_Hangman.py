import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)
word_char = [i for i in word]
guess_list = []
for i in range(len(word_char)):
    guess_list.append("*")
    print(guess_list[i], end=" ")
 
print(len(word_char))
# print(guess_list)
#   print("*"*len(word_char))
#     char = input("write char")
#     if char in word_char:
#         count = 0
#         for i in word_char:
#             count += 1
#             if i == char:
#                 while True:
  


def display():
    map_full = [["_","_","_","_","_","_","_"],
            ["|"," "," "," "," "," | "," "],    
            ["|"," "," "," "," ","(_)"," "],
            ["|"," "," "," "," ","_|_"," "],
            ["|"," "," "," ","","* | *",""], 
            ["|"," "," "," "," "," | "," "], 
            ["|"," "," "," "," *"," ","* "], 
            ["|"," "," "," ","* "," "," *"],
            ["|","_","_","_","_","__","__"]]
    for i in map_full:
        for j in i:
            print(j, end=" ")
        print("\n")
 