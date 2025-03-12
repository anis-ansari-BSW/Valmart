from django.urls import path
from .views import ProductDataList, ProductDataDetail
# from .views import ProductDataList, ProductDataDetail

urlpatterns = [
     path('products/', ProductDataList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDataDetail.as_view(), name='product-detail'),
    # path('register/', RegisterView.as_view(), name='register'),
    # path('login/', LoginView.as_view(), name='login'),
    # path('dataConnection/', ProductDataAdmin.as_view(), name='ProductDataAdmin'),
]