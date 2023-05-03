from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from django.urls import path, re_path
from api import views


urlpatterns = [
    path('faculty/', views.FacultyClass.as_view(), name="faculty"),
    path('category/<int:id>/', views.CategoryClass.as_view(), name="category"),
    path('tutorial/', views.TutorialClass.as_view(), name="tutorial"),
    path('tutorial/<int:id>/', views.TutorialClass.as_view(), name="tutorial_detail"),
    path('tutorial/filter/<int:id>', views.a1, name="tutorial_filter"),

]