from .models import (Post,Author)
from rest_framework.permissions import (AllowAny,IsAuthenticated)
from .serializers import (PostSerializer,AuthorSerializer)
from rest_framework.generics import (ListAPIView)
from django.shortcuts import render

# Create your views here.
def home(request):
   return render(request, 'index.html')


class PostListView(ListAPIView):
   queryset = Post.objects.all()
   serializer_class = PostSerializer
   permission_classes = (AllowAny, )