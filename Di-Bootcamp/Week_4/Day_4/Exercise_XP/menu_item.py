import psycopg2


    
connection = psycopg2.connect(
    database="Menu_Items", #your database name
    user='postgres',
    password='123456789',
    host='localhost', #or IP address
    port='5432'
)


class MenuItem():
    def __init__(self, name = None, price = None):
        self.name = name
        self.price = price
        
    def save(self):
        # print(f"adding an {self.name} and {self.price}...")

        try :
            with connection:
                with connection.cursor() as curs: #open and close the cursor
                    query = f"""
                    INSERT INTO menu_items (item_name, item_price)
                    VALUES ('{self.name}',{self.price})
                    """
                    curs.execute(query)
                    connection.commit() #actually commit the data

        except Exception as err :
            print("IN THE EXCEPT", err)
        
    def delete(self,name):
        try :
            with connection:
                with connection.cursor() as curs: #open and close the cursor
                    query = f"""
                    DELETE FROM menu_items where item_name = '{name}'
                    """
                    curs.execute(query)
                    connection.commit() #actually commit the data

        except Exception as err :
            print("IN THE EXCEPT", err)        
   
    def update(self,name = None,price = None):
        try :
            with connection:
                with connection.cursor() as curs: #open and close the cursor
                    if price == None:
                        query = f"""
                        UPDATE menu_items set item_name = '{name}' where item_name = '{self.name}'
                        """
                    elif name == None:
                        query = f"""
                        UPDATE menu_items set item_price = {price} where item_name = '{self.name}'
                        """
                    elif price != None and name != None:
                        query = f"""
                        UPDATE menu_items set item_price = {price} and item_name = '{name}' where item_name = '{self.name}'
                        """
                    else :
                        print("you are missing the name or the price")
                    curs.execute(query)
                    connection.commit() #actually commit the data

        except Exception as err :
            print("IN THE EXCEPT", err)  
                
# a = MenuItem("Marfa",187)  
# # a.save()       
# a.update(price=2546)  
# a.delete()
# connection.close()