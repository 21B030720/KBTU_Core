from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=255)
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






