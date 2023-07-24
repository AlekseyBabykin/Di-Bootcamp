from employee import Employee, Developer
from random import randint

# emp1 = Employee("Lea", "Smith", 20, "developer", 15000)
# emp1.show_info()
# emp1.happy_birthday()
# emp1.get_promotion(2000)
# emp1.show_info()

emp2 = Developer("John", "Doe", 20)
emp3 = Developer("Tom", "Cohen", 34)

emp2.show_info()
emp3.show_info()

emp2.add_skills("js", "python", "react")
emp3.add_skills("JAVA", "PHP")

emp2.coding_with_partner(emp3)

emp2.coding_skills #['js', 'python', 'react']