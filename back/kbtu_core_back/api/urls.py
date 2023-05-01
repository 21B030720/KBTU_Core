from django.urls import path, re_path
from api import views


urlpatterns = [
    path('faculty/', views.FacultyClass.as_view()),
    path('category/<int:id>/', views.CategoryClass.as_view()),
    path('tutorial/', views.TutorialClass.as_view()),
    path('tutorial/<int:id>/', views.TutorialClass.as_view()),
]