# Generated by Django 4.2.4 on 2023-08-09 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=50)),
                ('text', models.TextField()),
                ('time_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
