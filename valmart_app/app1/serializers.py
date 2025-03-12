from rest_framework import serializers
from .models import ProductData

class ProductDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductData
        fields = '__all__'

# Example: Fetch all rows
# all_products = ProductData.objects.all()
# print(all_products)

# Example: Filter products by title
# filtered_products = ProductData.objects.filter(title__icontains='Laptop')
# print(filtered_products)

# Example: Get first product
# first_product = ProductData.objects.first()
# print(first_product)
