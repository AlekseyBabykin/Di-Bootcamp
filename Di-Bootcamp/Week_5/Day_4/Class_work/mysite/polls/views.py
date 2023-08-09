from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    message = "Hello, this is my first page"
    return HttpResponse(message)

def post(request, post_id:int):
    data = {
        1:"This is the 1st post",
        2: "This is the 2nd post"   
    }
    post = data.get(post_id, "No such post")
    return HttpResponse(post)

def about(request):
    data = "I like banana"
   
    return HttpResponse(data)

def about_website(request):
    data = "Happy new Years"
    return HttpResponse(data)