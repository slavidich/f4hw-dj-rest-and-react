# Generated by Django 5.0.6 on 2024-05-20 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0002_remove_category_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='dish',
            name='photo',
            field=models.ImageField(null=True, upload_to='files/'),
        ),
    ]
