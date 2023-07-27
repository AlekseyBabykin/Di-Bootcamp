import requests
import json


iss = requests.get("http://api.open-notify.org/iss-now.json")

def get_data():
    lst_iss = []
    try:
        for _ in range(5):
            iss = requests.get("http://api.open-notify.org/iss-now.json")
            if iss.status_code != 200:
                raise Exception (" no data found")
            else:
                python_dict = iss.json()
                lst_iss.append(python_dict)
                print(f"lactitude {python_dict['iss_position']['latitude']}")
        with open("iss.json", "w") as file:
            json.dump(lst_iss,file,indent=2)            
    except Exception as err:
        print(err)        
       
get_data()        