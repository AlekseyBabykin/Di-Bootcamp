# Exercise Encapsulation
# add the address attribute as private
# implement a method that return the address of the employee --> getter
# implement a method that modifies the address of the employee, only if the employee is older than 30--> setter
# implement a method create_best_employee that should create a new employee only if their salary is > 30000 --> class metho

class Employee :
    def __init__(self, emp_fn, emp_ln, emp_age, emp_job, emp_salary, emp_address) :
        self.firstname = emp_fn
        self.lastname = emp_ln
        self.age = emp_age
        self.job = emp_job
        self.salary = emp_salary
        self.__address = emp_address

    def get_fullname(self) :
        fullname = self.firstname + " " + self.lastname
        return fullname
    
    def happy_birthday(self) : 
        self.age += 1
    
    def get_promotion(self, promotion_amount) :
        self.salary += promotion_amount

    def __str__(self) :
        return f"The Employee : {self.firstname} {self.lastname} {self.age} years old {self.job} {self.salary} shekels"

    def __gt__(self, other) :
        if self.salary > other.salary :
            return self.firstname
        else :
            return other.firstname
    
    def __add__(self, other) :
        return self.salary + other.salary
    
    @property
    def address (self) :
        return self.__address
    
    @address.setter
    def address (self, new_address) :
        try :
            if self.age > 30 :
                self.__address = new_address
            else :
                raise ValueError("Too young employee")
        except Exception as err:
            print(err)

    @classmethod
    def create_best_employee (cls, emp_fn, emp_ln, emp_age, emp_job, emp_salary, emp_address) :
        if emp_salary >= 30000 :
            return cls(emp_fn, emp_ln, emp_age, emp_job, emp_salary, emp_address)

emp1 = Employee("John", "Smith", 34, "Developer", 30000, "Tel Aviv")
emp1.address = "Ramat Gan"
new_emp =  Employee.create_best_employee("Tom", "Cohen", 34, "Developer", 50000, "Tel Aviv")
