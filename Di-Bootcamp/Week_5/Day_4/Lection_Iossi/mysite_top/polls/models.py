from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(blank=True, null=True)
    
class Post(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    time_created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('Author', on_delete=models.CASCADE, null=True)
    
class Profile(models.Model):
    author = models.OneToOneField('Author', on_delete=models.CASCADE)
    image_url = models.URLField(blank=True, null=True)
    
class Category(models.Model):
    name = models.CharField(max_length=50)
    posts = models.ManyToManyField('Post', related_name='categories')    