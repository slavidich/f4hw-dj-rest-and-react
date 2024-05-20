from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)


    def __str__(self):
        return self.name

class Dish(models.Model):
    name = models.CharField(max_length=200)
    recipe = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='files/', null=True)
    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    class Meta:
        ordering = ['name']

class DishIngredient(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.quantity} of {self.ingredient.name} for {self.dish.name}'

    class Meta:
        ordering = ['dish']