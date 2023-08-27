from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import *

# Create your views here.
@csrf_exempt
def create_profile(request):
    if request.method == "POST":
        data = request.POST
        name = data['name']
        email = data['email']
        
        # print(f"NAME = {name}")
        # print(f"EMAIL = {email}")
        
        if name and email:
            profile = Profile.objects.create(name=name, email=email)
            return JsonResponse(
                {"success": True, "message": "Profile created successfully"}
            )
        else:
            return JsonResponse(
                {"success": False, "message": "Name and email are required"}
            )
    else:
        return JsonResponse(
            {"success": False, "message": "Only POST requests are allowed"}
        )
@csrf_exempt        
def delete_profile(request, id:int):
    try:
        book_info = Profile.objects.get(id=id)
        book_info.delete()
        return JsonResponse("object delete")
    except Profile.DoesNotExist:
        return JsonResponse("no such category")       