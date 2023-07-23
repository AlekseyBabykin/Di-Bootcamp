# 🌟 Exercise 1: Cats

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
        
# one = Cat("maskA",15)
# two = Cat("alex",7)
# three = Cat("Margo",2)

# def the_oldest(cat_name,cat_age):
#     age =[]
# def old_cat(cat_list: list[Cat]):
#     if len(cat_list) == 0:
#         return 0           
#     old_cat = cat_list[0]
    
#     for cat in cat_list:
#         if cat.age > old_cat.age:
#             old_cat = cat
#     return old_cat
# oldest = old_cat([one,two,three])      
# print(oldest.name)  

# 🌟 Exercise 2 : Dogs

# class Dog:
#     def __init__(self,name,height):
#         self.name = name
#         self.height = height
    
#     def bark(self):
#         print(f"{self.name} goes woof!") 
#     def jump(self):
#         print(f"{self.name} jumps {self.height*2}  cm high!.")
    
# davids_dog = Dog("Rex",50)
# davids_dog.bark()
# davids_dog.jump()         

# sarahs_dog = Dog("Teacup",20)
# print(sarahs_dog.name,sarahs_dog.height)
# sarahs_dog.bark()
# sarahs_dog.jump()

# def bigger(dog_list: list[Dog]):
#     if len(dog_list) == 0:
#         return 0
#     bigger = dog_list[0]
    
#     for i in dog_list:
#         if i.height > bigger.height:
#             bigger = i
#     return bigger        

# all_dog = bigger([sarahs_dog,davids_dog])
# print(all_dog.name)

# 🌟 Exercise 3 : Who’s The Song Producer?

# class Song:
#     def __init__(self,lyrics):
#         self.lyrics = lyrics
        
#     def sing_me_a_song(self):
#         for i in self.lyrics:
#             print(i, end=" ")
            
# stairway= Song(["There s a lady who's sure","all that glitters is gold", "and she s buying a stairway to heaven"])            
# stairway.sing_me_a_song()               

# Exercise 4 : Afternoon At The Zoo

# animals = ['Baboon', "Bear", 'Cat', 'Cougar', 'Eel', 'Emu', "Ape"]

# # {1: ['Ape'], 2: ['Baboon', 'Bear'], 3: ['Cat', 'Cougar'], 4: ['Eel', 'Emu']}

# animals_sorted = sorted(animals)

# # ['Ape', 'Baboon', 'Bear', 'Cat', 'Cougar', 'Eel', 'Emu']

# print(animals_sorted)

# animals_groups = {}

# # Creating initial reference
# animal_check = animals_sorted[0] # Ape, first animal
# group = 1 # first group

# animals_groups[group] = [animal_check] # adding initial group with the initial animal into the dictionary
# # {1: ['Ape']}

# for animal in animals_sorted[1:]: # Cat
#     if animal_check[0] == animal[0]: # B == C
#         animals_groups[group].append(animal)
#     else:
#         group += 1 # 3
#         animals_groups[group] = [animal] # {1: ['Ape'], 2: ['Baboon', 'Bear'], 3: {'Cat'}}
#         animal_check = animal # Cat 

# print(animals_groups)

# class Zoo:
#     def __init__(self,zoo_name: str):
#         self.zoo_name = zoo_name
#         self.animals = []
#         self.animals_groups = {}
    
#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)     
    
#     def get_animals(self):
#         for i in self.animals:
#             print(i, end=",")
    
#     # def sell_animal(self,animal_sold):
#     #     # self.animals.remove(animal_sold)              
        
#     def sort_animals(self):
#         animals_sorted = sorted(self.animals)    
#         animal_check = animals_sorted[0] # Ape, first animal
#         group = 1 # first group

#         self.animals_groups[group] = [animal_check] # adding initial group with the initial animal into the dictionary
# # {1: ['Ape']}

#         for animal in animals_sorted[1:]: # Cat
#             if animal_check[0] == animal[0]: # B == C
#                 self.animals_groups[group].append(animal)
#             else:
#                 group += 1 # 3
#                 self.animals_groups[group] = [animal] # {1: ['Ape'], 2: ['Baboon', 'Bear'], 3: {'Cat'}}
#                 animal_check = animal # Cat 
        
    
#     def get_groups(self):
#         for i in self.animals_groups.keys():
#             print(f'Group {i}: {self.animals_groups[i]}')

# ramat_gan_safari = Zoo("alex") 
# ramat_gan_safari.add_animal(['Baboon', "Bear", 'Cat', 'Cougar', 'Eel', 'Emu', "Ape"])    
# ramat_gan_safari.get_animals() 
# # ramat_gan_safari.sell_animal('Cat')
# ramat_gan_safari.sort_animals() 
# ramat_gan_safari.get_groups()           