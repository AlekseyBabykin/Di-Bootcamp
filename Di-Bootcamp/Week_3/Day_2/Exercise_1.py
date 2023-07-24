# Exercise 1 : Basic Classes

class Employee :
    def __init__(self, firstname, lastname, age, job, salary=0) -> None:
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
    
    def get_fullname(self) :
        return f"{self.firstname} {self.lastname}"
    
    def happy_birthday(self) :
        return self.age + 1
    
    def get_promotion(self, promotion_amount) :
        self.salary += promotion_amount
        
    def show_info(self) : 
        print(self.firstname,self.lastname,self.age,self.salary)        
        
user_1 = Employee("Lea", "Smith", 30, "developer")  
user_2 = Employee("David ", "Schartz", 20, "teacher")      
print(user_1.get_fullname())
print(user_1.happy_birthday())
user_1.get_promotion(15000)
user_1.show_info()

# Exercise 2 : Inheritance

class Developer (Employee) :
    def __init__(self, firstname, lastname, age, job="developer", salary=15000) -> None:
        super().__init__(firstname, lastname, age, job, salary)
        self.coding_skills =[]
    def add_skils(self, *skills) :
        self.coding_skills.extend(skills)
    
    def coding(self) :
        all_skills = ",".join(self.coding_skills)
        print(f" {self.get_fullname} {all_skills}")    
developer_1 = Developer("Tom","Cruiz", 30)  
developer_2 = Developer("Angelina","Jolie", 23) 
print(dir(developer_1))     