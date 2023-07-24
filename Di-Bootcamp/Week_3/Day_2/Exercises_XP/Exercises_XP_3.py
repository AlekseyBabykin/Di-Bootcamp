import random
from Exercises_XP_1_2 import Dog
from random import randint

class PetDog(Dog):
    def __init__(self, name, age, weight) -> None:
        super().__init__(name, age, weight)
        self.trained = False
        
    def train(self):
        print(self.bark())
        self.trained = True 
        
    def play(self, *dogs):
        list_name=[]
        for i in dogs:
            list_name.append(i)
        a = ",".join(list_name)
        print(f"{a} all play together")
        
    def do_a_trick(self):
        if self.train == True:
            a = random.randint(1,4)
            if a == 1:
                print(f"{self.name} does a barrel roll.")
            if a == 2:
                print(f"{self.name} stands on his back legs")
            if a == 3:
                print(f"{self.name} shakes your hand.")
            if a == 4:
                print(f"{self.name}  plays dead.")        
        else:
            print("not train")       
                       
pet_dog = PetDog("Felix",15,105) 
pet_dog.train()    
pet_dog.play("Eva","izmail","Safocol")
pet_dog.do_a_trick()     
                