"""
URL configuration for bike_store project.

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
from rent.views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('rental/', RentalList.as_view()),
    path('rental/<int:pk>', RentalDetails.as_view()),
    path('customer/', CustomerList.as_view(), name='customer'),
    path('customer/add', CustomerListadding.as_view()),
    path('vehicle/', VehicleList.as_view()),
    path('vehicle/<int:pk>', VehicleListdetail.as_view()),
    path('vehicle/add', VehicleListdetailadd.as_view()),
    path('station/', RentalStationList.as_view()),
    path('station/add', RentalStationListadd.as_view()),
    path('station/<int:station_id>', RentalStationid.as_view()),
    path('station/distribution', DistributionStationList.as_view()),
    path('station/distribution', DistributionStationList.as_view()),
    
    path('stats/monthly', RentalStat.as_view()),
    path('stats/popular_station', Popular_Station.as_view()),
       path('stats/popular_vehicle_type', MostRentedType.as_view()),
]
