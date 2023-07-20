# Exercise 1 : When Will I Retire ?
from datetime import date

# a = date.fromisoformat("1947-05-01")
# women = date.fromisoformat("2009-05-01")
# men = date.fromisoformat("2009-05-01")
# b = date.fromisoformat("2023-07-19")
# # print(b-a)
# def get_age(year, month, day):
#     year = str(year)
#     month = str(month)
#     day = str(day)
#     data = year + "-" + month + "-" + day
#     result = date.fromisoformat("2023-07-19") - date.fromisoformat(data)
#     return result

# def can_retire(gender, year):
#     if gender == "w":
#         if get_age(year) - get_age("1961-07-19") >= 0:
#             print("you  old")
#         else:
#             print("NO")    
#     if gender == "m":
#         if get_age(year) - get_age("1956-07-19") >= 0:
#             print("you  old")
#         else:
#             print("NO")   
# can_retire("m","1951-08-26")            

cubes = {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}

cubes = {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
print(cubes.pop(4))
print(cubes)
print(cubes.popitem())
print(cubes)
cubes.clear()
print(cubes)