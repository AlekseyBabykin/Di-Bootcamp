# 🌟 Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# print(dict(zip(keys,values)))

# 🌟 Exercise 2 : Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# count = 0
# count_full = 0

# for i in range(len(list(family.items()))):
#   if list(family.values())[i] < 3:
#     count = 0
#     count_full += 0
#   if 3 <= list(family.values())[i]  <= 12:
#     count = 10
#     count_full += 10
#   if list(family.values())[i] > 12:
#     count = 15
#     count_full += 15  
#   print(f"name: {list(family.keys())[i]} a pay {count}")
# print("Full price", count_full)

# 🌟 Exercise 3: Zara

# brand = {"name": "Zara"}
# brand["creation_date"] = 1975
# brand["type_of_clothes"] = ["men", "women", "children", "home"] 
# brand["international_competitors"] = ["Gap", "H&M", "Benetton" ]
# brand["number_stores"] = 7000
# brand["major_color"] = {"France": "blue", "Spain": "red", "US":["pink", "green"]}
# brand["number_stores"] = 2
# print(f"Zaras clients are: {list(brand.values())[2]}")
# brand["country_creation"] = "Spain"
# brand.setdefault("international_competitors", "helloy")
# del brand["creation_date"]
# print(brand["international_competitors"][2]) 
# print(brand["major_color"]["US"])
# print(len(brand))
# print(brand.keys())
# more_on_zara = {"creation_date": 1975, "number_stores": 10000 }
# for i,c in more_on_zara.items():
#   brand[i] = c
# print(brand["number_stores"])  
# print(brand)

# # Exercise 4 : Disney Characters
# disney_users_A = {}
# disney_users_B = {}
# disney_users_C = {}
# disney_users_i = {}
# disney_users_m_p = {}

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# users2 = sorted(users)

# for i in range(len(users)):
#   disney_users_A[users[i]] = i
# print(disney_users_A)  

# for i in range(len(users)):
#   disney_users_B[i] = users[i]
# print(disney_users_B)

# for i in range(len(users2)):
#   disney_users_C[i] = users2[i]
# print(disney_users_C)

# for i in range(len(users)):
#   if "i" in users[i]:
#     disney_users_i[i] = users[i]
# print(disney_users_i)   

# for i in range(len(users)):
#   if users[i][0] == "M" or users[i][0] == "P":
#     disney_users_m_p[i] = users[i]
# print(disney_users_m_p)   
  
