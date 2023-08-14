from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, MinLengthValidator
from django.contrib.auth.models import User
# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200, blank=False)
    author = models.CharField(max_length=50, blank=False)
    published_date = models.DateField(blank=False )
    description = models.TextField(blank=False )
    page_count = models.PositiveIntegerField()
    categories = models.CharField(max_length=50, blank=False)
    thumbnail_url = models.URLField()
    
class BookReview(models.Model):
    the_associated_book = models.ForeignKey('Book', on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    review_text = models.TextField(MinLengthValidator(10))
        