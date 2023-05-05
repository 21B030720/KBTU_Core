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
    path('tutorial/filter/<int:id>', views.filter, name="tutorial_filter"),
    path('tutorial/like/<int:id>', views.like, name="tutorial_like"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]