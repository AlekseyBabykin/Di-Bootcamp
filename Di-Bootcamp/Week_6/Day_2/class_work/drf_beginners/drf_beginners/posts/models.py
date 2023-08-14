from django.db import models

# Create your models here.
CATEGORIES = [
    ('sci', 'scientific'),
    ('na', 'nature')
]

class Post(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField(blank=True, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=3, choices=CATEGORIES)
    def __str__(self) -> str:
        return f"{self.title}"