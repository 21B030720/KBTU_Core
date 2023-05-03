from rest_framework.views import APIView
from rest_framework import serializers
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse, HttpResponse
import json

from api.models import Tutorial
from api.serializers import *



class FacultyClass(APIView):
    def get(self, request, format=None):
        companies = Faculty.objects.all()
        serializer = FacultySerializer(companies, many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = FacultySerializer(data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CategoryClass(APIView):
    def post(self, request, id, format=None):
        faculty = Faculty.objects.get(id = id)
        data = json.loads(request.body)
        name = data.get('name', '')
        category = Category.objects.create(name = name, faculty = faculty)
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
class TutorialClass(APIView):
    def get(self, request, format=None, id = 0):
        if(id == 0):
            tutorials = Tutorial.objects.all()
            serializer = TutorialSerializer(tutorials, many=True)
            return Response(serializer.data)
        else:
            company = Tutorial.objects.get(id=id)
            serializer = TutorialSerializer(company)
            return Response(serializer.data)
    def post(self, request, format=None, id = 0):
        data = json.loads(request.body)
        # data1 = request.POST.get('category', None)
        # print(data1)
        title = data.get('title', '')
        author = data.get('author', '')
        category = Category.objects.get(id = id)
        img = data.get('img', '')
        like = data.get('like', '')
        content = data.get('content', '')
        tutorial = Tutorial.objects.create(title = title, author = author, category = category, img = img, like = like, content = content)
        serializer = TutorialSerializer(tutorial)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
def a1(request, id):
    faculty = Faculty.objects.get(id = id)
    category = Category.objects.filter(faculty = faculty)
    tutorial = Tutorial.objects.filter(category__in = category)
    serializer = TutorialSerializer(tutorial, many=True)
    return JsonResponse(serializer.data, safe=False)


