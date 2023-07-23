class Farm:
    def __init__(self,animal) -> None:
        self.animal = animal
        self.list_name = []
        self.countable = 0
        self.group = {}
        
    def add_animal(self,animal,countable=1):
        if animal not in self.group:
            self.group[animal] = countable
            self.list_name.append(animal)
        else:
             self.group[animal] += 1   
        
    def get_info(self):
        for i in self.group.keys():
            print(f"{i}: {self.group[i]}")    

    def get_animal_types(self):
        return sorted(self.list_name)
    
    def get_short_info(self):
        a,b,c = self.get_animal_types()
        print(f"McDonald s farm has {a}, {b} and {c}")
    
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()           
macdonald.get_animal_types()
macdonald.get_short_info()