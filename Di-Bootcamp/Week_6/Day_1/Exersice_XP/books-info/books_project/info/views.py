from django.shortcuts import render
from django.http import JsonResponse
from .models import Book
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
def list_books(request):
    books_data = []
    for i in Book.objects.all():
        books_data.append({'title': i.title, 'author': i.author, 'published_date': i.published_date, 'description': i.description, 'page_count':i.page_count,'categories': i.categories, 'thumbnail_url':i.thumbnail_url })
    return JsonResponse({'books': books_data})

def book_detail(request, book_id:int):
    try:
        book_info = Book.objects.get(id=book_id)
        content = {}
        content["title"]=book_info.title
        return JsonResponse(content)
    except Book.DoesNotExist:
        return JsonResponse("no such category")

@csrf_exempt
def create_book(request):
    if request.method == "POST":
        info = {**request.POST}
        print(info)