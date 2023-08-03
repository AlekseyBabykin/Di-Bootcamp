from menu_item import MenuItem
import psycopg2

connection = psycopg2.connect(
    database="Menu_Items", #your database name
    user='postgres',
    password='123456789',
    host='localhost', #or IP address
    port='5432'
)
class MenuManager:
    
    @staticmethod
    def get_by_name(name):
        try :
            with connection:
                with connection.cursor() as curs: #open and close the cursor
                    query = f"""
                    SELECT item_name,item_price 
                    FROM menu_items 
                    where item_name = '{name}'
                    limit 1
                    """
                    curs.execute(query)
                    data = curs.fetchone()
                    if len(data) == 0:
                        return None
                    else:
                        return print(data)
                    
        except Exception as err :
            print("IN THE EXCEPT", err)     
    @staticmethod
    def all():
        try :
            with connection:
                with connection.cursor() as curs: #open and close the cursor
                    query = f"""
                    SELECT item_name,item_price 
                    FROM menu_items 
                    """
                    curs.execute(query)
                    data = curs.fetchall()
                    return print(data)
                    
        except Exception as err :
            print("IN THE EXCEPT", err) 
                
# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.save()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# print(item2)
# items = MenuManager.all()
# print(items)
# connection.close()        