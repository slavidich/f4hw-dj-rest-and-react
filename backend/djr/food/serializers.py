from django.conf import settings
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
    img_url = serializers.SerializerMethodField()
    class Meta:
        model = Dish
        fields = '__all__'
    def get_img_url(self, obj):
        if settings.DEBUG:  # debug enabled for dev and stage
            return '%s%s' % ( settings.BASE_URL, obj.photo.url)
        return obj.img.url


class ListIngridientsSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer()
    class Meta:
        model = DishIngredient
        fields = '__all__'

class FullDish(serializers.Serializer):
    dish = DishSerializer()
    ingridients = ListIngridientsSerializer(many=True)

