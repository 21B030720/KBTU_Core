from rest_framework.views import APIView
from rest_framework import serializers
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse, HttpResponse
import json

from api.models import Tutorial
from api.serializers import *

from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes


class FacultyClass(APIView):
    permission_classes = [AllowAny]
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
    permission_classes = [AllowAny]
    def post(self, request, id, format=None):
        faculty = Faculty.objects.get(id = id)
        data = json.loads(request.body)
        name = data.get('name', '')
        category = Category.objects.create(name = name, faculty = faculty)
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
class TutorialClass(APIView):
    permission_classes = [IsAuthenticated]
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
        category = data.get('category', '')
        category = Category.objects.get(id = category)
        img = data.get('img', '')
        content = data.get('content', '')
        tutorial = Tutorial.objects.create(title = title, author = author, category = category, img = img, like=0, content = content)
        serializer = TutorialSerializer(tutorial)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    def put(self,request, id,format=None):
        data = json.loads(request.body)
        try:
            # data1 = request.POST.get('category', None)
            # print(data1)
            title = data.get('title', '')
            author = data.get('author', '')
            img = data.get('img', '')
            content = data.get('content', '')
            u=Tutorial.objects.all()
            #tutorial = Tutorial.objects.create(title = title, author = author, category = category, img = img, like = like, content = content)
            tutorial=Tutorial.objects.get(id=id)#.update(title = title, author = author, img = img, content = content)
            tutorial.title=title
            tutorial.author=author
            tutorial.img=img
            tutorial.content=content
            tutorial.save()
            serializer = TutorialSerializer(tutorial)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Tutorial.DoesNotExist as e:
            return JsonResponse({'error':'Cannot delete. Tutorial not found'},status=400)
    
    def delete(self,request, id,format=None):
        try:
            comp=Tutorial.objects.get(id=int(id))
            comp.delete()
            return JsonResponse({'deleted':'succesfully'})
        except Tutorial.DoesNotExist as e:
            return JsonResponse({'error':'Cannot delete. Tutorial not found'},status=400)
       
        

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filter(request, id):
    faculty = Faculty.objects.get(id = id)
    category = Category.objects.filter(faculty = faculty)
    tutorial = Tutorial.objects.filter(category__in = category)
    serializer = TutorialSerializer(tutorial, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
@permission_classes([AllowAny])
def like(request, id):
    tutorial = Tutorial.objects.get(id=id)
    tutorial.like=tutorial.like+1
    tutorial.save()
    serializer = TutorialSerializer(tutorial)
    return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)


