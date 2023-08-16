"""
URL configuration for info project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from project.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/departments/', DepartmentAPIView.as_view(), name='department-operations'),
    path('api/departments/<int:pk>/', DepartmentAPIView.as_view(), name='department-operations'),
    path('api/employee/', EmployeeAPIView.as_view(), name='employee-operations'),
    path('api/employee/<int:pk>/', EmployeeAPIView.as_view(), name='employee-operations'),
    path('api/project/', ProjectAPIView.as_view(), name='project-operations'),
    path('api/project/<int:pk>/', ProjectAPIView.as_view(), name='project-operations'),
    path('api/task/', TaskAPIView.as_view(), name='task-operations'),
    path('api/task/<int:pk>/', TaskAPIView.as_view(), name='task-operations'),
]
