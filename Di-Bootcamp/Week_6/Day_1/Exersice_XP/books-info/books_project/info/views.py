from django.shortcuts import render
from django.http import JsonResponse
from .models import Book
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def list_books(request):
    return JsonResponse(Book.objects.all())

def book_detail(request, book_id:int):
    try:
        book_info = Book.objects.get(book_id=id)
        content = {}
        for i in book_info:
            content[book_id].apend(i) 
        return JsonResponse(content)
    except Book.DoesNotExist:
        return JsonResponse("no such category")

@csrf_exempt
def create_book(request):
    if request.method == "POST":
        info = {**request.POST}
        print(info)