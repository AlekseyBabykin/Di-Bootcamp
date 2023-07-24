# 🌟 Exercise 1 : Pets
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese (Cat):
#     pass

# Bengal_1 = Bengal("Mix",5)
# Chartreux_1 = Chartreux("Marfa",10)
# Siamese_1 = Siamese("Alex",32)

# all_cats = []
# all_cats.append(Bengal_1)
# all_cats.append(Chartreux_1)
# all_cats.append(Siamese_1)
# sara_pets = Pets(all_cats)
# sara_pets.walk()

# 🌟 Exercise 2 : Dogs

class Dog():
    def __init__(self,name, age, weight) -> None:
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name}"
    
    def run_speed(self):
        return self.weight/self.age*10
    
    def fight(self,other_dog): 
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return self.name         
        else:
            return other_dog.name
Dod_1 = Dog("Albert",22,60)
Dod_2 = Dog("Misha",15,15)
Dod_3 = Dog("Iosi",55,99)
print(Dod_1.bark())
print(Dod_1.run_speed())
print(Dod_1.fight(Dod_2))

print(Dod_2.bark())
print(Dod_2.run_speed())
print(Dod_2.fight(Dod_3))

print(Dod_3.bark())
print(Dod_3.run_speed())
print(Dod_3.fight(Dod_1))
                