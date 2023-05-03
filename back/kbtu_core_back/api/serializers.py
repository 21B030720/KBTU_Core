from rest_framework import serializers
from api.models import Category, Tutorial, Admin, Faculty

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ('id', 'name','icon')

class CategorySerializer(serializers.ModelSerializer):
    faculty = FacultySerializer()
    class Meta:
        model = Category
        fields = ('id', 'name', 'faculty')

class TutorialSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = Tutorial
        fields = ('id', 'title', 'author', 'category', 'img', 'like', 'content')

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('id', 'user_name', 'password', 'img')


