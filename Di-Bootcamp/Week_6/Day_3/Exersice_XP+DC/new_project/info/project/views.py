import statistics
from django.shortcuts import render
from .serializers import *
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User

from rest_framework.permissions import IsAuthenticated, IsAdminUser, DjangoModelPermissions
from rest_framework.decorators import permission_classes
from .permissions import IsOwnerPermission


# Create your views here.
class EmployeeAPIView(APIView):
    
    permission_classes = [IsOwnerPermission]
    
    def get(self, request, *agrs, **kwargs):
        id = kwargs.get('pk', None)
        if id is not None:
            try:
                employee = Employee.objects.get(id=id)
                serializers = EmployeetSerializer(employee)
            except Department.DoesNotExist:
                return Response(status=statistics.HTTP_404_NOT_FOUND)    
        else:
            employee = Employee.objects.all()
            serializers = EmployeetSerializer(employee, many=True)
        return Response(serializers.data)
    
    def post(self, request, *agrs, **kwargs):
        serializers = EmployeetSerializer(data=request.data)
        
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors)
        
    def put(self, request, pk, *agrs, **kwargs):
        employee = Employee.objects.get(id=pk)
        serializers = EmployeetSerializer(instance=employee, data=request.data) 
        self.check_object_permissions(request, employee)
        serializers.save()
        return Response(serializers.data)        
    
    def delete(self, request, pk, *agrs, **kwargs):
        employee = Employee.objects.get(id=pk)
        employee.delete()
        return Response('you delete')
    
class ProjectAPIView(APIView):
    permission_classes = (IsOwnerPermission,)
    
    def get(self, request, *agrs, **kwargs):
        id = kwargs.get('pk', None)
        if id is not None:
            try:
                employee = Project.objects.get(id=id)
                serializers = ProjectSerializer(employee)
            except Department.DoesNotExist:
                return Response(status=statistics.HTTP_404_NOT_FOUND)    
        else:
            project = Project.objects.all()
            serializers = ProjectSerializer(project, many=True)
        return Response(serializers.data)
    
    def post(self, request, *agrs, **kwargs):
        serializers = ProjectSerializer(data=request.data)
        
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors)
        
    def put(self, request, pk, *agrs, **kwargs):
        project = Project.objects.get(id=pk)
        serializers = ProjectSerializer(instance=project, data=request.data) 
        serializers.save()
        return Response(serializers.data)        
    
    def delete(self, request, pk, *agrs, **kwargs):
        project = Project.objects.get(id=pk)
        project.delete()
        return Response('you delete')    
    
class TaskAPIView(APIView):
    permission_classes = (IsOwnerPermission,)
    
    def get(self, request, *agrs, **kwargs):
        id = kwargs.get('pk', None)
        if id is not None:
            try:
                employee = Task.objects.get(id=id)
                serializers = TaskSerializer(employee)
            except Department.DoesNotExist:
                return Response(status=statistics.HTTP_404_NOT_FOUND)    
        else:
            task = Task.objects.all()
            serializers = TaskSerializer(task, many=True)
        return Response(serializers.data)
    
    def post(self, request, *agrs, **kwargs):
        serializers = TaskSerializer(data=request.data)
        
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors)
        
    def put(self, request, pk, *agrs, **kwargs):
        task = Task.objects.get(id=pk)
        serializers = TaskSerializer(instance=task, data=request.data) 
        serializers.save()
        return Response(serializers.data)        
    
    def delete(self, request, pk, *agrs, **kwargs):
        project = Task.objects.get(id=pk)
        project.delete()
        return Response('you delete')    
    
class DepartmentAPIView(APIView):
    permission_classes = (IsOwnerPermission, )
    def get(self, request, *agrs, **kwargs):
        id = kwargs.get('pk', None)
        if id is not None:
            try:
                employee = Department.objects.get(id=id)
                serializers = DepartmentSerializer(employee)
            except Department.DoesNotExist:
                return Response(status=statistics.HTTP_404_NOT_FOUND)    
        else:
            dep = Department.objects.all()
            serializers = DepartmentSerializer(dep, many=True)
        return Response(serializers.data)
    
    def post(self, request, *agrs, **kwargs):
        serializers = DepartmentSerializer(data=request.data)
        
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors)
        
    def put(self, request, pk, *agrs, **kwargs):
        dep = Department.objects.get(id=pk)
        serializers = DepartmentSerializer(instance=dep, data=request.data)
        if serializers.is_valid(): 
            serializers.save()
        return Response(serializers.data)        
    
    def delete(self, request, pk, *agrs, **kwargs):
        project = Department.objects.get(id=pk)
        project.delete()
        return Response('you delete')     