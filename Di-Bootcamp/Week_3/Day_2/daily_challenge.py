class Farm :
    def __init__(self, name) :
        self.farm_name = name
        self.animals = {}

    def add_animal(self, animal, amount=1):
        if animal in self.animals :
             self.animals[animal] += amount
        else :
            self.animals[animal] = amount

    def get_info(self) :
        print(f"{self.farm_name}'s farm")
        for animal, amount in self.animals.items() :
            print(f"{animal} : {amount} \n")
        print("E-I-E-I-0!")

    def get_animal_types(self) :
        keys_dictionary = self.animals.keys() #list
        return sorted(keys_dictionary) #["cow", "goat", "sheep"]
    
    def get_short_info(self) :
        list_keys = self.get_animal_types()[:] #["cow", "goat", "sheep"]
        for animal, amount in self.animals.items() :
            if amount > 1 :
                position = list_keys.index(animal)
                list_keys[position] += "s"

        animals = " , ".join(list_keys[:-1]) #from the first to the one before the last one 
        sentence = f"In the farm there is {animals} and {list_keys[-1]}"
        print(sentence)
            

my_farm = Farm("McDonald")
my_farm.add_animal("sheep", 2)
my_farm.add_animal("cow", 5)
my_farm.add_animal("goat")
my_farm.add_animal("sheep")
# print(my_farm.animals)
my_farm.get_info()
my_farm.get_short_info()

# {'sheep': 3, 'cow': 5, 'goat': 1}