import datetime
import random
import string
from faker import Faker
# 🌟 Exercise 1: Currencies

# class Currency:
#     def __init__(self, currency, amount=0):
#         self.currency = currency
#         self.amount = amount
        
#     def __add__(self,other_currency):
#         if isinstance(other_currency,int) :
#             return self.amount + other_currency
#         if self.currency == other_currency.currency:
#             return self.amount + other_currency.amount
#         else:
#             return "error currency"
    
#     def __str__(self) -> str:
#         return f"{self.amount} {self.currency}"
        
#     def __int__(self):
#         return self.amount
    
#     def __repr__(self) -> str:
#         return f'Call {self.currency} and {self.amount}'
    
#     def __iadd__(self,other):
#         if isinstance(other,int) :
#             self.amount += other
#             return self
#         self.amount += other.amount
#         return self
    
      
            
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)
# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1 + 5)
# print(c1 + c2)
# print(c1)    
# c1 += 5
# print(c1)
# c1 += c2  
# print(c1)      
# print( c1 + c3)

# 🌟 Exercise 3: Random Module

# def random_module():
#     while True:
#         num = int(input("write number 1 betwen 100\n"))
#         a_random = random.randrange(1,100)
#         if num == 0:
#             break
#         if num == a_random:
#             print("You win")
#             break
#         else:
#             print("try again")

# random_module()            
#  Exercise 4: String Module


# def random_char(y):
#     return ''.join(random.choice(string.ascii_letters) for x in range(y))

# print (random_char(5))
      
# 🌟 Exercise 5 : Current Date  
# def current_date():
#     return datetime.date.today()
# print(current_date())  

# Exercise 6 : Amount Of Time Left Until January 1st
# def amount_Of_Time():
#     result = datetime.date(2024, 1, 1) - datetime.date.today()
#     return f"new Year wiil be {result}"
# print(amount_Of_Time())

# Exercise 7 : Birthday And Minutes

# def birthday_And_minutes():
#     print('Enter your birth date in the following format: \nDD/MM/YYYY')
#     birth_date = input()

#     birth_day = int(birth_date.split('/')[0])
#     birth_month = int(birth_date.split('/')[1])
#     birth_year = int(birth_date.split('/')[2])

#     current_year = 2023
#     current_month = 7
#     current_day = 25

#     extra_days = ((current_year - birth_year) // 4) + ((current_year - birth_year) // 400) + 1

#     this_year_days = 67 #Jan=31, Feb=28, Mar=8th

#     birth_year_days = birth_day + ((birth_month - 1)*30)

#     total_days = ((current_year - birth_year)*365) + (this_year_days + birth_year_days) + extra_days

#     return print(total_days)
# birthday_And_minutes()

# Exercise 8 : Faker Module

fake = Faker()

list_test = [{},{},{}]

def faker_module(list_test):
    list_test[0]["name"] = fake.name()
    list_test[1]["address"] = fake.address()
    list_test[2]["language_code"] = fake.language_code()
    print(list_test)    
faker_module(list_test)    