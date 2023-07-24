# Exercise 1 : Family

class Family:
    def __init__(self,last_name, members ) -> None:
        self.members = members
        self.last_name = last_name
        
    def born(self, new_member):
        self.members.append(new_member)
        print(f"congratulating the family {new_member['name']}") 
        
    def is_18(self): 
        for i in self.members:
            if i["age"] <= 18:
                i["is_child"] = True
            else: 
                i["is_child"] = False        
        return i["is_child"]
    
    def family_presentation(self):
        list_name =[]
        for i in self.members:
            list_name.append(i["name"])
        result = ",".join(list_name)    
        print(f"last_name: {self.last_name} all names: {result} ")
    
# a = [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# ]
# family_1 = Family("Pupkin",[
#      {'name':'Michael','age':35,'gender':'Male','is_child':False},
#      {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#  ])
# a = {'name':'Fedor','age':3,'gender':'Male','is_child':True}
# family_1.born(a)
# print(family_1.is_18())
# family_1.family_presentation()

# Exercise 2 : TheIncredibles Family

class TheIncredibles(Family) :
    def use_power(self):
        try:
            for i in self.members:
                if i["age"] > 18:
                    print(f"{i['name']} power: {i['power']}")
        except EOFError:
            print(f"{i['name']} < 18")           
            
    def incredible_presentation(self):
        super().family_presentation()
        list_incredible = []
        list_power = []
        for i in self.members:
            list_incredible.append(i['incredible_name'])
            list_power.append(i['power'])
        result = ",".join(list_incredible)
        result2 = ",".join(list_power)    
        print(f" all incredible names: {result} and power: {result2} ")      
        
fam = TheIncredibles("Babykin",[
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
])
fam.incredible_presentation()        
fam.born({'name':'TATA','age':40,'gender':'Male','is_child':False,'power': "Unknown Power",'incredible_name':'Lola'})
fam.incredible_presentation() 