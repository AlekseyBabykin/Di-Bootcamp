# import random

# Part TWO:
    
# class Card:
#     lst_suit = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]
#     lst_suit = [str(i) for i in lst_suit] 
#     values_card = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    
# class Deck:
   
#     lst_all_card = []
    
    
#     def shuffle(self):
#         a = Card()
#         for i in a.values_card:
#             for j in range(len(a.lst_suit)):
#                 Deck.lst_all_card.append(a.lst_suit[j]+i) 
#         random.shuffle(self.lst_all_card)          
#         return self.lst_all_card
    
#     def deal(self):
#         a = self.shuffle()
        
#         while True:
#             print("(___) give me card")
#             print("(b) exit")
#             temp = input()
#             if temp == b:
#                 break
#             else:
#                 print(Deck.lst_all_card)
#                 print(a.pop(0))
        
        
   
   
# b= Deck()
# print(b.deal())        


# Part ONE:
    
# 1.What is a class?
# this is a logical group of data and functions.
# It makes it possible to create data structures that contain arbitrary content and, 
# therefore, are easily accessible.

# 2. What is an instance?
# A separate object is a representative of a certain class.

# 3.What is encapsulation?
# hiding properties and methods, as a result of which they become private. 
# This means that access to them is limited either by the limits of the class or the module.

# 4.What is abstraction?
# In essence, Abstraction focuses on hiding the internal implementations of a process or method from the user. 
# Thus, the user knows what he is doing, but does not know how the work is being done.

# 5.What is inheritance?
# Inheritance allows you to create a new class based on an existing class. 
# The new class being created is called a subclass (child or derived class), 
# and the existing class from which the child class is derived is called a superclass (parent or base class).

# 6.What is multiple inheritance?
# one class can inherit from several parent classes at once.

# 7.What is polymorphism?
# allows us to define methods in the child class that have the same name as the methods in the parent class. When inheriting, the child class inherits the methods of the parent class. 
# However, you can change the method in the child class that it inherited from the parent class.

# 8.What is method resolution order or MRO?
# The method of the Z.mod() class returns us a list of classes exactly in the order in which Python will search 
# for methods in the class hierarchy until it finds the right one or throws an error