
import numpy as np
import pandas as pd
# 1.Data Types

# Which of the following is not a mutable data type in Python?
# a) List
# b) Dictionary
# c) Tuple
# d) Set

# tuple

# Lists and Loops

# 1.Using a list comprehension, generate a list of the squares of numbers from 1 to 10,
# but only include squares of even numbers.
# list_even = []
# for i  in range(2,11,2):
#     list_even.append(i*i)
# print(list_even)

# 2.Using the range function, create a list of numbers from 1 to 10, 
# then print numbers that are divisible by both 2 and 3.
# list_1 = list(range(1,11))
# for i in list_1:
#     if i % 2 == 0 and i % 3 == 0:
#         print(i)

# 3.Loop through the provided list of dictionaries and print the names and ages:
# student_list = [
#     {
#     "name": "John", 
#     "age": 24
#     }, 
#     {
#     "name": "Anna", 
#     "age": 22
#     }, 
#     {
#     "name": "Mike", 
#     "age": 25
#     }
# ]
# for i in student_list:
#     print(f'name {i["name"]} age {i["age"]}')

# Function Behavior with *args and **kwargs
# Write a function combine_words that accepts any number of positional arguments and key-value arguments.
# The function should return a single sentence combining all the words provided.

# def combine_words(*args,**kwargs):
#     a = " ".join(args)

#     for j, i in sorted(kwargs.items()):
#         a += ' ' +  i 
#     return a
# print(combine_words("Hello", "world", second="is", third="great!", first="Python"))    
# Object-Oriented Programming (OOP)

# Create a class Vehicle with string attributes type, brand, 
# and integer attribute year. Ensure instances of the vehicle cannot be created 
# if any of these attributes are missing and include a method to display the vehicle’s info. Use dunder method.        

# class Vehicle:
#     def __init__(self,type,brand, years : int) -> None:
#         self.type = type
#         self.brand = brand
#         self.years = years
        
#     def __str__(self) -> str:
#         return f'Point({self.type}, {self.brand} , {self.years})'    
# a = Vehicle('marka','toyota', 2000)
# print(a)


# OOP Inheritance and Decorators
# 1.
class Car:
    def __init__(self,brand, model, mielage : int) -> None:
        self.brand= brand
        self.model = model
        self.mielage = mielage
    def get(self):
        return f"Brand: {self.brand}, Model: {self.model}, Mileage: {self.mileage} miles"    
# 2. 

# class Car:
#     def __init__(self, brand, model, mileage):
#         self.brand = brand
#         self.model = model
#         self.mileage = mileage
    
#     def get_details(self):
#         return f"Brand: {self.brand}, Model: {self.model}, Mileage: {self.mileage} miles"

# class ElectricCar(Car):
#     def __init__(self, brand, model, mileage, battery_capacity):
#         super().__init__(brand, model, mileage)
#         self.__battery_capacity = battery_capacity
    
#     @property
#     def battery_capacity(self):
#         return self.__battery_capacity
    
#     @battery_capacity.setter
#     def battery_capacity(self, new_capacity):
#         if new_capacity > 0:
#             self.__battery_capacity = new_capacity
#         else:
#             print("Battery capacity must be a positive value.")

#     def get_details(self):
#         return f"Brand: {self.brand}, Model: {self.model}, Mileage: {self.mileage} miles, Battery Capacity: {self.battery_capacity} kWh"

# # Example usage
# electric_car = ElectricCar("Tesla", "Model S", 20000, 75.5)
# print(electric_car.get_details())

# Data Science

# Numpy and Pandas Visualization
# 1.
# a = np.arange(1, 10).reshape(3,3)
# print(a)
# 2.
df = pd.DataFrame({'A': [1, 'apple', 3, 4, 'banana'], 'B': [5, 6, 7, 8, 9]})
df['A'] = pd.to_numeric(df['A'], errors='coerce')
df['A'] = df['A'].fillna(df['A'].mean())
# df['A'] = df['A'].replace(0, df['A'].mean())
print(df)