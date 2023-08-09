import json
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
name = 'Bob Smith'
age = 35
country = 'USA'

people = ['bob','martha', 'fabio', 'john']


def display_person(request):
    return HttpResponse(f"{name} , {age} , {country}")


def display_people(request):
    # a = json.dumps(people)
    d = sorted([i.capitalize() for i in people])
    c = "\n".join(d)
    return HttpResponse(c)

all_people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]

def display_all_people(request):
    data = sorted(all_people, key=lambda x: x['age'])
    return HttpResponse(data)
    

            