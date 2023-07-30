import os
import re
import string

class Anagram_Checker ():
    def __init__(self) -> None:
        with open("Mini-Project_Anagram_Checker\sowpods.txt","r") as file:
            all_text = file.read().split("\n") 
        self.text = all_text
        
    @staticmethod    
    def is_valid_word(word):
        a = word
        return re.sub(r'[^a-zA-Z]', "", a).upper()
               
  
        
    def get_anagrams(self,word):
        lst_lenght = []
        lst_qv = []
        for i in self.text:
            if len(word) == len(i):
                lst_lenght.append(i)
        for i in lst_lenght:
            if "".join(sorted(word)) == "".join(sorted(i)) and word != i:
                lst_qv.append(i)                  
        return lst_qv

    def inplay(self):
        while True:
            try:
                word = input("write: Yor word\n")
                if self.is_valid_word(word) == False:
                    raise ValueError("You need choice again")
            except Exception as err:
                print(err)
            else:
                print("to accept")
                break
        return re.sub(r'[^a-zA-Z]', "", word).upper()    
# a = Anagram_Checker()
# print(a.is_valid_word("MEAT"))
# print(re.sub(r'[^a-zA-Z]', "", "MMM").upper())


    
          
