# Generated by Django 3.0.5 on 2023-05-10 10:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('total_calories', models.IntegerField()),
                ('fat', models.IntegerField()),
                ('protein', models.IntegerField()),
                ('carbs', models.IntegerField()),
                ('category', models.CharField(choices=[('S', 'Snack'), ('B', 'Breakfast'), ('L', 'Lunch'), ('D', 'Dinner'), ('C', 'Cheat Meal')], max_length=1)),
                ('date_eaten', models.DateField(auto_now_add=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user_api.Profile')),
            ],
        ),
    ]
