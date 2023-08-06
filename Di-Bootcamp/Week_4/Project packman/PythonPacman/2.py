import json
import random
import requests





response = requests.get("https://api.chucknorris.io/jokes/random")
todos = json.loads(response.text)
print(todos['value'])


# def save(*info):
#         # print(f"adding an {self.name} and {self.price}...")

#     try :
#         with connection:
#             with connection.cursor() as curs: #open and close the cursor
#                 query = f"""
#                 INSERT INTO API (name, capital,flag,subregion,population)
#                 VALUES {info}
#                 """
#                 curs.execute(query)
#                 connection.commit() #actually commit the data

#     except Exception as err :
#         print("IN THE EXCEPT", err)
        
random_lst = random.sample(range(250),10)   

# for i in random_lst:
#     save(todos[i]['name']['common'], todos[i]['capital'][0], todos[i]['flag'], todos[i]['subregion'], todos[i]['population'])      

# connection.close()    