# Generated by Django 4.2.4 on 2023-08-19 16:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rent', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicleatrentalstation',
            name='rental_station',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='rent.rentalstation'),
            preserve_default=False,
        ),
    ]
