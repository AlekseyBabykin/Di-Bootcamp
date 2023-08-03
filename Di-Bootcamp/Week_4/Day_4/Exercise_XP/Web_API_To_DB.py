import json
import random
import requests
import psycopg2


    
connection = psycopg2.connect(
    database="Web_API_To_DB", #your database name
    user='postgres',
    password='123456789',
    host='localhost', #or IP address
    port='5432'
)


response = requests.get("https://restcountries.com/v3.1/all")
todos = json.loads(response.text)


def save(*info):
        # print(f"adding an {self.name} and {self.price}...")

    try :
        with connection:
            with connection.cursor() as curs: #open and close the cursor
                query = f"""
                INSERT INTO API (name, capital,flag,subregion,population)
                VALUES {info}
                """
                curs.execute(query)
                connection.commit() #actually commit the data

    except Exception as err :
        print("IN THE EXCEPT", err)
        
random_lst = random.sample(range(250),10)   

for i in random_lst:
    save(todos[i]['name']['common'], todos[i]['capital'][0], todos[i]['flag'], todos[i]['subregion'], todos[i]['population'])      

connection.close()    