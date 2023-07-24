class Dog :

    def __init__(self,name, age) :
        self.dog_name = name
        self.dog_age = age

    def bark(self) :
        print(f"{self.dog_name} barks")

    def jump(self) :
        print(f"{self.dog_name} jumps")


class GermanShepard (Dog) :

    def __init__(self, name, age) : #override the init method
        super().__init__(name, age) #call the init method from the parent class
        self.big_ears = True

    def run (self) :
        print("the dog can run")

    def jump(self) : #override the jump method
        super().jump() #use the jump method from the parent class
        print("the dog can jump veryyyy high")

# german_shepard_one = GermanShepard("Tom", 2)
# print(german_shepard_one.__dict__)
# #{'dog_name': 'Tom', 'dog_age': 2, 'big_ears': True}
# german_shepard_one.jump() #the dog can jump veryyyy high

class GuideDog(GermanShepard) :

    def guide_people(self) :
        print("I guide people, I'm a good dog")

my_guide_dog = GuideDog("Caramel", 1)
my_guide_dog.bark()
my_guide_dog.run()
my_guide_dog.guide_people()

print(GuideDog.__mro__)

# german_shepard_one = GermanShepard("Tom", 2)
# german_shepard_one.guide_people()
# 'GermanShepard' object has no attribute 'guide_people'

# print(dir(my_guide_dog))

# print(isinstance(my_guide_dog, Dog))
# print(isinstance(my_guide_dog, GermanShepard))
# print(isinstance(my_guide_dog, GuideDog))