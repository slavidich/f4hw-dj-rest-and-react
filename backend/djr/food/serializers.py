from .models import *
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class DishSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Dish
        fields = '__all__'

class ListIngridientsSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer()
    class Meta:
        model = DishIngredient
        fields = '__all__'

class FullDish(serializers.Serializer):
    dish = DishSerializer()
    ingridients = ListIngridientsSerializer(many=True)

