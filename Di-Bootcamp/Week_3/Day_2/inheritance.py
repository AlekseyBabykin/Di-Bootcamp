class Dog :

    def __init__(self,name, age) :
        self.dog_name = name #object attribute
        self.dog_age = age #object attribute

    def bark(self) :
        print(f"{self.dog_name} barks")

    def jump(self) :
        print(f"{self.dog_name} jumps")

# inheritance
# the GermanShepard class inherits from the Dog class
# the GermanShepard class is a child class, 
# the Dog class is the parent class
class GermanShepard (Dog) :

    def run (self) :
        print("the dog can run")

# it's calling the init method from the Dog class
german_shepard_one = GermanShepard("Tom", 2)
german_shepard_one.bark()
print(dir(german_shepard_one))
# [..., 'bark', 'dog_age', 'dog_name', 'jump']
german_shepard_one.run()

# my_dog = Dog("Rex", 10)
# my_dog.run() #not possible