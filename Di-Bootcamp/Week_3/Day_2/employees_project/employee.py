class Employee :
    def __init__(self, fname, lname, age, job, salary, address):
        self.firstname = fname
        self.lastname = lname
        self.age = age
        self.job = job
        self.salary = salary
        self.__address = address
    
    def __gt__(self,other):
        if self.salary > other.salary:
            return self.salary    
        else:
            return other.salary
        
    def __add__(self,other):
        return self.salary + other.salary
    
    def __str__(self) -> str:
        pass
          
    def get_fullname(self) :
        return f"{self.firstname} {self.lastname}"
    
    def happy_birthday(self) :
        self.age += 1

    def get_promotion(self, promotion_amount):
        self.salary += promotion_amount
    
    def show_info(self) :
        print(f"{self.get_fullname()} - age : {self.age} - job : {self.job} - salary : {self.salary}")

    @classmethod
    # def create_best_employee(cls,fname, lname, age, job, salary) :
    def create_best_employee(cls,fname, lname, age, job, salary, adress) :
        if salary > 30000:
            return cls(fname, lname, age, job, salary, adress)
    
    @property    
    def address(self):
        return self.__address
    
    @address.setter  
    def address(self,address):
        if self.age > 30:
            self.__address = address
            
    # def __str__(self) -> str:
    #     return self   
                

class Developer(Employee) :
    def __init__(self, fname, lname, age, job="Developer", salary=15000) :
        super().__init__(fname, lname, age, job, salary)
        self.coding_skills = []

    def add_skills(self, *skills) : 
        # * is args meaning you can pass as many arguments as 
        # you want to the function and those arguments 
        # will be pushed to a tuple
        self.coding_skills.extend(skills)
        # extent pushes each element of the tuple to the list
    
    def coding(self) :
        all_skills = ",".join(self.coding_skills)
        print(f"The developer named {self.get_fullname()} knows the languages {all_skills}")
    
    def coding_with_partner(self, other_developer) :
        self.coding()
        other_developer.coding()

    def get_promotion(self, promotion_amount):
        self.salary *= promotion_amount

    
a = Employee("mark","skjfjs",35,"dev",10000, "Piter")        
a.address = "Moscow" 
print(a.address)