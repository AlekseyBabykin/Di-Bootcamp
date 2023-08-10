from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    timecreated = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('Author', on_delete=models.CASCADE)
    
class Author(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(blank=True, null=True)    