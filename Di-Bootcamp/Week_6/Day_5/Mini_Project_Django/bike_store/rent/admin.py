from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *


admin.site.register(Customer)
admin.site.register(Vehicle)
admin.site.register(Vehicle_Type)
admin.site.register(Vehicle_Size)
admin.site.register(Rental)
admin.site.register(Rental_Rate)
admin.site.register(RentalStation)
admin.site.register(Address)
admin.site.register(VehicleAtRentalStation)
