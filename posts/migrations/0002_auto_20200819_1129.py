# Generated by Django 3.1 on 2020-08-19 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='park_number',
            name='p_local_name',
            field=models.CharField(max_length=100, verbose_name='공원위치지역'),
        ),
    ]
