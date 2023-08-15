from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .serializers import StudentSerializer
from .models import Student
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class student_list(APIView):
    def get(self, request, *args, **kwargs):
        date_joined_param = request.GET.get("date_joined")
        print(date_joined_param)
        # print(Student.objects.filter(date_joined=date_joined_param))
        if date_joined_param:
            queryset = Student.objects.filter(date_joined=date_joined_param)
        else:    
            queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
class student_detail(APIView):
    def get(self, request, pk, *args, **kwargs):
        try:
            queryset = Student.objects.get(id=pk)
            serializer = StudentSerializer(queryset)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        
    def put(self, request, pk, *args, **kwargs):
        article = Student.objects.get(id=pk)
        serializer = StudentSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    # NEW
    def delete(self, request, pk, *args, **kwargs):
        try:
            article = Student.objects.get(id=pk)
            article.delete()
            return Response(f"Student {id} delete successful")    
        except:
            return Response(status=status.HTTP_204_NO_CONTENT) 