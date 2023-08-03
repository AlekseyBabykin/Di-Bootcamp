from menu_item import MenuItem
from menu_manager import MenuManager

import psycopg2

connection = psycopg2.connect(
    database="Menu_Items", #your database name
    user='postgres',
    password='123456789',
    host='localhost', #or IP address
    port='5432'
)

def show_user_menu():
    print("View an Item (V)")
    print("Add an Item (A)")
    print("Delete an Item (D)")
    print("Update an Item (U)")
    print("Show the Menu (S)")
    return  input()
    
def add_item_to_menu():
    try:
        name = input("write name")
        price = int(input("write price"))
        MenuItem(name,price).save() 
        print("element add OK")    
    except ValueError:
        print("promlem add")    
        
def remove_item_from_menu():
    try:
        name = input("write name")
        MenuItem().delete(name) 
        print("element delete OK")    
    except ValueError:
        print("promlem delete")  
    
def update_item_from_menu():
    try:
        name = input("write name")
        price = int(input("write price"))
        MenuItem().update(name,price) 
        print("element delete OK")    
    except ValueError:
        print("promlem delete") 
                
def show_restaurant_menu():
    while True:
        a = show_user_menu()
        if a == "V" or a == "v":
            name = input("write name")
            MenuManager.get_by_name(name) 
        if a == "A" or a == "a":
            add_item_to_menu()
        if a == "D" or a == "d":
            remove_item_from_menu()
        if a == "U" or a == "u":
            update_item_from_menu() 
        if a == "S" or a == "s":
            MenuManager.all()
        if a == "0":
            show_user_menu()
            break    
            
show_restaurant_menu()        