
import time

import requests


def get_data(address):
    try:
        t1 = time.time()
        response = requests.get(address)
        t2 = time.time()
        delta_t = t2 - t1
        if response.status_code >= 202:
            print(response.status_code, end=', ')
            raise Exception("no data found")
        else:
            print(f'{address} : took {delta_t}s')
    except Exception as err:
        print(err)




get_data("http://google.com")
get_data("https://www.ynet.co.il/")
get_data("https://www.imdb.com/")
get_data("https://www.youtube.com/")