from rest_framework import serializers
from .models import Post, Author


class PostSerializer(serializers.ModelSerializer):


   class Meta:
       model = Post
       fields = (
           'id',
           'title',
           'content',
           'publish_date',
           'updated',
           'author',
           )


class AuthorSerializer(serializers.ModelSerializer):


   class Meta:
       model = Author
       fields = ('id', 'user', )