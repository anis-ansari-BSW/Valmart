from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
import psycopg2
import csv
from .models import ProductData
from django.contrib import admin
# from app1.models import ProductData 
from rest_framework import generics
# from .models import ProductData
from .serializers import ProductDataSerializer

class ProductDataList(generics.ListCreateAPIView):
    queryset = ProductData.objects.all()
    serializer_class = ProductDataSerializer

class ProductDataDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductData.objects.all()
    serializer_class = ProductDataSerializer
 
# @admin.register(ProductData)
# class ProductDataAdmin(admin.ModelAdmin):
    # list_display = ('title', 'seller_name', 'brand')  # Customize fields to display
    # Example: Fetch all rows
    # all_products = ProductData.objects.all()
    # print(all_products)

    # Example: Filter products by title
    # filtered_products = ProductData.objects.filter(title__icontains='Laptop')
    # print(filtered_products)

    # Example: Get first product
    # first_product = ProductData.objects.first()
    # print(first_product)

 


