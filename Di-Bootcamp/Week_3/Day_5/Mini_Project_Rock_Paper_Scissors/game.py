import random
class Game():
    lst_choice = ["rock","paper","scissors"]
    
    def __init__(self) -> None:
        self.rezult = {"drow": 0,"win":0, "lose":0}
  
        
    @staticmethod
    def get_user_item():
        while True:
            try:
                choice_user = input("write: rock/paper/scissors\n")
                if choice_user not in Game.lst_choice :
                    raise ValueError("You need choice again")
            except Exception as err:
                print(err)
            else:
                print("to accept")
                break
        return choice_user  
                       
    @staticmethod
    def get_computer_item():
        
        choice_komputer = random.choice(Game.lst_choice)
        return choice_komputer
    
    def get_game_result(self,user_item, computer_item):
        print("in here", user_item, computer_item)  
        # user_item = self.get_user_item()
        # computer_item = self.get_computer_item()
        if user_item == computer_item:
            self.rezult["drow"] += 1 
            print("in draw", self.rezult)  
            # return "drow"  
        elif (user_item == "rock" and computer_item == "scissors") or (user_item == "paper" and computer_item == "rock"):
            self.rezult["win"] += 1 
            print("in win", self.rezult)  
            # return "win"
        else:
            self.rezult["lose"] += 1
            print("in lose", self.rezult)  
            # return "lose"
        # print(self.rezult)  
        return self.rezult
    
    def play(self):
        user = self.get_user_item() 
        computer = self.get_computer_item()
        results = self.get_game_result(user,computer)
        return print(f"You chose {user} The computer chose {computer} Result {results}")
        
    
# a = Game()
# a.play()   
    
                