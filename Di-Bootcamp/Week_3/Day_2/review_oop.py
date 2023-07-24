# class

class Dog :

    def __init__(self,name) :
        self.dog_name = name #object attribute

    def bark(self) :
        print(f"{self.dog_name} barks")

my_dog = Dog("Rex")
print(my_dog.dog_name) #Rex
my_dog.bark()

my_friend_dog = Dog("Lola")
print(my_friend_dog.dog_name) #Lola

# Class is the template
# Object is the instance of the class
#     object contains attributes and methods that
#     were received by the class