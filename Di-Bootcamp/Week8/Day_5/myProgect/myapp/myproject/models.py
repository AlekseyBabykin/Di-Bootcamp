from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()


class Author(models.Model):
   user = models.OneToOneField(User, on_delete=models.CASCADE)


   def __str__(self) -> str:
       return self.user.username


class Post(models.Model):
   author = models.ForeignKey(Author, on_delete=models.CASCADE)
   title = models.CharField(max_length=120)
   content = models.TextField()
   publish_date = models.DateTimeField(auto_now_add=True)
   updated = models.DateTimeField(auto_now=True)


   def __str__(self) -> str:
       return self.title