from rest_framework import serializers
from .models import *

class CustomerSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = Customer
        fields = "__all__"
class VehicleSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = Vehicle
        fields = "__all__"        
        
class Vehicle_TypeSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = Vehicle_Type
        fields = "__all__"

class Vehicle_SizeSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = Vehicle_Size
        fields = "__all__"

class RentalSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = Rental
        fields = "__all__"                        

class Rental_RateSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = Rental_Rate
        fields = "__all__"                        

class RentalStationSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = RentalStation
        fields = "__all__"                        
        
class AddressSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = Address
        fields = "__all__"                                                

class VehicleAtRentalStationSerializers(serializers.ModelSerializer):
    
    class Meta():
        model = VehicleAtRentalStation
        fields = "__all__"              