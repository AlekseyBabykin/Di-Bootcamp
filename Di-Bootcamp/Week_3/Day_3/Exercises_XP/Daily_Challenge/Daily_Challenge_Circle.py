from cmath import pi



class Circle:
    list_full = []
    def __init__(self, radius) -> None:
        self.radius = radius
        Circle.list_full.append(self.radius)  
    
    def circles_area(self):
        result = 2 * pi * self.radius * self.radius
        return result 
    
    def __add__(self,other):
        self.radius = self.radius + other.radius
        return self.radius
    
    def __gt__(self,other):
        return self.radius > other.radius
    
    def __it__(self,other):
        return self.radius < other.radius
 
        
    def __eq__(self,other):
        return self.circles_area() == other.circles_area()
    
    @classmethod
    def add_circle_by_radius(cls, radius):
        return cls(radius)

    @classmethod
    def add_circle_by_diameter(cls, diameter):
        radius = diameter / 2
        return cls(radius)

circle_1 = Circle(5)


circle_2 = Circle(10)

print(circle_1 + circle_2)
print(circle_1 < circle_2)
circle_3 = Circle(25)
circle_3
print(circle_3 == circle_1)
print(sorted(Circle.list_full))
c= Circle()

        