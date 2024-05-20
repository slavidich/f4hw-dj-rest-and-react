from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Dish)
admin.site.register(DishIngredient)
admin.site.register(Ingredient)
admin.site.register(Category)