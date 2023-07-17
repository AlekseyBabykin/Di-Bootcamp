# Exercise 5: Longest Word Without A Specific Character
# Instructions
# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.
a = []
word_text_before = ""
word_text = ""
# word_text = input("write word without A\n")s
while True:
    # word_text = input("write word without A\n")
    if word_text == "0":
        break 
    if len(word_text_before) < len(word_text):
        print("congratulations message")
        word_text_before = word_text
   
    word_text = input("write word without A\n")
