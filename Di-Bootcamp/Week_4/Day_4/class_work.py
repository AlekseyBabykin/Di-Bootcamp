import psycopg2

connectin = psycopg2.connect(database = "Actors", user = "postgres", password = "123456789", host = "localhost", port = "5432")

def retrieve_actors():
    try:
        with connectin:
            with connectin.cursor() as curs:
                query = "SELECT * FROM actors"
                curs.execute(query)
                data = curs.fetchall()
                print(data)
        connectin.close() 
    except Exception as err:
        print("Some ERROR")           
                             
    

def retrieve_actors_cars(last_name):
    try:
        with connectin:
            with connectin.cursor() as curs:
                query = f"""SELECT fist_name, brand, color
                FROM actors
                join car on actor_id = car.owner_id
                where last_name = "{last_name}"""
                curs.execute(query)
                data = curs.fetchall()
                print(data)
        connectin.close() 
    except Exception as err:
        print("Some ERROR")                           
        
retrieve_actors_cars('Alex')        