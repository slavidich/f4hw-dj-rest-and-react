from django.urls import path, include

from django.urls import path

from .views import *

urlpatterns = [
    path('/api/dishes', getlistdishes),
    path('/api/dishes/<int:dishid>', getdish),
    path('/api/categories', getlistcategories),
]