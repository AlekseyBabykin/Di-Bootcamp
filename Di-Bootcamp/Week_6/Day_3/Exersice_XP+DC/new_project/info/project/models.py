from django.db import models

# Create your models here.
class Department(models.Model):
    name =models.CharField(max_length=50)
    description = models.TextField()
    
class Employee(models.Model):
    name =models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=50)
    departament = models.ForeignKey(Department, on_delete=models.CASCADE)
    project = models.ManyToManyField('Project')

class Task(models.Model):
    name =models.CharField(max_length=50)
    description = models.TextField()
    due_date = models.DateTimeField(auto_now_add=True)
    completed  = models.BooleanField()
    project = models.ForeignKey('Project', on_delete=models.CASCADE)
        
class Project(models.Model):
    name =models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(auto_now=True)
    

                