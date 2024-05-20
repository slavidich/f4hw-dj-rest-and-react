from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import  Response
from rest_framework.decorators import api_view
from .models import Dish, Category, DishIngredient
from .serializers import DishSerializer, CategorySerializer, FullDish

# Create your views here.
def index(request):
    return HttpResponse("Страница приложения food")

#------API------
@api_view(['GET'])
def getlistcategories(request):
    items = Category.objects.all()
    serializer = CategorySerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getlistdishes(request):
    if 'catid' in request.query_params:
        items = Dish.objects.filter(category=request.query_params['catid'])
    else:
        items = Dish.objects.all()
    serializer =  DishSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getdish(request, dishid):
    fulldish = {}
    fulldish['dish'] = Dish.objects.get(id=dishid)
    fulldish['ingridients'] = DishIngredient.objects.filter(dish=dishid)
    serializer = FullDish(fulldish, many=False)
    return Response(serializer.data)

