from rest_framework import serializers
from django.db import models
from api.models import Category, Tutorial, Admin, Faculty

class FacultySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    icon = serializers.CharField()
    # class Meta:
    #     model = Faculty
    #     fields = ('id', 'name', 'icon')

class CategorySerializer(serializers.ModelSerializer):
    faculty = FacultySerializer()
    class Meta:
        model = Category
        fields = ('id', 'name', 'faculty')

class TutorialSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Tutorial
        fields = ('id', 'title', 'author', 'category', 'img', 'like', 'content')

class AdminSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    user_name = serializers.CharField()
    password = serializers.CharField()
    img = serializers.CharField()
    # class Meta:
    #     model = Admin
    #     fields = ('id', 'user_name', 'password', 'img')


