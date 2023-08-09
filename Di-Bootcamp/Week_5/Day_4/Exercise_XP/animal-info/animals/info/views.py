from django.shortcuts import render
from django.http import HttpResponse
from .data import animals, families
# Create your views here.
def display_all_animals(request):
    data = []
    for i in animals:
        data.append(f"{i['name']} {i['legs']} {i['weight']} {i['height']} {i['speed']}")
    return HttpResponse(data)

def display_all_families(request):
    data = []
    for i in families:
        data.append(i['name'])
    return HttpResponse(data)

def display_one_animal(request, animal_id:int):
    data = []
    for i in animals:
        if i["id"] == animal_id:
            data.append(f"{i['name']} {i['legs']} {i['weight']} {i['height']} {i['speed']}") 
    return HttpResponse(data)    

def display_animal_per_family(request, family_id:str):
    data = []
    for f in families:
        for a in animals:
            if a["family"] == f["id"] and f["id"]==family_id :
                data.append(a["name"]) 
    return HttpResponse(data)
        