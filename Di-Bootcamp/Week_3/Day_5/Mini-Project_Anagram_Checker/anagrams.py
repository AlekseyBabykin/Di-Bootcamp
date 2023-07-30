from anagram_checker import Anagram_Checker

def play():
    new_game = Anagram_Checker()
    while True:
        print("(a) write new words")
        print("(b) exit")
        temp = input()
        if temp == "b":
            break
        if temp == "a":
            temp_word = new_game.inplay()
            print(f"you word{temp_word} and anagramm:{new_game.get_anagrams(temp_word)}")
            

play()
              
                 
   
  