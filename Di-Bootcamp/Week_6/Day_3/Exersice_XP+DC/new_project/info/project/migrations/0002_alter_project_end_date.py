# Generated by Django 4.2.4 on 2023-08-15 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='end_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
