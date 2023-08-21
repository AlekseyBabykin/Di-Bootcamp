import statistics
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Rental
from .serializers import *
from rest_framework.permissions import AllowAny
# Create your views here.

class RentalList(APIView):
    
    permission_classes = [AllowAny]
     
    def get(self, request, *agrs, **kwargs):
        rental = Rental.objects.order_by('return_date', 'rental_date')
        serializer = RentalSerializers(rental, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RentalSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class RentalDetails(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, pk, *agrs, **kwargs):
        rental = Rental.objects.get(id=pk)
        serializer = RentalSerializers(rental)
        return Response(serializer.data)
        
    
    def put(self, request, pk, *agrs, **kwargs):
        rental = Rental.objects.get(id=pk)
        serializer = RentalSerializers(instance=rental, data=request.data) 
        self.check_object_permissions(request, rental)
        serializer.save()
        return Response(serializer.data)        
    
    def delete(self, request, pk, *agrs, **kwargs):
        rental = Rental.objects.get(id=pk)
        rental.delete()
        return Response('you delete')
    
class CustomerList(APIView):
    
    permission_classes = [AllowAny]
     
    def get(self, request, *agrs, **kwargs):
        customer = Customer.objects.order_by('first_name')
        serializer = CustomerSerializers(customer , many=True)
        return Response(serializer.data)    

class CustomerListadding(APIView):
    
    permission_classes = [AllowAny]
     
    def get(self, request,*agrs, **kwargs):
        customer = Customer.objects.order_by('first_name')
        serializer = CustomerSerializers(customer , many=True)
        return Response(serializer.data)    
        
    def post(self, request, format=None):
        serializer = CustomerSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class VehicleList(APIView):
    def get(self, request, *agrs, **kwargs):
        vehicle = Vehicle.objects.order_by('vehicle_type')
        serializer = VehicleSerializers(vehicle, many=True)
        return Response(serializer.data)

class VehicleListdetail(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, pk, *agrs, **kwargs):
        vehicle = Vehicle.objects.get(id=pk)
        serializer = VehicleSerializers(vehicle)
        return Response(serializer.data)
    

    
    def put(self, request, pk, *agrs, **kwargs):
        vehicle = Vehicle.objects.get(id=pk)
        serializer = VehicleSerializers(instance=vehicle, data=request.data) 
        self.check_object_permissions(request, vehicle)
        serializer.save()
        return Response(serializer.data)        
    
    def delete(self, request, pk, *agrs, **kwargs):
        vehicle = Vehicle.objects.get(id=pk)
        vehicle.delete()
        return Response('you delete Vehicle')   
     
class VehicleListdetailadd(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, pk, *agrs, **kwargs):
        vehicle = Vehicle.objects.get(id=pk)
        serializer = VehicleSerializers(vehicle)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = VehicleSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
    

    
class RentalStationList(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, *agrs, **kwargs):
        rentalStation = RentalStation.objects.all()
        serializers = RentalSerializers(rentalStation, many=True)
        return Response(serializers.data)

class RentalStationListadd(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, *agrs, **kwargs):
        rentalStation = RentalStation.objects.all()
        serializer = RentalSerializers(rentalStation, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = RentalStationSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RentalStationid(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, station_id, *agrs, **kwargs):
        rentalStation = RentalStation.objects.get(id=station_id)
        serializer = RentalSerializers(rentalStation, many=True)
        return Response(serializer.data)
    
class DistributionStationList(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, *agrs, **kwargs):
        id = kwargs.get('pk', None)
        if id is not None:
            try:
                rentalStation = Address.objects.get(id=id)
                serializer = AddressSerializers(rentalStation)
            except Address.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)    
        else:
            rentalStation = Address.objects.all()
            serializer = AddressSerializers(rentalStation, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AddressSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
####### Daily Challenge #######
# 1
from django.db.models import Count
from django.db.models.functions import TruncMonth

class RentalStat(APIView):

    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response(Rental.objects.annotate(month=TruncMonth('rental_date')).values('month').annotate(total=Count('id')).order_by())

# 2

class Popular_Station(APIView):

    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        aggr_res = VehicleAtRentalStation.objects.values('rental_station').annotate(total=Count('id')).order_by('-total')
        for item in aggr_res:
            item['rental_station'] = RentalStation.objects.get(id=item['rental_station']).name
        return Response(aggr_res)

3#
from django.db.models import F
class MostRentedType(APIView):

    permission_classes = [AllowAny]
                   
    def get(self, request, *args, **kwargs):
        aggr_res = Rental.objects.values('vehicle') 
        aggr_res2 = aggr_res.annotate(vehicle_type = F('vehicle__vehicle_type')) 
        aggr_res3 = aggr_res2.values('vehicle_type').annotate(total=Count('vehicle')).order_by('-total') 
        for item in aggr_res3: 
            item['vehicle_type'] = Vehicle_Type.objects.get(id=item['vehicle_type']).name
        return Response(aggr_res3)    