from django.db import models
# for Generic
from django.contrib.contenttypes.fields import GenericRelation
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Faculty(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255, default="computer")
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Category(models.Model):
    name = models.CharField(max_length=255)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name = 'faculty')


class Tutorial(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name = 'category')
    img = models.TextField()
    like = models.IntegerField()
    content = models.TextField()

class Admin(models.Model):
    user_name = models.CharField(max_length=255)
    password = models.CharField(max_length=70)
    img = models.TextField()







